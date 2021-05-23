<script lang="ts">
	import { ALL_USERS } from '$lib/graphql'
	import { LoadData, UserList } from '$lib/components'
	import type { IUser } from '$lib/helpers/user/types'

	let data: { users: IUser[] }
</script>

<LoadData query={ALL_USERS} bind:value={data}>
	<span slot="loading">My Custom Loading...</span>
	<span style="color: red" slot="error">My Custom Error...</span>
	<UserList users={data.users} />
</LoadData>
