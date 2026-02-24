{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ScatterSeries } from '@syncfusion/ej2-react-charts';
import { scatterData } from './datasource';

function App() {
    const primaryxAxis = {
        title: 'Height (cm)', minimum: 130, maximum: 180,
        edgeLabelPlacement: 'Shift', labelFormat: '{value}cm'
    };
    const primaryyAxis = {
        title: 'Weight (kg)', minimum: 30, maximum: 100,
        labelFormat: '{value}kg', rangePadding: 'None'
    };
    const marker1 = { width: 10, height: 10 };
    const pointRender = (args) => {
      if (args.point.index % 2 !== 0) {
        args.fill = '#ff6347';
    }
    else {
        args.fill = '#009cb8';
    }
  }
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Height Vs Weight' pointRender={pointRender}>
      <Inject services={[ScatterSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={scatterData} xName='height' yName='male' type='Scatter'
          marker={marker1} >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}