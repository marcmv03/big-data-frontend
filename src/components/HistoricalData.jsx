import {react, useState,useEffect } from "react";
import {Chart,CartesianGrid} from "react-google-charts";
import { getDailyWeather, mapWeatherData,getMedicalVisits } from "../api/getData/getData";
import { Histogram } from "./Histogram";
export function HistoricalData() {
    const [daily_weather_data, setDailyWeatherData] = useState([]);
    const [initialDate,setInitialDate] = useState(null)
    const [finalDate,setFinalDate] = useState(null)
    const [predictions,setPredicitons] = useState([])
    const applied = useState(false)
    const [loading, setLoading] = useState(false);
    return (
        <div id="historical-data">
            <form onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                const start = new Date(initialDate);
                const end = new Date(finalDate);
                const dates = [];
                let currentDate = start;
                while (currentDate <= end) {
                    dates.push(currentDate.toISOString().split('T')[0]);
                    currentDate.setDate(currentDate.getDate() + 1);
                }
                // Update the state or use the dates array as needed
                console.log(dates);
                const result =  await getDailyWeather(initialDate,finalDate)
                const mappedData = mapWeatherData(result);
                setDailyWeatherData(mappedData);
                const medical = await getMedicalVisits(initialDate,finalDate)
                setPredicitons(medical);
                setLoading(false);
            }}>
                <div>
                    <label>Initial Date:</label>
                    <input type="date" value={initialDate} onChange={(e) => setInitialDate(e.target.value)} />
                </div>
                <div>
                    <label>Final Date:</label>
                    <input type="date" value={finalDate} onChange={(e) => setFinalDate(e.target.value)} />
                </div>
                <button type="submit">Generate</button>
            </form>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Chart chartType='LineChart' width={800} height={500} data={[["dates", "t_max", "t_min", "t_avg"], ...daily_weather_data]} XAxis="date">
                    </Chart>
                    <Histogram data={predictions} />
                </>
            )}
        </div>
    );
}