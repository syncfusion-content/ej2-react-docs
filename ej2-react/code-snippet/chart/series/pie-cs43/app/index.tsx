{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, LegendSettingsModel, AccessibilityModel } from '@syncfusion/ej2-react-charts';
import { data } from '../datasource.ts';

function App() {

  const legendSettings: LegendSettingsModel = { visible: true };
  const accessibility: AccessibilityModel = {
    accessibilityDescription: 'Pie chart representing the distribution of data across months.',
    accessibilityRole: 'chart'
  };

  return (
    <AccumulationChartComponent id="container" legendSettings={legendSettings} accessibility={accessibility} focusBorderColor="#FF0000" focusBorderWidth={3} focusBorderMargin={5}>
      <Inject services={[AccumulationLegend]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}