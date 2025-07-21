<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { Simulation, ZoomBehavior } from 'd3';

	export let graph: { nodes: any[]; links: any[] };

	let canvas: HTMLCanvasElement;
	let width = 500;
	let height = 600;
	let max = 100;
	let activeNode = false;

	$: links = graph.links.map((d) => Object.create(d));
	$: nodes = graph.nodes.map((d) => {
		d.size = Math.pow(
			graph.links
				.filter((link) => link.source == d.id || link.target == d.id)
				.map((link) => link.value)
				.reduce((a, b) => a + b, 0),
			2
		);
		if (d.id == 'You') {
			max = d.size;
			d.details.messages = max;
		}
		return Object.create(d);
	});

	$: if (simulation && nodes && links) {
		simulation.nodes(nodes);
		simulation.force('link')?.links(links);
		simulation.alpha(0.3).restart();
	}

	let transform = d3.zoomIdentity;
	interface MyNode extends d3.SimulationNodeDatum {
		id: string;
		size: number;
		details: { [key: string]: any }; // Adjust this based on your actual details structure
	}

	interface MyLink extends d3.SimulationLinkDatum<MyNode> {
		source: string | MyNode; // D3's forceLink can use string IDs or node objects
		target: string | MyNode;
		value: number;
	}
	let simulation: Simulation<MyNode, MyLink>;
	let context: CanvasRenderingContext2D;
	let zoom: ZoomBehavior<Element, unknown>;
	let dpi = 1;
	onMount(() => {
		dpi = window.devicePixelRatio || 1;
		context = canvas.getContext('2d');
		resize();

		simulation = d3
			.forceSimulation(nodes)
			.force(
				'link',
				d3
					.forceLink(links)
					.id((d) => d.id)
					.distance((d) => 2 + Math.sqrt(max) / 4 + 130 * Math.pow(2, -d.value / 1000))
			)
			.force('charge', d3.forceManyBody())
			.force('center', d3.forceCenter(width / 2, height / 2))
			.force(
				'collision',
				d3.forceCollide().radius((d) => 80 + Math.sqrt(d.size) / 5)
			)
			.on('tick', simulationUpdate);

		// title
		d3.select(context.canvas).on('click', (event) => {
			const d = simulation.find(
				transform.invertX(event.offsetX * dpi),
				transform.invertY(event.offsetY * dpi),
				50
			);

			if (d) activeNode = d;
			else activeNode = false;
		});

		d3.select(canvas)
			.call(
				d3
					.drag()
					.container(canvas)
					.subject(dragsubject)
					.on('start', dragstarted)
					.on('drag', dragged)
					.on('end', dragended)
			)
			.call(
				d3
					.zoom()
					.scaleExtent([1 / 10, 8])
					.on('zoom', zoomed)
			);
	});

	function simulationUpdate() {
		context.save();
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		context.translate(transform.x, transform.y);
		context.scale(transform.k, transform.k);

		const sourceNodeIds = new Set();
		const targetNodeIds = new Set();
		if (activeNode) {
			links.forEach((link) => {
				if (link.source.id === activeNode.id) {
					targetNodeIds.add(link.target.id);
				}
				if (link.target.id === activeNode.id) {
					sourceNodeIds.add(link.source.id);
				}
			});
		}

		links.forEach((d) => {
			const sourceRadius = 46 + Math.sqrt(d.source.size) / 5;
			const targetRadius = 46 + Math.sqrt(d.target.size) / 5;
			const angle = Math.atan2(d.target.y - d.source.y, d.target.x - d.source.x);

			const startX = d.source.x + sourceRadius * Math.cos(angle);
			const startY = d.source.y + sourceRadius * Math.sin(angle);
			const endX = d.target.x - targetRadius * Math.cos(angle);
			const endY = d.target.y - targetRadius * Math.sin(angle);

			const isConnected =
				activeNode && (d.source.id === activeNode.id || d.target.id === activeNode.id);
			const isUnselected = activeNode && !isConnected;

			context.beginPath();
			context.moveTo(startX, startY);
			context.lineTo(endX, endY);
			context.strokeStyle = isUnselected ? 'rgba(0,0,0,0.1)' : '#000';
			context.lineWidth = isUnselected ? 1 : 1.5;
			context.stroke();

			// arrowhead
			const headlen = 10;
			context.beginPath();
			context.moveTo(endX, endY);
			context.lineTo(
				endX - headlen * Math.cos(angle - Math.PI / 6),
				endY - headlen * Math.sin(angle - Math.PI / 6)
			);
			context.moveTo(endX, endY);
			context.lineTo(
				endX - headlen * Math.cos(angle + Math.PI / 6),
				endY - headlen * Math.sin(angle + Math.PI / 6)
			);
			context.lineWidth = isUnselected ? 1 : 3.0;
			context.strokeStyle = isUnselected ? 'rgba(0,0,0,0.1)' : '#000';
			context.stroke();
		});

		nodes.forEach((d, i) => {
			context.beginPath();
			context.arc(d.x, d.y, 45 + Math.sqrt(d.size) / 5, 0, 2 * Math.PI);
			context.strokeStyle = '#000';
			context.lineWidth = 5.0;
			if (activeNode) {
				if (d.id === activeNode.id) {
					context.fillStyle = 'orange';
				} else if (sourceNodeIds.has(d.id)) {
					context.fillStyle = 'lightgreen';
				} else if (targetNodeIds.has(d.id)) {
					context.fillStyle = 'lightblue';
				} else {
					context.fillStyle = 'rgba(255,255,255,0.5)';
				}
			} else {
				context.fillStyle = '#fff';
			}
			context.fill();
			context.stroke();
			// if (d.size > max / 50) {
			context.fillStyle = '#000';
			context.textAlign = 'center';
			context.textBaseline = 'top';
			context.font = '10px monospace';
			d.id.split(/(?=[A-Z])/).forEach((word, index, words) => {
				const yOffset = -((words.length - 1) * 10) / 2;
				context.fillText(word, d.x, d.y + yOffset + index * 10);
			});
			// }
		});
		context.restore();
	}

	function zoomed(currentEvent) {
		transform = currentEvent.transform;
		simulationUpdate();
	}

	// Use the d3-force simulation to locate the node
	function dragsubject(currentEvent) {
		const node = simulation.find(
			transform.invertX(currentEvent.x * dpi),
			transform.invertY(currentEvent.y * dpi),
			50
		);
		if (node) {
			node.x = transform.applyX(node.x);
			node.y = transform.applyY(node.y);
		}
		return node;
	}

	function dragstarted(currentEvent) {
		if (!currentEvent.active) simulation.alphaTarget(0.3).restart();
		currentEvent.subject.fx = transform.invertX(currentEvent.subject.x);
		currentEvent.subject.fy = transform.invertY(currentEvent.subject.y);
	}

	function dragged(currentEvent) {
		currentEvent.subject.fx = transform.invertX(currentEvent.x);
		currentEvent.subject.fy = transform.invertY(currentEvent.y);
	}

	function dragended(currentEvent) {
		if (!currentEvent.active) simulation.alphaTarget(0);
		currentEvent.subject.fx = null;
		currentEvent.subject.fy = null;
	}

	function resize() {
		if (!canvas) return;
		fitToContainer(canvas);
		if (simulation) {
			simulation.force('center', d3.forceCenter(width / 2, height / 2));
			simulation.alpha(0.3).restart();
		}
	}
	function fitToContainer(node: any) {
		dpi = window.devicePixelRatio || 1;
		// Make it visually fill the positioned parent
		node.style.width = '100%';
		node.style.height = '100%';
		// ...then set the internal size to match
		node.width = node.offsetWidth * dpi;
		node.height = node.offsetHeight * dpi;
		width = node.offsetWidth * dpi;
		height = node.offsetHeight * dpi;
	}
</script>

<svelte:window on:resize={resize} />

<div on:resize={resize} class="container">
	{#if activeNode}
		<breadcrumb id="nodeDetails">
			<strong>{activeNode.id.split(/(?=[A-Z])/).join(' ')}</strong>
			<br />
			{#if activeNode.details}
				{#each Object.entries(activeNode.details) as detail}
					{detail[0]}:
					{detail[1]}
					<br />
				{/each}
			{/if}
		</breadcrumb>
	{/if}
	<canvas use:fitToContainer bind:this={canvas}> </canvas>
</div>

<style>
	:global(body) {
		background-color: #f0f0f0;
	}
	.container {
		width: 100%;
		height: 100%;
		position: relative;
		flex: 1;
	}
	#nodeDetails {
		position: absolute;
		top: 10px;
		left: 10px;
		background: #fff;
		border: 1px solid #000;
		width: unset;
		color: #000;
		overflow-y: hidden;
		padding: 10px;
	}
</style>
