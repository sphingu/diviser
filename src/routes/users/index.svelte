<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	import { ALL_USERS } from '$lib/graphql'
	import { LoadData, UserList, Button } from '$lib/components'
	import type { IUser } from '$lib/helpers/user/types'

	let data: { users: IUser[] }
	let reload

	onMount(() => {
		if ($page.query.has('reload')) {
			reload()
		}
	})

	const navigateToAddUser = () => {
		goto('/users/new')
	}
</script>

<h1 class="title">User List</h1>

<button class="button is-medium is-link is-light" on:click={navigateToAddUser}>
	<span class="icon">
		<i class="ri-user-add-line ri-xl" />
	</span>
</button>

<LoadData bind:reload query={ALL_USERS} bind:value={data}>
	<UserList users={data.users} />
</LoadData>
