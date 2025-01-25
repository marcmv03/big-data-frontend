export async function getWeatherData(date) {
  const response = await fetch('https://678fb69a49875e5a1a930e10.mockapi.io/api/v1/weather');
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getPollutionData() {
  const response = await fetch('https://678fb69a49875e5a1a930e10.mockapi.io/api/v1/pollution');
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
function getMedicalVisits(from, to) {
  // ...existing code...
}