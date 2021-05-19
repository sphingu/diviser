<script>
	import { UserAddEdit } from '$lib/components/User'
	import { getFormFields } from '$lib/helpers/user'

	const handleSubmit = async (values) => {
		console.log(values)
	}
</script>

<UserAddEdit isAdd={true} fields={getFormFields()} onSubmit={handleSubmit} />
