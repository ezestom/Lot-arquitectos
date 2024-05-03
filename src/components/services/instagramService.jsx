import { useState, useEffect } from "react";

function InstagramService() {
	const [instagram, setInstagram] = useState([]);

	useEffect(() => {
		async function fetchInstagram() {
			const response = await fetch(
				"https://www.instagram.com/developer/endpoints/users/"
			);
			try {
				if (!response.ok) {
					throw new Error("Error en la petición de Instagram");
				}
				const data = await response.json();
				setInstagram(data);
			} catch (error) {
				console.error(error);
			}
		}
		fetchInstagram();
	}, []);
	return instagram;
}
