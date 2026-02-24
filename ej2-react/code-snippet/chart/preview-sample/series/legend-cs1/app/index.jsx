
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationChart, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection } from '@syncfusion/ej2-react-charts';
import { getInstance } from '@syncfusion/ej2-base';
import { accData } from '../datasource.ts';
function App() {
    let count = 0;
    function onChartLoad(args) {
        let pie = getInstance('#pie-chart2', AccumulationChart);
        document.getElementById('pie-chart2').setAttribute('title', '');
        pie.loaded = null;
        let pieinterval = setInterval(() => {
            if (document.getElementById('pie-chart2')) {
                if (count === 0) {
                    pie.series[0].dataSource = [
                        { x: 'Net-tution and Fees', y: 10 },
                        { x: 'Self-supporting Operations', y: 10 },
                        { x: 'Private Gifts', y: 13 },
                        { x: 'All Other', y: 14 },
                        { x: 'Local Revenue', y: 9 },
                        { x: 'State Revenue', y: 13 },
                        { x: 'Federal Revenue', y: 8 }
                    ];
                    pie.animate();
                    count++;
                }
                else if (count === 1) {
                    pie.series[0].dataSource = [
                        { x: 'Net-tution and Fees', y: 120 },
                        { x: 'Self-supporting Operations', y: 31 },
                        { x: 'Private Gifts', y: 6 },
                        { x: 'All Other', y: 12 },
                        { x: 'Local Revenue', y: 25 },
                        { x: 'State Revenue', y: 11 },
                        { x: 'Federal Revenue', y: 12 }
                    ];
                    pie.animate();
                    count++;
                }
                else if (count === 2) {
                    pie.series[0].dataSource = [
                        { x: 'Net-tution and Fees', y: 6 },
                        { x: 'Self-supporting Operations', y: 22 },
                        { x: 'Private Gifts', y: 11 },
                        { x: 'All Other', y: 15 },
                        { x: 'Local Revenue', y: 13 },
                        { x: 'State Revenue', y: 10 },
                        { x: 'Federal Revenue', y: 8 }
                    ];
                    pie.animate();
                    count++;
                }
                else if (count === 3) {
                    pie.series[0].dataSource = [
                        { x: 'Net-tution and Fees', y: 15 },
                        { x: 'Self-supporting Operations', y: 10 },
                        { x: 'Private Gifts', y: 18 },
                        { x: 'All Other', y: 20 },
                        { x: 'Local Revenue', y: 30 },
                        { x: 'State Revenue', y: 20 },
                        { x: 'Federal Revenue', y: 25 }
                    ];
                    pie.animate();
                    count++;
                }
                else if (count === 4) {
                    pie.series[0].dataSource = [
                        { x: 'Net-tution and Fees', y: 21 },
                        { x: 'Self-supporting Operations', y: 10 },
                        { x: 'Private Gifts', y: 15 },
                        { x: 'All Other', y: 15 },
                        { x: 'Local Revenue', y: 11 },
                        { x: 'State Revenue', y: 20 },
                        { x: 'Federal Revenue', y: 60 }
                    ];
                    pie.animate();
                    count = 0;
                }
            }
            else {
                clearInterval(pieinterval);
            }
        }, 3000);
    }
    return (<AccumulationChartComponent id="pie-chart2" title="Education Institutional Revenue" loaded={onChartLoad.bind(this)}>
      <Inject services={[
            AccumulationLegend,
            PieSeries,
            AccumulationDataLabel,
            AccumulationTooltip,
            AccumulationSelection
        ]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective name="Revenue" dataSource={accData} xName="x" yName="y" innerRadius="40%" startAngle={0} endAngle={360} dataLabel={{
            visible: true,
            position: 'Inside',
        }}></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
