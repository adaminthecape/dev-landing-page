/**
 * Component to render a div with a background image, based on a provided image path.
 *
 * Props:
 * - imagePath: string - The path to the background image in the `src/assets/` directory.
 */
export function BackgroundImage({
	imagePath,
	children,
	className,
}: {
	imagePath: string;
	children?: React.ReactNode;
	className?: string;
}) {
	function getBackgroundImageUrl(path: string) {
		if (path.startsWith('/')) {
			path = path.slice(1);
		}

		return new URL(`../../assets/${path}`, import.meta.url).href;
	}

	const fullPath = getBackgroundImageUrl(imagePath);

	console.log(fullPath);

	return (
		<div
			className={`w-full h-full bg-cover bg-center ${className ?? ''}`}
			style={{ backgroundImage: `url(${fullPath})` }}
		>
			{children}
		</div>
	);
}