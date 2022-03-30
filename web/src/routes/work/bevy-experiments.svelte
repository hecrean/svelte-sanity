<script lang="ts">
	import HomeLayout from '$layouts/Home.layout.svelte';
</script>

<HomeLayout>
	<h1 slot="header">Our headers</h1>

	<svelte:fragment slot="article">
		<h2>article here</h2>
	</svelte:fragment>
	<h3 slot="footer">Footer here</h3>
</HomeLayout>
