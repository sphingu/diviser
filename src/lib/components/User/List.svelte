<script lang="ts">
	import { goto } from '$app/navigation'
	import { Button } from '$lib/components/common'

	const addUserClick = () => {
		goto('/users/new')
	}
	const editUserClick = () => {
		goto('/users/1')
	}
</script>

<h1>User List</h1>
<Button on:click={addUserClick}>Add User</Button>
<Button on:click={editUserClick}>Edit User</Button>
