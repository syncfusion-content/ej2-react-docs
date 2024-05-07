{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ScrollBar, Zoom, LineSeries, Tooltip, DateTime, Crosshair } from '@syncfusion/ej2-react-charts';
import { Internationalization } from '@syncfusion/ej2-base';
function App() {
    let chart;
    let intl = new Internationalization();
    function GetDateTimeData(start, end) {
        let series1 = [];
        let date;
        let value = 30;
        let option = {
            skeleton: 'full',
            type: 'dateTime'
        };
        let dateParser = intl.getDateParser(option);
        let dateFormatter = intl.getDateFormat(option);
        for (let i = 0; start <= end; i++) {
            date = Date.parse(dateParser(dateFormatter(start)));
            if (Math.random() > .5) {
                value += (Math.random() * 10 - 5);
            }
            else {
                value -= (Math.random() * 10 - 5);
            }
            if (value < 0) {
                value = getRandomInt(20, 40);
            }
            let point1 = { x: new Date(date), y: Math.round(value) };
            new Date(start.setDate(start.getDate() + 1));
            series1.push(point1);
        }
        return series1;
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return <ChartComponent id='charts' ref={chart => chart = chart} primaryXAxis={{
            title: 'Day',
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift',
            skeleton: 'yMMM',
            skeletonType: 'Date',
            scrollbarSettings: {
                range: {
                    minimum: new Date(2009, 0, 1),
                    maximum: new Date(2014, 0, 1)
                },
                enable: true,
            }
        }} primaryYAxis={{
            title: 'Server Load',
            labelFormat: '{value}MB'
        }} crosshair={{ enable: true, lineType: 'Vertical' }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} legendSettings={{ visible: true }} 
    // scrollStart={this.scrollStart.bind(this)}
    // scrollEnd={this.scrollEnd.bind(this)}
    title='Network Load' height='450' width='100%'>
                            <Inject services={[LineSeries, DateTime, Tooltip, ScrollBar, Zoom, Crosshair]}/>
                            <SeriesCollectionDirective>
                                <SeriesDirective dataSource={GetDateTimeData(new Date(2009, 0, 1), new Date(2009, 8, 1))} xName='x' yName='y' type='Line' animation={{ enable: false }}>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}