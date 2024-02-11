<script lang="ts">
	let indecies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<h1>Projects</h1>

{#each indecies as i}
	<article>
		<h2>Project {i}</h2>
		<p>Project {i} Description</p>
		<img src="https://via.placeholder.com/150" alt="Project {i}" />
		<a href="/projects/{i}">More...</a>
	</article>
{/each}
