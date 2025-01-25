import { useState, useEffect } from "react";
import Chart from "react-google-charts";
import { getWeatherData, getPollutionData } from '../api/getData/getData';

export function RealTimeData() {
  const [weatherData, setWeatherData] = useState([]);
  const [pollutionIndicators, setPollutionIndicators] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const weather = await getWeatherData();
      const pollution = await getPollutionData();
      setWeatherData(weather);
      setPollutionIndicators(pollution[0]);
      console.log(weather);
      console.log(pollution);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch data every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div id="real-time-data">
      <div id="hourly-table">
        <table>
          <thead>
            <tr>
              <th>Hour</th>
              <th>Date</th>
              <th>Humidity (%)</th>
              <th>Temperature (°C)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((w, index) => (
              <tr key={index}>
                <td>{w.hour}</td>
                <td>{w.date}</td>
                <td>{w.humidity}%</td>
                <td>{w.temperature}°C</td>
                <td>{w.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="pollution_gases">
        <div id="pollution Indicators">
          <h2>Concentration gases</h2>
          {pollutionIndicators.o3 && pollutionIndicators.no2 && pollutionIndicators.so2 && pollutionIndicators.co ? (
            <Chart chartType='PieChart' width={"100%"} data={[
              ["Gas", "Concentration"],
              ["o3", pollutionIndicators.o3],
              ["no2", pollutionIndicators.no2],
              ["so2", pollutionIndicators.so2],
              ["co", pollutionIndicators.co]
            ]}/>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div id="pm_indicators">
          <h2>PM Indicators</h2>
          {pollutionIndicators.pm25 && pollutionIndicators.pm10 ? (
            <Chart chartType='BarChart' width={"100%"} data={[
              ["Indicator", "Concentration"],
              ["PM2.5", pollutionIndicators.pm25],
              ["PM10", pollutionIndicators.pm10]
            ]}/>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

