export const ButtonPlayers = () => (
	<svg width="82" height="46" viewBox="0 0 82 46" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="59" cy="23" r="23" fill="black" />
		<circle cx="59" cy="23" r="20" fill="#FFCE67" />
		<path
			d="M74.5833 21.2083C74.5833 27.5595 69.4346 32.7083 63.0833 32.7083C56.732 32.7083 51.5833 27.5595 51.5833 21.2083H54.5833C54.5833 25.9027 58.3889 29.7083 63.0833 29.7083C67.7777 29.7083 71.5833 25.9027 71.5833 21.2083H74.5833Z"
			fill="black"
		/>
		<path d="M62.375 14.6666V19.6536H59.375V14.6666H62.375Z" fill="black" />
		<path d="M70.7083 14.6666V19.6536H67.7083V14.6666H70.7083Z" fill="black" />
		<circle cx="23" cy="23" r="23" fill="black" />
		<circle cx="23" cy="23" r="20" fill="#FFCE67" />
		<path
			d="M38.5833 21.2083C38.5833 27.5595 33.4346 32.7083 27.0833 32.7083C20.732 32.7083 15.5833 27.5595 15.5833 21.2083H18.5833C18.5833 25.9027 22.3889 29.7083 27.0833 29.7083C31.7777 29.7083 35.5833 25.9027 35.5833 21.2083H38.5833Z"
			fill="black"
		/>
		<path d="M26.375 14.6666V19.6536H23.375V14.6666H26.375Z" fill="black" />
		<path d="M34.7083 14.6666V19.6536H31.7083V14.6666H34.7083Z" fill="black" />
	</svg>
);

export const Smile = ({ yellow }: { yellow?: boolean }) => (
	<svg width="54" height="59" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle r="27" transform="matrix(-1 0 0 1 27 27)" fill="black" />
		<circle r="27" transform="matrix(-1 0 0 1 27 32)" fill="black" />
		<circle r="24" transform="matrix(-1 0 0 1 27 27)" fill={yellow ? `#FFCE67` : `#FD6687`} />
		<path
			d="M12.75 25.25C12.75 32.7058 18.7942 38.75 26.25 38.75C33.7058 38.75 39.75 32.7058 39.75 25.25H36.75C36.75 31.049 32.049 35.75 26.25 35.75C20.451 35.75 15.75 31.049 15.75 25.25H12.75Z"
			fill="black"
		/>
		<path d="M30 17V22.9844H33V17H30Z" fill="black" />
		<path d="M20 17V22.9844H23V17H20Z" fill="black" />
	</svg>
);

export const Frown = ({ yellow }: { yellow?: boolean }) => (
	<svg width="54" height="59" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle r="27" transform="matrix(-1 0 0 1 27 27)" fill="black" />
		<circle r="27" transform="matrix(-1 0 0 1 27 32)" fill="black" />
		<circle r="24" transform="matrix(-1 0 0 1 27 27)" fill={yellow ? `#FFCE67` : `#FD6687`} />
		<path d="M35.5 17V20H29.5V17H35.5Z" fill="black" />
		<path d="M24.5 17V20H18.5V17H24.5Z" fill="black" />
		<path d="M39 24V27H15V24H39Z" fill="black" />
	</svg>
);

export const PlayerChip = () => (
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 70 75"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="35" cy="35" r="35" fill="black" />
		<circle cx="35" cy="40" r="35" fill="black" />
		<g filter="url(#filter0_i_5_6362)">
			<circle cx="35" cy="35" r="32" fill="currentColor" />
		</g>
		<defs>
			<filter
				id="filter0_i_5_6362"
				x="3"
				y="3"
				width="64"
				height="64"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="5" />
				<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
				<feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_6362" />
			</filter>
		</defs>
	</svg>
);
