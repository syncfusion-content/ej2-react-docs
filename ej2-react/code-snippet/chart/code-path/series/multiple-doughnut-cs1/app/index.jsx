{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries,
AccumulationLegend, AccumulationTooltip, AccumulationDataLabel }from'@syncfusion/ej2-react-charts';

function App() {

  const totalSalesData = [
    { x: "Electronics", y: 45000, text: "45K" },
    { x: "Fashion", y: 32000, text: "32K" },
    { x: "Home & Garden", y: 18000, text: "18K" },
    { x: "Sports", y: 15000, text: "15K" },
    { x: "Books", y: 8000, text: "8K" }
  ];

  const totalProfitData = [
    { x: "Electronics", y: 18000, text: "18K", profit: "40%" },
    { x: "Fashion", y: 12800, text: "12.8K", profit: "40%" },
    { x: "Home & Garden", y: 6300, text: "6.3K", profit: "35%" },
    { x: "Sports", y: 4500, text: "4.5K", profit: "30%" },
    { x: "Books", y: 2400, text: "2.4K", profit: "30%" }
  ];

  const tooltip = {
    enable: true,
    format:
      "<b>${point.x}</b><br/>Value: <b>$${point.y}</b><br/>Percentage: <b>${point.percentage}%</b>"
  };

  const legendSettings = {
    mappingKey: "x"
  };

  const outerDataLabel = {
    name: "text",
    visible: true,
    position: "Outside",
    connectorStyle: {
      type: "Curve",
      color: "black",
      width: 2,
      dashArray: "2,1",
      length: "5"
    }
  };

  const innerDataLabel = {
    name: "text",
    visible: true,
    position: "Inside",
    connectorStyle: {
      type: "Curve",
      color: "black",
      width: 2,
      dashArray: "2,1",
      length: "5"
    }
  };

  return (
    <AccumulationChartComponent
      id="container"
      title="Product Sales vs Profit Analysis"
      subTitle="Comparing total sales revenue with profit margins by product category"
      tooltip={tooltip}
      legendSettings={legendSettings}
      enableBorderOnMouseMove={false}
      border={{ color: "#333", width: 2 }}
    >
      <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]} />

      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={totalSalesData}
          type="Pie"
          xName="x"
          yName="y"
          name="Total Sales"
          radius="90%"
          innerRadius="60%"
          dataLabel={outerDataLabel}
          tooltipMappingName="x"
        />
        <AccumulationSeriesDirective
          dataSource={totalProfitData}
          type="Pie"
          xName="x"
          yName="y"
          name="Total Profit"
          radius="50%"
          innerRadius="50%"
          dataLabel={innerDataLabel}
          tooltipMappingName="x"
        />

      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}