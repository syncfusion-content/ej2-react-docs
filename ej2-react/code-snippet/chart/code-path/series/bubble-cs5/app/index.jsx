{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BubbleSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { title: 'Literacy Rate', minimum: 60, maximum: 100, interval: 5 };
    const primaryyAxis = { title: 'GDP growth rate', minimum: -2, maximum: 16, interval: 2 };
    const seriesRender = (args) => {
      args.fill = '#ff6347';
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} seriesRender={seriesRender} title='GDP vs Literacy Rate'>
            <Inject services={[BubbleSeries]}/>
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='x' yName='y' size='size' type='Bubble' name='pound'>
                </SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}