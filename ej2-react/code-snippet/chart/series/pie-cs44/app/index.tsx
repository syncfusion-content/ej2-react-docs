{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PyramidSeries, AccessibilityModel, AccumulationLegend, LegendSettingsModel } from '@syncfusion/ej2-react-charts';
import { data } from '../datasource.ts';

function App() {

  const legendSettings: LegendSettingsModel = { visible: false };
  const accessibility: AccessibilityModel = {
    accessibilityDescription: 'This pyramid chart represents the sales distribution of cars by region, with each section representing a different region and its respective sales percentage.',
    accessibilityRole: 'presentation'
  };

  return (
    <AccumulationChartComponent id="container" title='Sales Distribution of Car by Region' legendSettings={legendSettings}>
      <Inject services={[PyramidSeries, AccumulationLegend]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' type='Pyramid' accessibility={accessibility}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}