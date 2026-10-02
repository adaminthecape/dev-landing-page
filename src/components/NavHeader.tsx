import { useState } from 'react';
import { BASE_DATA, HEADER_LINK_DATA } from '../config/data';
import { ForegroundImage } from './ui/ForegroundImage';
import { useTheme } from '../contexts/ThemeContext';

export function NavHeader() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const theme = useTheme();

	const toggleTheme = () => {
		const newIsDark = !theme.isDarkMode;
		theme.changeTheme(newIsDark ? 'dark' : 'light');
	};

	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const href = e.currentTarget.getAttribute('href');
		if (href?.startsWith('#')) {
			e.preventDefault();
			// Close the mobile menu first so the layout settles before measuring the scroll target
			setIsMobileMenuOpen(false);
			requestAnimationFrame(() => {
				const target = document.querySelector(href);
				target?.scrollIntoView({ behavior: 'smooth' });
			});
		}
	};

	const itemClasses = 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition';

	return (
		<header className="sticky top-0 z-50 glass-dark shadow-md dark:shadow-lg border-b border-slate-200 dark:border-slate-700">
			<div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-4">
				<div className={`p-2 rounded-lg ${theme.currentTheme === 'dark' ? 'glass-xlight' : 'glass-dark-strong'}`}>
					{BASE_DATA.logo && <ForegroundImage
						imagePath={theme.currentTheme === 'dark' ?
							BASE_DATA.logoDark ?? BASE_DATA.logo :
							BASE_DATA.logoLight ?? BASE_DATA.logo
						}
						width={160}
					/>}
				</div>

				<div className="hidden md:flex items-center space-x-6">
					<nav className="space-x-2 flex">
						{HEADER_LINK_DATA.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={handleSmoothScroll}
								className={itemClasses}
							>
								<div className="rounded-md p-2 hover:bg-slate-300/60 dark:hover:bg-slate-600/60 transition">{link.label}</div>
							</a>
						))}
					</nav>
					<button
						onClick={toggleTheme}
						className="cursor-pointer p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-yellow-300 transition hover:bg-slate-300 dark:hover:bg-slate-600"
						aria-label="Toggle theme"
					>
						{theme.isDarkMode ? '☀️' : '🌙'}
					</button>
				</div>

				<div className="md:hidden flex items-center gap-4">
					<button
						onClick={toggleTheme}
						className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-yellow-300 transition"
						aria-label="Toggle theme"
					>
						{theme.isDarkMode ? '☀️' : '🌙'}
					</button>
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="p-2 text-slate-800 dark:text-white"
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? '✕' : '☰'}
					</button>
				</div>
			</div>

			{isMobileMenuOpen && (
				<nav className="md:hidden pb-4 px-4 space-y-6 flex flex-col">
					{HEADER_LINK_DATA.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={handleSmoothScroll}
							className={itemClasses}
						>
							{link.label}
						</a>
					))}
				</nav>
			)}
		</header>
	);
}