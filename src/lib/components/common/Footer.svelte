<script lang="ts">
	const APP_COPYRIGHT = '© Diviser App 2020.'
	const MADE_WITH = ' Made with '
	const HEART = '♥'
	const BY = ' by '
	const AUTHOR_NAME = '@sphingu'
	const AUTHOR_LINK = 'https://github.com/sphingu'
</script>

<footer class="border-box flex-center">
	{APP_COPYRIGHT}
	{MADE_WITH}
	<span>{HEART}</span>
	{BY}
	<a href={AUTHOR_LINK}>{AUTHOR_NAME}</a>
</footer>
