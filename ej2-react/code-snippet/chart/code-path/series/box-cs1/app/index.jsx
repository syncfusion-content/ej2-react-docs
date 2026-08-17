{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BoxAndWhiskerSeries, Category } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Category', majorGridLines: { width: 0 } };
    const primaryyAxis = { minimum: 10, maximum: 60, interval: 10, majorGridLines: { width: 0 }, majorTickLines: { width: 0 } };
    const marker = { visible: true };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Employee Age Group in Various Department'>
      <Inject services={[Category, BoxAndWhiskerSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='BoxAndWhisker' name='Department' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);

{% endraw %}