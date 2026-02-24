{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, PolarSeries, Category, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { columnData } from './datasource';
function App() {
  const primaryxAxis = { title: 'Country', valueType: 'Category' };
    const primaryyAxis = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
    const pointRender = (args) => {
      if (args.point.index % 2 !== 0) {
        args.fill = '#ff6347';
    }
    else {
        args.fill = '#009cb8';
    }
    }
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Gold medals' pointRender={pointRender}>
      <Inject services={[PolarSeries, ColumnSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='country' yName='gold' type='Polar' name='Gold' drawType='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}