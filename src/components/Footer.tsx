import { motion } from 'framer-motion';
import { FOOTER_DATA } from '../config/data';
import { useAnimationReset } from '../hooks/useAnimationReset';

const data = FOOTER_DATA;

export function Footer() {
	const generation = useAnimationReset();
	return (
		<footer className="border-t border-slate-200 dark:border-slate-700 mt-24 pt-12 pb-6 text-sm text-slate-600 dark:text-slate-400">
			<motion.div
				key={`footer-${generation}`}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="flex flex-col md:flex-row md:justify-between md:items-center gap-6"
			>
				<div>
					<p className="font-semibold text-slate-900 dark:text-white mb-1">{data.author}</p>
					{data.tagline && <p>{data.tagline}</p>}
				</div>

				<div className="flex gap-6">
					{data.links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noreferrer"
							className="hover:text-slate-900 dark:hover:text-white transition font-semibold"
						>
							{link.label}
						</a>
					))}
				</div>
			</motion.div>

			<div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-6 flex flex-col md:flex-row md:justify-between md:items-center text-xs text-slate-500 dark:text-slate-500 gap-4">
				<p>{data.copyright}</p>
				<p>{data.builtWith}</p>
			</div>
		</footer>
	);
}