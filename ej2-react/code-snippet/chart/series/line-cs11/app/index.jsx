{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { splineData } from 'datasource.ts';
function App() {
    const primaryxAxis = { title: 'Month', valueType: 'Category' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[SplineAreaSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={splineData} xName='x' yName='y' width={2} name='London' type='SplineArea' marker={{ visible: true, width: 10, height: 10 }}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}