{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Category', interval: 1, tickPosition: 'Inside',
        labelPosition: 'Inside', labelStyle: { color: '#ffffff' } };
    const primaryyAxis = { minimum: 0, maximum: 300, interval: 50, labelStyle: { color: 'transparent' } };
    let count = 0;
    function onChartLoad(args) {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
        args.chart.loaded = null;
        let columninterval = setInterval(() => {
            if (document.getElementById('charts')) {
                if (count === 0) {
                    args.chart.series[0].dataSource = [
                        { x: 'Egg', y: 206 },
                        { x: 'Fish', y: 123 },
                        { x: 'Misc', y: 48 },
                        { x: 'Tea', y: 240 },
                        { x: 'Fruits', y: 170 }
                    ];
                    args.chart.animate();
                    count++;
                }
                else if (count === 1) {
                    args.chart.series[0].dataSource = [
                        { x: 'Egg', y: 86 },
                        { x: 'Fish', y: 173 },
                        { x: 'Misc', y: 188 },
                        { x: 'Tea', y: 109 },
                        { x: 'Fruits', y: 100 }
                    ];
                    args.chart.animate();
                    count++;
                }
                else if (count === 2) {
                    args.chart.series[0].dataSource = [
                        { x: 'Egg', y: 156 },
                        { x: 'Fish', y: 33 },
                        { x: 'Misc', y: 260 },
                        { x: 'Tea', y: 200 },
                        { x: 'Fruits', y: 30 }
                    ];
                    args.chart.animate();
                    count = 0;
                }
            }
            else {
                clearInterval(columninterval);
            }
        }, 2000);
    }
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Medals' loaded={onChartLoad.bind(this)}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
         <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data} type='Column' xName='x' width={2} yName='y' name='Tiger' cornerRadius={{ bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10 }} marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}