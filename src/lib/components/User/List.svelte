<script lang="ts">
	import { goto } from '$app/navigation'

	import { Button } from '$lib/components'
	import type { IUser } from '$lib/helpers/user/types'

	export let users: IUser[]

	const navigateToEditUser = (userId) => {
		goto(`/users/${userId}`)
	}
</script>

<table>
	{#if users.length}
		{#each users as user}
			<tr>
				<td>
					ID: {user.id},<br /> Email: {user.email},<br /> name: {user.name}
				</td>
				<td>
					<Button on:click={() => navigateToEditUser(user.id)}>Edit User</Button>
				</td>
			</tr>
		{/each}
	{:else}
		No users found
	{/if}
</table>
