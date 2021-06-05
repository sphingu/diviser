<script lang="ts">
	import { ALL_USERS } from '$lib/graphql'
	import { LoadData, UserList } from '$lib/components'
	import type { IUser } from '$lib/helpers/user/types'

	let data: { users: IUser[] }
</script>

<LoadData query={ALL_USERS} bind:value={data}>
	<UserList users={data.users} />
</LoadData>
