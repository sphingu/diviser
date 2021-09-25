<script lang="ts">
	import { page } from '$app/stores'
	import { PageHeader } from '$lib/components'

	let id = $page.params.id
</script>

<PageHeader backUrl="/transactions" title="Edit Transaction" />
<h2>{id}</h2>
