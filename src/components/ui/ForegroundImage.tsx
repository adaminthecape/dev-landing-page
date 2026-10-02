/**
 * Component to render a div with an image, based on a provided image path.
 *
 * Props:
 * - imagePath: string - The path to the background image in the `src/assets/` directory.
 */
export function ForegroundImage({
	imagePath,
	className,
	width,
	height,
}: {
	imagePath: string;
	className?: string;
	width?: number;
	height?: number;
}) {
	function getImageUrl(path: string) {
		if (path.startsWith('/')) {
			path = path.slice(1);
		}

		return new URL(`../../assets/${path}`, import.meta.url).href;
	}

	const fullPath = getImageUrl(imagePath);

	console.log(fullPath);

	if (!width) {
		width = 100; // Default width if not provided
	}

	if (!height) {
		height = 100; // Default height if not provided
	}

	return (
		<img
			src={fullPath}
			width={width}
			height={height}
			className={className ?? ''}
		/>
	);
}