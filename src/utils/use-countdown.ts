import { useState, useEffect } from "react";

const useCountdown = (endTime: number) => {
	const timer = endTime - +new Date();
	const [timeLeft, setTimeLeft] = useState<number>(timer);

	useEffect(() => {
		const counter = setInterval(() => setTimeLeft(endTime - +new Date()), 1000);

		return () => clearInterval(counter);
	}, [endTime]);

	return timeLeft;
};

export default useCountdown;
