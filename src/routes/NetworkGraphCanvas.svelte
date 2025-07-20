<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	export let graph: { nodes: any[]; links: any[] };

	let canvas: HTMLCanvasElement;
	let width = 500;
	let height = 600;
	let max = 100;
	let activeNode = false;
	// const nodeRadius = 5;
	// const padding = { top: 20, right: 40, bottom: 40, left: 25 };

	// $: xScale = d3
	// 	.scaleLinear()
	// 	.domain([0, 20])
	// 	.range([padding.left, width - padding.right]);
	//
	// $: yScale = d3
	// 	.scaleLinear()
	// 	.domain([0, 12])
	// 	.range([height - padding.bottom, padding.top]);

	// $: xTicks = width > 180 ? [0, 4, 8, 12, 16, 20] : [0, 10, 20];
	//
	// $: yTicks = height > 180 ? [0, 2, 4, 6, 8, 10, 12] : [0, 4, 8, 12];
	//
	// $: d3yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

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

	function groupColour(context, d) {
		let nodesize = 2 + Math.sqrt(d.size) / 5;
		let radgrad = context.createRadialGradient(d.x, d.y, nodesize / 3, d.x, d.y, nodesize);
		radgrad.addColorStop(0, '#01abfc');
		radgrad.addColorStop(0.1, '#01abfc');
		radgrad.addColorStop(1, '#01abfc00');

		let radgrad2 = context.createRadialGradient(d.x, d.y, nodesize / 3, d.x, d.y, nodesize);
		radgrad2.addColorStop(0, '#7A17F6');
		radgrad2.addColorStop(0.1, '#7A17F6');
		radgrad2.addColorStop(1, '#7A17F600');

		let radgrad3 = context.createRadialGradient(d.x, d.y, nodesize / 3, d.x, d.y, nodesize);
		radgrad3.addColorStop(0, '#B635E3');
		radgrad3.addColorStop(0.1, '#B635E3');
		radgrad3.addColorStop(1, '#B635E300');

		let radgrad4 = context.createRadialGradient(d.x, d.y, nodesize / 3, d.x, d.y, nodesize);
		radgrad4.addColorStop(0, '#E4158B');
		radgrad4.addColorStop(0.1, '#E4158B');
		radgrad4.addColorStop(1, '#E4158B00');

		let radgrad5 = context.createRadialGradient(d.x, d.y, nodesize / 3, d.x, d.y, nodesize);
		radgrad4.addColorStop(0, '#F9123B');
		radgrad4.addColorStop(0.1, '#F9123B');
		radgrad4.addColorStop(1, '#F9123B00');
		let radgrads = [radgrad, radgrad2, radgrad3, radgrad4, radgrad5];
		return radgrads[d.group % 5];
	}
	let showCard;
	let transform = d3.zoomIdentity;
	let simulation, context, zoom;
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
			//.force('collision', d3.forceCollide().radius((d) => Math.sqrt(d.size)/4))
			.on('tick', simulationUpdate);

		// title
		d3.select(context.canvas).on('mousemove', (event) => {
			const d = simulation.find(
				transform.invertX(event.offsetX * dpi),
				transform.invertY(event.offsetY * dpi),
				50
			);

			if (d) activeNode = d;
			else activeNode = false;
		});

		d3.select(context.canvas).on('click', () => {
			if (activeNode) {
				const parentLink = links.find((l) => l.target.id === activeNode.id);
				if (parentLink && parentLink.source) {
					const parentNode = parentLink.source;
					const newTransform = d3.zoomIdentity
						.translate(width / 2, height / 2)
						.scale(transform.k > 2 ? transform.k : 2)
						.translate(-parentNode.x, -parentNode.y);

					d3.select(canvas).transition().duration(750).call(zoom.transform, newTransform);
				} else {
					showCard = JSON.parse(JSON.stringify({ id: activeNode.id, details: activeNode.details }));
				}
			}
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

		links.forEach((d) => {
			const angle = Math.atan2(d.target.y - d.source.y, d.target.x - d.source.x);
			const nodeRadius = 2 + Math.sqrt(d.target.size) / 5;
			const targetX = d.target.x - nodeRadius * Math.cos(angle);
			const targetY = d.target.y - nodeRadius * Math.sin(angle);
			const headlen = 10; // length of head in pixels

			context.beginPath();
			context.moveTo(d.source.x, d.source.y);
			context.lineTo(targetX, targetY);

			// arrowhead
			context.moveTo(targetX, targetY);
			context.lineTo(
				targetX - headlen * Math.cos(angle - Math.PI / 6),
				targetY - headlen * Math.sin(angle - Math.PI / 6)
			);
			context.moveTo(targetX, targetY);
			context.lineTo(
				targetX - headlen * Math.cos(angle + Math.PI / 6),
				targetY - headlen * Math.sin(angle + Math.PI / 6)
			);

			context.globalAlpha = 0.3;
			context.strokeStyle = '#999';
			context.lineWidth = Math.cbrt(d.value) / 2;
			context.stroke();
			context.globalAlpha = 1;
		});

		nodes.forEach((d, i) => {
			context.beginPath();
			context.arc(d.x, d.y, 2 + Math.sqrt(d.size) / 5, 0, 2 * Math.PI);
			context.strokeStyle = 'transparent';
			context.lineWidth = 1.5;
			context.stroke();
			context.fillStyle = groupColour(context, d);
			context.fill();
			if (d.size > max / 50) {
				context.fillStyle = 'white';
				d.id
					.split(/(?=[A-Z])/)
					.forEach((word, index) => context.fillText(word, d.x - 10, d.y + 10 * index));
			}
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
		({ width, height } = canvas);
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
		background-color: #000;
	}
	.container {
		width: 100%;
		height: 100%;
		position: relative;
		flex: 1;
	}
	#nodeDetails {
		position: absolute;
		top: 1%;
		left: 1%;
		width: unset;
		color: #eee;
		overflow-y: hidden;
	}
</style>
