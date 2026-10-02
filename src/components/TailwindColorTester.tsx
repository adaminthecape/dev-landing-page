import { TooltipOnHover } from "./ui/TooltipOnHover";

/**
 * This component renders a row of Tailwind CSS color swatches.
 * 
 * Each color swatch represents a specific Tailwind CSS color and shade combination.
 * 
 * Each swatch can be clicked to trigger an optional callback with the color and shade information.
 * 
 * If any swatches do not have a background color defined, they will still be rendered with a bottom-border indicating the color and shade.
 * 
 * Any swatches that do not have a background color rendered are likely missing because there are no components in the codebase with that color combination defined, and therefore Tailwind does not bundle it with the final CSS. Colors must be defined explicitly in class names to be included in the final CSS (not defined procedurally).
 */
export function TailwindColorTester({
	onClick,
}: {
	onClick?: (color: string, number: number) => void;
}) {
	const validNumbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
	const validColors = ["red", "green", "blue", "yellow", "purple"];

	return (
		<div className="p-2 text-xs flex flex-wrap">
			{validColors.map((color) => (
				validNumbers.map((number) => (
					<div key={`${color}-${number}`} onClick={() => onClick?.(color, number)}>
						<TooltipOnHover text={`${color.charAt(0).toUpperCase() + color.slice(1)} ${number}`}>
							<div className={`bg-${color}-${number} p-2 mb-2`} style={{
								borderBottom: `${number / 200}px solid ${color}`
							}}>
							</div>
						</TooltipOnHover>
					</div>
				))
			))}
		</div>
	);
}
