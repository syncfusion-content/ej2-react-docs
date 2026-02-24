

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, SplineRangeAreaSeries } from '@syncfusion/ej2-react-charts';
import { splineRangeData } from './datasource';
function App() {
    const primaryxAxis = {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    };
    const primaryyAxis = {
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0, maximum: 40,
        majorTickLines: { width: 0 }
    };
    const marker = { visible: true };
    const pointRender = (args) => {
      if (args.point.index % 2 !== 0) {
        args.fill = '#ff6347';
    }
    else {
        args.fill = '#009cb8';
    }
  };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Monthly Temperature Range' pointRender={pointRender}>
      <Inject services={[SplineRangeAreaSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={splineRangeData} xName='x' high='high' low='low' name='England' type='SplineRangeArea' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

