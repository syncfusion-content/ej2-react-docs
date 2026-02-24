


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  AccumulationTooltip,
  Inject } from'@syncfusion/ej2-react-charts';

function App() {

  const data: any = [
    { x: 'Argentina', y: 505370, r: '50%' },
    { x: 'Belgium', y: 551500, r: '70%' },
    { x: 'Cuba', y: 312685, r: '84%' },
    { x: 'Dominican Republic', y: 350000, r: '97%' },
    { x: 'Egypt', y: 301000, r: '84%' },
    { x: 'Kazakhstan', y: 300000, r: '70%' },
    { x: 'Somalia', y: 357022, r: '90%' },
  ];
  
    return (
      <AccumulationChartComponent
        id="charts"
        ref={(pie) => (pie = pie)}
        legendSettings={{
          visible: true,
          reverse: true,
        }}
        useGroupingSeparator={true}
        enableSmartLabels={true}
        enableAnimation={true}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[
            AccumulationLegend,
            PieSeries,
            AccumulationDataLabel,
            AccumulationTooltip,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={data}
            xName="x"
            yName="y"
            innerRadius="20%"
            dataLabel={{
              visible: true,
              position: 'Outside',
              name: 'x',
            }}
            radius="r"
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    );
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


