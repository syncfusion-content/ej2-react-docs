{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject,AccumulationAnnotation, AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationLegend}
from'@syncfusion/ej2-react-charts';
import { pieData } from 'datasource.ts';

function App() {

  const template: any = chartTemplate;
  let click= ()=>{
    this.chart?.series[0].addPoint({ x: 'Dec', y: 15 });
  }
  function chartTemplate(): any {
    return (<div className='template'>
      <div style={{ border: '1px solid black', backgroundColor: '#f5f5f5', padding: '5px 5px 5px 5px' }}>13.5</div>
    </div>);
  };

  return <div><AccumulationChartComponent id='charts' legendSettings={{visible:true}} >
      <Inject services={[AccumulationAnnotation, AccumulationLegend]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' legendShape='Rectangle'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    <button id='add' click={click()}>click</button>
    </div>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}