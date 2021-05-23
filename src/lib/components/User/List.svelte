<script lang="ts">
	import { goto } from '$app/navigation'
	import { Button } from '$lib/components'
	import type { IUser } from '$lib/helpers/user/types'

	export let users: IUser[]

	const addUserHandler = () => {
		goto('/users/new')
	}
	const editUserHandler = (userId) => {
		goto(`/users/${userId}`)
	}
</script>

<h1>User List</h1>

<Button on:click={addUserHandler}>Add User</Button>

<table>
	{#if users.length}
		{#each users as user}
			<tr>
				<td>
					ID: {user.id}, Email: {user.email}, name: {user.name}
				</td>
				<td>
					<Button on:click={() => editUserHandler(user.id)}>Edit User</Button>
				</td>
			</tr>
		{/each}
	{:else}
		No Users
	{/if}
</table>
