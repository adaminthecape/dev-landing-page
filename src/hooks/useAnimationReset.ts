import { useEffect, useState } from 'react';
import { BASE_DATA } from '../config/data';

const ANIMATION_RESET_INTERVAL = BASE_DATA.animationResetInterval ?? 15000; // 15 seconds

/**
 * Custom hook that provides a generation counter that increments every 15 seconds.
 * Components can use this as a key to force animation re-initialization.
 */
export function useAnimationReset() {
	const [generation, setGeneration] = useState(0);

	useEffect(() => {
		if (ANIMATION_RESET_INTERVAL <= 0) {
			return;
		}

		const interval = setInterval(() => {
			setGeneration((prev) => prev + 1);
		}, ANIMATION_RESET_INTERVAL);

		return () => clearInterval(interval);
	}, []);

	return generation;
}
