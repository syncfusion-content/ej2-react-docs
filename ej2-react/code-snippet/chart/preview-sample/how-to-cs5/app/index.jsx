import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    var chart;
    var intervalId;
    var series1 = [];
    var value = 10;
    var setTimeoutValue = 100;
    for (var i = 0; i < 50; i++) {
        if (Math.random() > 0.5) {
            value += Math.random() * 2.0;
        }
        series1[i] = { x: i, y: value };
    }
    chart = chart;
    function loaded(args) {
        intervalId = setTimeout(() => {
            if (chart === null) {
                clearInterval(intervalId);
            }
            else {
                if (Math.random() > 0.5) {
                    value += Math.random() * 2.0;
                }
                i++;
                series1.push({ x: i, y: value });
                series1.shift();
                args.chart.series[0].dataSource = series1;
            }
        }, setTimeoutValue);
    }
    return (<ChartComponent id='charts' loaded={loaded.bind(this)}>
      <Inject services={[LineSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={series1} xName='x' yName='y' type='Line'></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
