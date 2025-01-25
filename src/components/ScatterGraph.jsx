import Chart from "react-google-charts";

export function MyChart(props) {
    const {axisX,axisY,data,tittle} = props ;
    return (
      <div className ="chart">
      <Chart
        // Try different chart types by changing this property with one of: LineChart, BarChart, AreaChart...
        chartType="ScatterChart"
        data={[
          [axisX,axisY],
          ...data
        ]}
        options={{
          title: tittle,
        }}
        legendToggle
      />
      </div>
    );
  }