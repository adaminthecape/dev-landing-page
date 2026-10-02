import { motion } from 'framer-motion';
import { SECTION_DATA, TESTIMONIAL_DATA } from '../config/data';
import { SectionHeader } from './ui/SectionHeader';
import { SpaceInner } from './ui/SpaceInner';
import { useAnimationReset } from '../hooks/useAnimationReset';

const testimonials = TESTIMONIAL_DATA;

export function TestimonialsSection() {
	const generation = useAnimationReset();
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};
	const section = SECTION_DATA.testimonials;
	const blur = { filter: 'blur(6px)' };

	const { blurRole, blurCompany, blurName } = section.options?.testimonialOpts || {};

	return (
		<section id={section.id} className="py-16 md:py-24">
			<SectionHeader section={section} />
			<SpaceInner />

			<motion.div
				key={`testimonials-${generation}`}
				className="grid grid-cols-1 md:grid-cols-2 gap-8"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{testimonials.map((testimonial) => (
					<motion.div
						key={testimonial.id}
						variants={itemVariants}
						className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-lg shadow-md p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
					>
						<div className="flex items-start gap-4 mb-4">
							<span className="text-3xl">{testimonial.avatar}</span>
							<div>
								<p className="font-bold text-slate-900 dark:text-white" style={blurName ? blur : undefined}>{testimonial.author}</p>
								{testimonial.role ?
									<p className="text-sm text-purple-600 dark:text-purple-400" style={blurRole ? blur : undefined}>{testimonial.role}</p> :
									<span>&nbsp;</span>
								}
								{testimonial.company ?
									<p className="text-xs text-slate-500 dark:text-slate-400" style={blurCompany ? blur : undefined}>{testimonial.company}</p> :
									<span>&nbsp;</span>
								}
							</div>
						</div>

						<blockquote className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
							&ldquo;{testimonial.quote}&rdquo;
						</blockquote>

						{testimonial.rating && <div className="flex gap-1 mt-4">
							{[...Array(Math.min(testimonial.rating, 5))].map((_, i) => (
								<span key={i} className="text-yellow-400">
									⭐
								</span>
							))}
						</div>}
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
