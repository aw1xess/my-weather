class WeatherDataService {
	async getCity(city: string) {
		const where = encodeURIComponent(
			JSON.stringify({
				name: {
					$regex: `^${city}[a-z]*`,
				},
			})
		);
		const response = await fetch(
			`https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=10&order=-population&include=country&keys=name,country,country.name,location&where=${where}`,
			{
				headers: {
					"X-Parse-Application-Id":
						"SMn3FRa5a7FVWRv6XVOJ0ncNQqWV8VGAxj22TgtI", // This is your app's application id
					"X-Parse-REST-API-Key":
						"plugz2y8DS1BEqCw49l3oP163RvvdrUoCh2iwuDZ", // This is your app's REST API key
				},
			}
		);
		const data = await response.json(); // Here you have the data that you need
		console.log(data);
		return data;
	}

	async getWeatherByCity(lat: number, lon: number) {
		let response = await fetch(
			`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=582582d841d74efda1be8fe9e00beb3e`
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
