function defineIcon(weather: string, hours: number) {
	let isDay = hours > 5 && hours < 20 ? true : false;
	let iconName = isDay ? "sunny" : "moon";
	const thunderRain = [
		"thunderstorm with light rain",
		"thunderstorm with rain",
		"thunderstorm with heavy rain",
		"thunderstorm with light drizzle",
		"thunderstorm with drizzle",
		"thunderstorm with heavy drizzle",
	];
	const thunder = [
		"thunderstorm",
		"heavy thunderstorm",
		"ragged thunderstorm",
	];
	const lightDrizzle = [
		"light intensity drizzle",
		"light intensity drizzle rain",
		"shower rain and drizzle",
		"shower drizzle",
	];
	const drizzle = [
		"drizzle",
		"heavy intensity drizzle",
		"drizzle rain",
		"heavy intensity drizzle rain",
		"heavy shower rain and drizzle",
	];
	const lightRain = [
		"light rain",
		"light intensity shower rain",
		"shower rain",
		"ragged shower rain",
	];
	const rain = ["moderate rain", "heavy intensity shower rain"];
	const heavyRain = [
		"heavy intensity rain",
		"very heavy rain",
		"extreme rain",
	];
	const sleet = [
		"freezing rain",
		"sleet",
		"light shower sleet",
		"shower sleet",
		"light rain and snow",
		"rain and snow",
	];
	const snow = ["light snow", "snow", "light shower snow", "shower snow"];
	const heavySnow = ["heavy snow", "heavy shower snow"];
	const lightClouds = "few clouds";
	const clouds = "scattered clouds";
	const heavyClouds = ["broken clouds", "overcast clouds"];

	if (thunderRain.includes(weather)) {
		iconName = "thunder_rain";
	} else if (thunder.includes(weather)) {
		iconName = "thunder";
	} else if (weather === "light thunderstorm") {
		iconName = isDay
			? "light_thunderstorm_day"
			: "light_thunderstorm_night";
	} else if (lightDrizzle.includes(weather)) {
		iconName = isDay ? "light_drizzle_day" : "light_drizzle_night";
	} else if (drizzle.includes(weather)) {
		iconName = "drizzle";
	} else if (lightRain.includes(weather)) {
		iconName = isDay ? "light_rain_day" : "light_rain_night";
	} else if (rain.includes(weather)) {
		iconName = "rain";
	} else if (heavyRain.includes(weather)) {
		iconName = "heavy_rain";
	} else if (sleet.includes(weather)) {
		iconName = "sleet";
	} else if (snow.includes(weather)) {
		iconName = "snow";
	} else if (heavySnow.includes(weather)) {
		iconName = "heavy_snow";
	} else if (weather === lightClouds) {
		iconName = isDay ? "light_clouds_day" : "light_clouds_night";
	} else if (weather === clouds) {
		iconName = isDay ? "clouds_day" : "clouds_night";
	} else if (heavyClouds.includes(weather)) {
		iconName = "heavy_clouds";
	}

	return iconName;
}

export default defineIcon;
