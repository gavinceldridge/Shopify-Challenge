// React hook for local storage usage:
import React, { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};

export default useLocalStorage;
