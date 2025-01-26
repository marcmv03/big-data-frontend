export async function getWeatherData(date) {
  const response = await fetch('http://localhost:5000/api/v1/weatherData');
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getPollutionData() {
  const response = await fetch('http://localhost:5000/api/v1/pollutionIndicators');
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getDailyWeather(startDate, endDate) {
  const response = await fetch(`http://localhost:5000/api/v1/dailyWeatherData?start_date=${startDate}&end_date=${endDate}`)
  const data = await response.json();
  console.log(data);
  return data;
}

export function mapWeatherData(data) {
  return data.map(item => [
    item.date,
    item.avg_temperature,
    item.min_temperature,
    item.max_temperature
  ]);
}

//retrieve the medical predictions for the selected days.
export async function getMedicalVisits(startDate, endDate) {
  const response = await fetch(`http://localhost:5000/api/v1/predictions?start_date=${startDate}&end_date=${endDate}`)
  const data = await response.json();
  console.log(data);
  return data.prediction;
}
  // ...existing code...