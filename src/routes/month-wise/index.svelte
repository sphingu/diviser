<script lang="ts">
	import { goto } from '$app/navigation'

	import { getMonthName } from '$lib/helpers'

	const monthlyTransactions = [
		{
			month: 10,
			year: 2021,
			count: 5
		},
		{
			month: 9,
			year: 2021,
			count: 20
		},
		{
			month: 10,
			year: 2021,
			count: 5
		},
		{
			month: 9,
			year: 2021,
			count: 20
		},
		{
			month: 10,
			year: 2021,
			count: 5
		},
		{
			month: 9,
			year: 2021,
			count: 20
		}
	]
		.map((monthInfo) => ({
			...monthInfo,
			title: `${getMonthName(monthInfo.month + 1)} ${monthInfo.year}`
		}))
		.filter((a) => false)
	const addTransctionClick = () => {
		goto('/transactions/new')
	}
</script>

<h1 class="title">Monthly Report</h1>

{#if monthlyTransactions.length}
	<div class="columns is-desktop is-one-third is-multiline is-centered">
		{#each monthlyTransactions as monthInfo}
			<div class="column is-4-desktop">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">{monthInfo.title}</p>
					</header>
					<div class="card-content">
						<div class="content">
							<p>
								Count : {monthInfo.count}
							</p>
						</div>
					</div>
					<footer class="card-footer">
						<a href="/" class="card-footer-item">View</a>
					</footer>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div class="columns is-centered">
		<div class="column is-half">
			<div class="box has-text-info">
				<div class="block ser-v-center">
					<i class="ri-information-line ri-4x" />
					<h2 class="subtitle has-text-info">No transactions has been made yet.</h2>
				</div>
				<button class="button is-link is-medium is-fullwidth" on:click={addTransctionClick}>
					<span class="icon">
						<i class="ri-add-circle-line" />
					</span>
					<span> Add Transaction </span>
				</button>
			</div>
		</div>
	</div>
{/if}
