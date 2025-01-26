import Chart from "react-google-charts";

export function Histogram({ data }) {
    console.log(data);
    const formattedData = data.map(item => [item]);
    return (
        <div className="chart">
            <Chart
                chartType="Histogram"
                data={[["Demand"], ...formattedData]}
                options={{
                    title: 'Monthly Medical Visits',
                }}
                legendToggle
            />
        </div>
    );
}