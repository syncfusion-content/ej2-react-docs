{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BubbleSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { title: 'Literacy Rate', minimum: 60, maximum: 100, interval: 5 };
    const primaryyAxis = { title: 'GDP growth rate', minimum: -2, maximum: 16, interval: 2 };
    const pointRender = (args) => {
        if (args.point.y < 7.5) {
          args.fill = '#ff6347';
        } else {
          args.fill = '#009cb8';
        }
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='GDP vs Literacy Rate' pointRender={pointRender}>
            <Inject services={[BubbleSeries]}/>
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='x' yName='y' size='size' type='Bubble' name='pound'>
                </SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>;
}
;
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);

{% endraw %}