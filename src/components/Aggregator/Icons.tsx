const GasIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		data-prefix="far"
		data-icon="gas-pump"
		role="img"
		viewBox="0 0 512 512"
		width={16}
		height={16}
	>
		<path
			fill="currentColor"
			d="M493.3 107.3l-86.6-86.6c-3.1-3.1-8.2-3.1-11.3 0l-22.6 22.6c-3.1 3.1-3.1 8.2 0 11.3L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V48c0-26.5-21.5-48-48-48H80C53.5 0 32 21.5 32 48v416H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-24V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.7-33.3-18.7-45.3zM272 464H80V240h192v224zm0-272H80V48h192v144z"
		/>
	</svg>
)

const CrossIcon = () => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
				fill="currentColor"
			/>
		</svg>
	)
}

const ArrowIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<title>Arrow Forward</title>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="48"
				d="M268 112l144 144-144 144M392 256H100"
			/>
		</svg>
	)
}

export { GasIcon, CrossIcon, ArrowIcon }
