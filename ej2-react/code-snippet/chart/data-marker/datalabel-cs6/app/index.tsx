{% raw %}


import { render } from 'react-dom';
import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';

const data1 = [{ x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }];
const data2 = [{ x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }];
const data3 = [{ x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }];

const total = [];

function App() {
        return (<div className='control-pane'>

            <div className='control-section'>
                <ChartComponent id='charts' style={{ textAlign: "center" }} textRender={onTextRender.bind(this)} primaryXAxis={{ valueType: 'Category', interval: 1, majorGridLines: { width: 0 } }} primaryYAxis={{
                    majorGridLines: { width: 0 },
                    majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
                }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} width={Browser.isDevice ? '100%' : '60%'} title='Olympic Medal Counts - RIO' seriesRender={onSeriesRender.bind(this)}>
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data1} xName='x' yName='y' name='Gold' type='Column' marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }}>
                        </SeriesDirective>
                        <SeriesDirective dataSource={data2} xName='x' yName='y' name='Silver' type='Column' marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }}>
                        </SeriesDirective>
                        <SeriesDirective dataSource={data3} xName='x' yName='y' name='Bronze' type='Column' marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }}>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
      function onSeriesRender(args) {
        for (var i = 0; i < args.data.length; i++) {
            if (!total[args.data[i].x]) total[args.data[i].x] = 0;
            total[args.data[i].x] += parseInt(args.data[i].y);
          }
    }
    ;
    function onTextRender(args) {
        var percentage = (parseInt(args.text) / total[args.point.x]) * 100;
        percentage = percentage % 1 === 0 ? percentage : percentage.toFixed(2);
        args.text = percentage + '%';
    };
}
export default App;
render(<App />, document.getElementById('charts'));


{% endraw %}