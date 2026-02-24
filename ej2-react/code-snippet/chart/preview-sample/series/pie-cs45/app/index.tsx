


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, LegendSettingsModel, PieSeries } from '@syncfusion/ej2-react-charts';
import { data } from '../datasource.ts';

function App() {

  const legendSettings: LegendSettingsModel = { 
    visible: true,
    accessibility: {
      accessibilityDescription: 'The legend identifies the data categories represented in the chart and associates them with their corresponding labels.',
      accessibilityRole: 'group'
    } 
  };

  return (
    <AccumulationChartComponent id="container" legendSettings={legendSettings}>
      <Inject services={[AccumulationLegend, PieSeries]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


