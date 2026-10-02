import { NavHeader } from './components/NavHeader';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import './App.css';
import './glass.css';
import { SpaceOuter } from './components/ui/SpaceOuter';

export default function App() {
	return (
		<div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans transition-colors" id="top">
			<NavHeader />
			<div className="max-w-5xl mx-auto px-6 py-12 md:px-12">
				<SpaceOuter />
				<HeroSection />
				<SpaceOuter />
				<div id="capabilities" />
				<SpaceOuter />
				<CapabilitiesSection />
				<SpaceOuter />
				<div id="skills" />
				<SpaceOuter />
				<SkillsSection />
				<SpaceOuter />
				<div id="projects" />
				<SpaceOuter />
				<ProjectsSection />
				<div id="stats" />
				<SpaceOuter />
				<SpaceOuter />
				<SpaceOuter />
				<StatsSection />
				<SpaceOuter />
				<div id="testimonials" />
				<SpaceOuter />
				<TestimonialsSection />
				<SpaceOuter />
				<Footer />
			</div>
		</div>
	);
}
