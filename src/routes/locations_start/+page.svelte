<script>
	export let data;
</script>

<!-- The HTML content of the page-->

<div class="container">
	<div class="row">
		<!-- Page Header -->
		<h2 class="mt-5">Locations from Supabase</h2>
	</div>
	{#if data.locations}
		{#each data.locations as location}
			<p>{location.id} | {location.name} | {location.longitude} | {location.latitude}</p>
		{/each}
		<table class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>id</th>
					<th>category</th>
					<th>name</th>
					<th>description</th>
					<th>Location (lat, long)</th>
				</tr>
			</thead>
			<tbody>
				{#each data.locations as location}
					<tr>
						<td>{location.id}</td>
						<td>{location.category_id}</td>
						<td>{location.name}</td>
						<td>{location.description}</td>
						<td>{location.latitude}, {location.longitude} </td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<p>No data to display</p>
	{/if}
</div>
<!-- End Main Content-->
