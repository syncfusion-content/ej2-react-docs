{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject,AccumulationAnnotation, AccumulationAnnotationsDirective, AccumulationAnnotationDirective}
from'@syncfusion/ej2-react-charts';
import { variespiedata } from '../datasource.ts';

function App() {

  const template: any = chartTemplate;
  function chartTemplate(): any {
    return (<div className='template'>
      <div style={{ border: '1px solid black', backgroundColor: '#f5f5f5', padding: '5px 5px 5px 5px' }}>13.5</div>
    </div>);
  };

  return <AccumulationChartComponent id="container" width='92%' legendSettings = {{visible:false}} title = 'Mobile Browser Statistics' >
      <Inject services={[AccumulationAnnotation]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={variespiedata} animation={{enable:true}} xName='x' yName='y' name='Browser' startAngle={0} endAngle={360} applyPattern={true}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}