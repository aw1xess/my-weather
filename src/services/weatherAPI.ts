class WeatherDataService {
	async getWeatherByCity(city: string) {
		interface Coordinates {
			lat: number;
			lon: number;
		}
		let coordinates: Coordinates = { lat: 0, lon: 0 };
		let responseGeo = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=582582d841d74efda1be8fe9e00beb3e`
		);

		if (!responseGeo.ok) {
			throw new Error(`An error has occured: ${responseGeo.status}`);
		}

		let dataGeo = await responseGeo.json();
		coordinates.lat = dataGeo[0].lat;
		coordinates.lon = dataGeo[0].lon;
		let response = await fetch(
			`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=582582d841d74efda1be8fe9e00beb3e`
		);

		if (!response.ok) {
			throw new Error(`An error has occured: ${response.status}`);
		}

		let data = await response.json();
		console.log(data);
		return data;
	}
}

export default new WeatherDataService();
