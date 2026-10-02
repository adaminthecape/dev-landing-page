import { Section } from "./types";

export function extractSectionStyles(section: Section) {
	const {
		headerTextClasses,
		subheaderTextClasses,
		buttonColorVariant,
	} = section.options || {};

	return {
		headerTextClasses: headerTextClasses ?? 'text-slate-900 dark:text-white',
		subheaderTextClasses: subheaderTextClasses ?? 'text-slate-600 dark:text-slate-300',
		buttonColor: buttonColorVariant || 'purple',
	};
}
