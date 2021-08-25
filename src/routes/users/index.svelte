<script lang="ts">
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	import { ALL_USERS } from '$lib/graphql'
	import { LoadData, UserList } from '$lib/components'
	import type { IUser } from '$lib/helpers/user/types'

	let data: { users: IUser[] }
	let reload

	onMount(() => {
		if ($page.query.has('reload')) {
			reload()
		}
	})
</script>

<LoadData bind:reload query={ALL_USERS} bind:value={data}>
	<button on:click={reload}>Reload</button>
	<UserList users={data.users} />
</LoadData>
