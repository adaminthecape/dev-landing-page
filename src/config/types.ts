export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	link?: string | null;
	image: string;
}

export interface Stat {
	id: number;
	value: number;
	label: string;
	suffix: string;
}

export interface Testimonial {
	id: number;
	quote: string;
	author: string;
	role?: string;
	company?: string;
	avatar?: string;
	/** Star rating for the testimonial, from 1 to 5 */
	rating?: number;
}

export interface SectionOptions {
	testimonialOpts?: {
		blurRole?: boolean;
		blurCompany?: boolean;
		blurName?: boolean;
	};
	/** Not used for now - planned to supersede individual color options */
	colors?: {
		label?: string;
		tagline?: string;
		button?: string;
		buttonHover?: string;
	};
	/** Not used for now - planned to supersede `useGradientBackground` and `useBackgroundImage` */
	background?: {
		useGradient?: boolean;
		backgroundImage?: string;
	};
	/** Whether to use a gradient background */
	useGradientBackground?: boolean;
	/** Whether to use a background image */
	useBackgroundImage?: boolean;
	/** The background image to use if `useBackgroundImage` is true, based in `src/assets` (e.g. `hero.png`) */
	backgroundImage?: string;
	/** Tailwind classes for the header text */
	headerTextClasses?: string;
	/** Tailwind classes for the subheader text */
	subheaderTextClasses?: string;
	/** Tailwind color, e.g. 'blue', 'green', 'red' */
	buttonColorVariant?: string;
	/** Use the search filter (only works in the Projects section) */
	useFilter?: boolean;
};

export interface Section {
	id: string;
	label: string;
	tagline?: string | undefined;
	options?: SectionOptions;
}

export interface Capability {
	id: number;
	icon: string;
	title: string;
	description: string;
}

export interface Skill {
	category: string;
	blurb: string;
	skills: string[];
}

export interface LinkItem {
	label: string;
	href: string;
}

export interface FooterData {
	author: string;
	tagline: string;
	copyright: string;
	builtWith: string;
	links: LinkItem[];
}

export interface BaseData {
	logo?: string | null;
	logoDark?: string | null;
	logoLight?: string | null;
	author: string;
	title: string;
	tagline: string;
	/**
	 * The interval in milliseconds after which animations should reset.
	 * Set to 0 to disable animation reset.
	 */
	animationResetInterval?: number;
}