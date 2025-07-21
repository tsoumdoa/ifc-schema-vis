<script>
	import NetworkGraph from './NetworkGraphCanvas.svelte';
	import data from './data.js';
</script>

<div class="container">
	<h2 style="color:black">IFX2X3 Schema Network</h2>
	<div class="chart">
		<NetworkGraph graph={data} />
	</div>
</div>

<style>
	.chart {
		width: 100dvw;
		height: 100dvh;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
	.container {
		padding: 1rem;
		width: 100vw;
		height: 100vh;
	}
	h2 {
		margin: 0;
	}
</style>
