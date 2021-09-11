<script lang="ts">
	const APP_COPYRIGHT = '© Diviser App 2020.'
	const MADE_WITH = ' Made with '
	const HEART = '♥'
	const BY = ' by '
	const AUTHOR_NAME = '@sphingu'
	const AUTHOR_LINK = 'https://github.com/sphingu'
</script>

<footer class="footer has-text-centered">
	<div class="container">
		<p>
			<strong class="has-text-weight-semibold">
				{APP_COPYRIGHT}
				{MADE_WITH}
				<span>{HEART}</span>
				{BY}
				<a href={AUTHOR_LINK}>{AUTHOR_NAME}</a>
			</strong>
		</p>
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: transparent;
		border-top: 1px dashed;
		padding-top: 0;
		padding-bottom: 0;
		.container {
			border-width: 0 1px;
			border-style: dashed;
			padding: 1em;
		}
	}
</style>
