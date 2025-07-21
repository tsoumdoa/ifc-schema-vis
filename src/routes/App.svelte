<script>
	import NetworkGraph from './NetworkGraphCanvas.svelte';
	import SearchBox from './SearchBox.svelte';
	import data from './data.js';

	let searchTerm = '';
	let filteredData = data;

	function handleSearch(event) {
		searchTerm = event.detail.toLowerCase();
		updateFilteredData();
	}

	function updateFilteredData() {
		if (!searchTerm) {
			filteredData = data;
			return;
		}

		const matchingNodes = data.nodes.filter((node) => node.id.toLowerCase().includes(searchTerm));
		const matchingNodeIds = new Set(matchingNodes.map((node) => node.id));

		const connectedLinks = data.links.filter(
			(link) => matchingNodeIds.has(link.source) || matchingNodeIds.has(link.target)
		);

		const connectedNodeIds = new Set();
		connectedLinks.forEach((link) => {
			connectedNodeIds.add(link.source);
			connectedNodeIds.add(link.target);
		});

		const allRelevantNodes = data.nodes.filter((node) => connectedNodeIds.has(node.id));

		filteredData = {
			nodes: allRelevantNodes,
			links: connectedLinks
		};
	}
</script>

<div class="container">
	<h2 style="color:black">IFX2X3 Schema Network</h2>
	<SearchBox on:search={handleSearch} />
	<div class="chart">
		<NetworkGraph graph={filteredData} />
	</div>
</div>

<style>
	.chart {
		width: 100%;
		height: 100%;
		margin: 0rem;
		display: flex;
		flex-direction: column;
	}
	.container {
		padding-top: 0rem;
		margin: 0rem;
		width: 100vw;
		height: 100vh;
	}
	h2 {
		margin-top: 1rem;
		margin-bottom: 1rem;
		margin-left: 0.8rem;
	}
</style>
