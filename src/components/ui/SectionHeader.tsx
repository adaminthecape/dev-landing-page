import { motion } from "framer-motion";
import { useAnimationReset } from "../../hooks/useAnimationReset";

export function SectionHeader({
	section
}: {
	section: {
		label: string;
		tagline?: string | undefined;
		options?: Record<string, any> | undefined;
	}
}) {
	const generation = useAnimationReset();
	const headerTextClasses = section.options?.headerTextClasses || "text-slate-900 dark:text-white";
	const subheaderTextClasses = section.options?.subheaderTextClasses || "text-slate-600 dark:text-slate-300";

	return (
		<motion.div
			key={`section-header-${generation}`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.2 }}
			className="text-center max-w-2xl mx-auto"
		>
			<div className={`text-4xl font-bold mb-2 ${headerTextClasses}`}>
				{section.label}
			</div>
			{section.tagline && <p className={`text-lg mb-8 max-w-2xl mx-auto ${subheaderTextClasses}`}>
				{section.tagline}
			</p>}
		</motion.div>
	);
}
