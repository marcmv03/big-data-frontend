import Chart from "react-google-charts";

 export function Histogram() {
    return (
      <div className="chart">
        <Chart
          chartType="Histogram"
          data={
            [1,2,2,2,3,40,50,70,8,8,8,3,2,5,3,210]
        }
          options={{
            title: 'Monthly Medical Visits',
          }}
          legendToggle
        />
      </div>
    );
  }