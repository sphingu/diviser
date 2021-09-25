<script lang="ts">
	import { goto } from '$app/navigation'
	import { PageHeader, LinkButton } from '$lib/components'

	let value: string

	const addUserClick = () => {
		goto('/transactions/new')
	}
	const editUserClick = () => {
		goto(`/transactions/${value}`)
	}
</script>

<PageHeader title="Transaction List" />

<div class="block">
	<LinkButton path="/transactions/new">
		<i slot="icon" class="ri-add-circle-line ri-xl" />
		<span>Add Transaction</span>
	</LinkButton>
</div>

<div class="block">
	<input type="text" class="input" bind:value />
	<button class="button" on:click={editUserClick}>Edit User</button>
</div>
