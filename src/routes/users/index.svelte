<script lang="ts">
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	import { ALL_USERS } from '$lib/graphql'
	import { LoadData, UserList, PageHeader, LinkButton } from '$lib/components'
	import type { IUser } from '$lib/helpers/user/types'

	let data: { users: IUser[] }
	let reload

	onMount(() => {
		if ($page.query.has('reload')) {
			reload()
		}
	})
</script>

<PageHeader title="User List" />
<div class="block">
	<LinkButton path="/users/new">
		<i slot="icon" class="ri-add-circle-line ri-xl" />
		<span>Add User</span>
	</LinkButton>
</div>

<LoadData bind:reload query={ALL_USERS} bind:value={data}>
	<UserList users={data.users} />
</LoadData>
