import { useTheme } from "../../contexts/ThemeContext";

type Variant = 'dark' | 'light' | 'dark-strong' | 'light-strong' | 'xlight';

export function GlassBackground({
	children,
	className,
	variant,
}: {
	children: React.ReactNode;
	className?: string;
	variant?: {
		light?: Variant | null;
		dark?: Variant | null;
	};
}) {
	const { isDarkMode } = useTheme();

	const defaultVariant = isDarkMode ? 'dark' : 'xlight';
	const variantToUse = isDarkMode ? variant?.dark ?? defaultVariant : variant?.light ?? defaultVariant;

	if (
		(isDarkMode && variant?.dark === null) ||
		(!isDarkMode && variant?.light === null)
	) {
		return (
			<div className={className}>{children}</div>
		)
	}

	return (
		<div className={`glass-${variantToUse} ${className ?? ''}`}>{children}</div>
	)
}