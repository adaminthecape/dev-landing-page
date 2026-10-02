import { BaseData, Capability, Project, Skill, Stat, Testimonial, FooterData, LinkItem, Section } from "./types";

export const BASE_DATA: BaseData = {
	logo: 'logo-example.png',
	author: 'Alex Example',
	title: 'Full Stack Developer & Creative Technologist',
	tagline: "Building elegant solutions to complex problems. Passionate about clean code, user experience, and emerging technologies.",
	animationResetInterval: 60000, // 60 seconds
};

export const CAPABILITY_DATA: Capability[] = [
	{
		id: 1,
		icon: 'react',
		title: 'Modern Web Development',
		description: 'Building responsive, interactive web applications with React, TypeScript, and cutting-edge frontend frameworks.',
	},
	{
		id: 2,
		icon: 'server',
		title: 'Backend & API Design',
		description: 'Creating scalable server-side solutions with Node.js, databases, and RESTful/GraphQL APIs.',
	},
	{
		id: 3,
		icon: 'palette',
		title: 'UI/UX Design',
		description: 'Crafting beautiful, intuitive interfaces with attention to accessibility and user-centered design principles.',
	},
	{
		id: 4,
		icon: 'cloud',
		title: 'Cloud & DevOps',
		description: 'Deploying and managing applications on AWS, Azure, and other cloud platforms with CI/CD pipelines.',
	},
];

export const PROJECT_DATA: Project[] = [
	{
		id: 1,
		title: 'E-Commerce Analytics Dashboard',
		description: 'A real-time analytics platform for monitoring sales, customer behavior, and inventory across multiple storefronts. Features interactive charts, predictive analytics, and automated reporting.',
		technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js', 'Docker'],
		link: 'https://github.com/example/ecommerce-dashboard',
		image: 'project-dashboard.jpg',
	},
	{
		id: 2,
		title: 'Social Collaboration Tool',
		description: 'A real-time collaboration platform for remote teams to communicate, share files, and manage projects. Includes video conferencing integration and persistent message history.',
		technologies: ['React', 'Socket.io', 'WebRTC', 'Express', 'MongoDB', 'Redis'],
		link: 'https://github.com/example/collab-tool',
		image: 'project-collab.jpg',
	},
	{
		id: 3,
		title: 'Mobile Weather App',
		description: 'Cross-platform weather application with real-time updates, location services, and personalized weather alerts. Built with focus on performance and offline capabilities.',
		technologies: ['React Native', 'TypeScript', 'Firebase', 'GraphQL', 'Google Maps API'],
		link: 'https://github.com/example/weather-app',
		image: 'project-weather.jpg',
	},
	{
		id: 4,
		title: 'AI Content Generator',
		description: 'Web application leveraging GPT APIs to help writers and marketers generate high-quality content. Features custom templates, tone adjustment, and content management system.',
		technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Tailwind CSS', 'Stripe'],
		link: 'https://github.com/example/ai-content-gen',
		image: 'project-ai.jpg',
	},
	{
		id: 5,
		title: 'Developer Portfolio Generator',
		description: 'Open-source tool for developers to create beautiful portfolio landing pages with minimal effort. Supports dark mode, animations, and multiple color themes.',
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
		link: 'https://github.com/example/portfolio-gen',
		image: 'project-portfolio.jpg',
	},
	{
		id: 6,
		title: 'Task Management System',
		description: 'Enterprise-grade project management tool with real-time collaboration, sprint planning, and resource allocation. Integrated with popular communication tools.',
		technologies: ['Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'AWS Lambda'],
		link: 'https://github.com/example/task-manager',
		image: 'project-tasks.jpg',
	},
];

export const SKILL_DATA: Skill[] = [
	{
		category: 'Frontend',
		blurb: 'Creating beautiful, responsive interfaces with modern frameworks and best practices',
		skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion', 'Redux', 'React Query'],
	},
	{
		category: 'Backend',
		blurb: 'Building scalable, secure, and efficient server-side applications',
		skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
	},
	{
		category: 'DevOps & Cloud',
		blurb: 'Deploying and managing applications across cloud platforms with automation',
		skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform', 'Azure', 'GCP'],
	},
	{
		category: 'Mobile Development',
		blurb: 'Building cross-platform mobile applications with native and hybrid approaches',
		skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
	},
	{
		category: 'Tools & Workflow',
		blurb: 'Proficient with essential development tools and workflows',
		skills: ['Git', 'VS Code', 'Figma', 'Jira', 'NPM/Yarn', 'Jest', 'Webpack', 'Vite'],
	},
];

export const STAT_DATA: Stat[] = [
	{
		id: 1,
		value: 50,
		label: 'Projects Completed',
		suffix: '+',
	},
	{
		id: 2,
		value: 8,
		label: 'Years of Experience',
		suffix: '+',
	},
	{
		id: 3,
		value: 35,
		label: 'Happy Clients',
		suffix: '+',
	},
];

export const TESTIMONIAL_DATA: Testimonial[] = [
	{
		id: 1,
		quote: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. The code quality and attention to detail were outstanding. Highly recommend!',
		author: 'Sarah Johnson',
		role: 'Founder',
		company: 'TechStart Inc',
		rating: 5,
	},
	{
		id: 2,
		quote: 'Working with Alex was a pleasure. They quickly understood our vision and built a scalable solution that handled 10x our initial traffic. True professional.',
		author: 'Michael Chen',
		role: 'CTO',
		company: 'DataFlow Systems',
		rating: 5,
	},
	{
		id: 3,
		quote: 'The dashboard Alex created transformed how our team monitors operations. User-friendly, performant, and beautifully designed. Worth every penny.',
		author: 'Emma Rodriguez',
		role: 'Operations Manager',
		company: 'Global Commerce Ltd',
		rating: 5,
	},
	{
		id: 4,
		quote: 'Best developer I\'ve worked with. Alex brings both technical expertise and great communication. The project shipped on time and on budget.',
		author: 'David Park',
		role: 'Product Manager',
		company: 'Innovate Labs',
		rating: 5,
	},
];

export const FOOTER_DATA: FooterData = {
	author: BASE_DATA.author,
	tagline: "Transforming ideas into elegant code. Let's build something amazing together.",
	copyright: `© ${new Date().getFullYear()} ${BASE_DATA.author} - All rights reserved.`,
	builtWith: 'Designed and built with React, TypeScript, and Tailwind CSS.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/alexexample' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/alexexample' },
		{ label: 'Twitter', href: 'https://twitter.com/alexexample' },
		{ label: 'Email', href: 'mailto:hello@alexexample.dev' },
	],
};

export const HEADER_LINK_DATA: LinkItem[] = [
	{ label: 'About', href: '#top' },
	{ label: 'Capabilities', href: '#capabilities' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Stats', href: '#stats' },
	{ label: 'Testimonials', href: '#testimonials' },
];

export const SECTION_DATA: Record<string, Section> = {
	hero: {
		id: 'home',
		label: 'Home',
		options: {
			useGradientBackground: false,
			useBackgroundImage: true,
			backgroundImage: 'cables.jpg',
			headerTextClasses: 'text-slate-100 dark:text-white text-shadow-lg',
			subheaderTextClasses: 'text-slate-100 dark:text-slate-300 text-shadow-lg',
			buttonColorVariant: 'blue',
		}
	},
	capabilities: {
		id: 'capabilities',
		label: 'Capabilities',
		tagline: 'What I focus on and the value I bring.',
	},
	projects: {
		id: 'projects',
		label: 'Personal Projects',
		tagline: 'Explore my recent projects showcasing expertise in full-stack development, UI/UX design, and cloud technologies.',
	},
	skills: {
		id: 'skills',
		label: 'Skills',
		tagline: 'What I am familiar with and have proven my expertise in.',
	},
	stats: {
		id: 'stats-id-disabled-see-app-tsx',
		label: 'Highlights',
		options: {
			useGradientBackground: false,
			useBackgroundImage: true,
			backgroundImage: 'codeblur.jpg',
			headerTextClasses: 'text-slate-100 dark:text-white text-shadow-lg',
			subheaderTextClasses: 'text-slate-100 dark:text-slate-300 text-shadow-lg',
		}
	},
	testimonials: {
		id: 'testimonials',
		label: 'Testimonials',
		tagline: 'What my clients and collaborators have to say about working together.',
		options: {
			testimonialOpts: {
				blurName: true,
				blurRole: false,
				blurCompany: false,
			},
		},
	},
};
