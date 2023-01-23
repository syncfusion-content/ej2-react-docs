{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from'@syncfusion/ej2-react-charts';
import { variouspiedata } from 'datasource.ts';

function App() {
  
  let pie: AccumulationChartComponent;
  
  return <AccumulationChartComponent id='pie-chart' ref={pie => pie = pie}
            legendSettings={{
              visible: true
            }}
            enableSmartLabels={true}
            enableAnimation={true}
            tooltip={{ enable: true }}
          >
            <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective dataSource={variouspiedata} xName='x' yName='y' innerRadius='20%'
                dataLabel={{
                  visible: true, position: 'Outside', name: 'x'
                }}
                radius='r'
              >
              </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}