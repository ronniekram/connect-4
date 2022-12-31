import { useState, useEffect } from "react";

const useCountdown = (endTime: number) => {
	const timer = endTime - +Date.now();
	const [timeLeft, setTimeLeft] = useState<number>(timer);

	useEffect(() => {
		const counter = setInterval(() => setTimeLeft(endTime - +Date.now()), 1000);

		return () => clearInterval(counter);
	}, [endTime]);

	return timeLeft;
};

export default useCountdown;
