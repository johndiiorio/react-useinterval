import { useEffect, useRef } from 'react';

export default function useInterval(
	callback: (...args: any[]) => void,
	delay?: number | null,
	...args: any[]
) {
	const savedCallback = useRef<(...args: any[]) => void>();

	savedCallback.current = callback;

	useEffect(() => {
		function tick() {
			if (savedCallback.current) {
				savedCallback.current(...args);
			}
		}
		if (delay !== null && delay !== undefined) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}
