<script lang="ts">
	import { mutation } from 'svelte-apollo'

	import { goto } from '$app/navigation'
	import { ADD_USER } from '$lib/graphql'
	import { UserAddEdit, PageHeader } from '$lib/components'

	import type { IUser } from '$lib/helpers/user/types'

	const createUser = mutation(ADD_USER)

	const addUser = async (values: Partial<IUser>) => {
		try {
			await createUser({ variables: values })
			goto('/users?reload')
		} catch (error) {
			// TODO: handle error
			console.log(error)
		}
	}
</script>

<PageHeader backUrl="/users" title="Add User" />
<UserAddEdit isAdd={true} onSubmit={addUser} />
