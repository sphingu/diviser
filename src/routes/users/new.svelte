<script>
	import { UserAddEdit } from '$lib/components/User'

	const addUser = async (values) => {
		console.log(values)
	}
</script>

<UserAddEdit isAdd={true} onSubmit={addUser} />
