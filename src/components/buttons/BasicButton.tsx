
/**
 * For each color (key), the given class represents a text color that will show up on the button with good contrast.
 */
const variantClassMap = {
	standard: {
		green: 'text-white hover:text-white dark:text-white dark:hover:text-white bg-green-500 hover:bg-green-700',
		blue: 'text-white hover:text-white dark:text-white dark:hover:text-white bg-blue-500 hover:bg-blue-700',
		red: 'text-white hover:text-white dark:text-white dark:hover:text-white bg-red-500 hover:bg-red-700',
		yellow: 'text-slate-900 hover:text-slate-900 dark:text-slate-900 dark:hover:text-slate-900 bg-yellow-500 hover:bg-yellow-700',
		gray: 'text-white hover:text-white dark:text-white dark:hover:text-white bg-gray-500 hover:bg-gray-700',
		purple: 'text-white hover:text-white dark:text-white dark:hover:text-white bg-purple-500 hover:bg-purple-700',
		slate: 'text-white hover:text-white dark:text-white dark:hover:text-white bg-slate-500 hover:bg-slate-700',
		orange: 'text-white hover:text-white dark:text-white dark:hover:text-white bg-orange-500 hover:bg-orange-700',
		white: 'text-slate-900 hover:text-slate-900 dark:text-slate-900 dark:hover:text-slate-900 bg-white hover:bg-gray-200',
	},
	outline: {
		green: 'border-2 border-green-500 text-green-500 hover:text-white dark:text-green-500 dark:hover:text-white hover:bg-green-500',
		blue: 'border-2 border-blue-500 text-blue-500 hover:text-white dark:text-blue-500 dark:hover:text-white hover:bg-blue-500',
		red: 'border-2 border-red-500 text-red-500 hover:text-white dark:text-red-500 dark:hover:text-white hover:bg-red-500',
		yellow: 'border-2 border-yellow-500 text-yellow-500 hover:text-white dark:text-yellow-500 dark:hover:text-white hover:bg-yellow-500',
		gray: 'border-2 border-gray-500 text-gray-500 hover:text-white dark:text-gray-500 dark:hover:text-white hover:bg-gray-500',
		purple: 'border-2 border-purple-500 text-purple-500 hover:text-white dark:text-purple-500 dark:hover:text-white hover:bg-purple-500',
		slate: 'border-2 border-slate-500 text-slate-500 hover:text-white dark:text-slate-500 dark:hover:text-white hover:bg-slate-500',
		orange: 'border-2 border-orange-500 text-orange-500 hover:text-white dark:text-orange-500 dark:hover:text-white hover:bg-orange-500',
		white: 'border-2 border-white-500 text-white hover:text-white dark:text-white dark:hover:text-white hover:bg-white'
	}
};

function getVariantClass(variant: keyof typeof variantClassMap, color: string): string {
	if (variant in variantClassMap && color in variantClassMap[variant]) {
		return (variantClassMap as Record<string, Record<string, string>>)[variant][color];
	}

	return 'text-white';
}

const buttonClasses = {
	outline: (color: string): string => {
		return `px-8 py-3 cursor-pointer rounded-lg transition font-semibold ${getVariantClass('outline', color)}`;
	},
	standard: (color: string): string => {
		return `px-8 py-3 cursor-pointer rounded-lg transition font-semibold ${getVariantClass('standard', color)}`;
	}
};

/**
 * A simple button component with Tailwind-friendly styling.
 */
export function BasicButton({
	children,
	variant,
	color,
	href,
	onClick,
}: {
	children: React.ReactNode;
	variant: keyof typeof buttonClasses;
	color: string;
	href?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
	if (!variant || typeof buttonClasses[variant] !== 'function') {
		return '{btn}';
	}

	const btn = (
		<button
			className={buttonClasses[variant](color)}
			onClick={onClick}
		>
			{children}
		</button>
	);

	if (href) {
		return (
			<button
				className={buttonClasses[variant](color)}
				onClick={onClick}
			>
				<a
					href={href}
				>
					{children}
				</a>
			</button>
		);
	}

	return btn;
}
