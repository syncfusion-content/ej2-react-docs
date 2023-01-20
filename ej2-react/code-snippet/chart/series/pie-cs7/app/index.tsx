

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, PieSeries, AccumulationTooltip,
  AccumulationDataLabel } from'@syncfusion/ej2-react-charts';
import { data1 } from 'datasource.ts';

function App() {

  let pie: AccumulationChartComponent;
  
  return <AccumulationChartComponent id='pie-chart' ref={pie => pie = pie}
              title='Mobile Browser Statistics'
              legendSettings={{ visible: false }}
              enableSmartLabels={true}
              enableAnimation={false}
              center={{x: '60%', y: '60%'}}
              tooltip={{ enable: false, format: '${point.x} : <b>${point.y}%</b>' }}
            >
              <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data1} name='Browser' xName='x' yName='y'
                  explode={true} explodeOffset='10%' explodeIndex={0}
                  dataLabel={{
                    visible: true,
                    position: 'Inside', name: 'text',
                    font: {
                      fontWeight: '600'
                    }
                  }}
                  radius='70%'
                >
                </AccumulationSeriesDirective>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


