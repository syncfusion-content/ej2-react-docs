{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, LineSeries}
from'@syncfusion/ej2-react-charts';
import { data } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { title: 'Months', valueType: 'Category' };
  const template:any = chartTemplate;
  const marker = { dataLabel: { visible: true, position: 'Middle', template: template } };
  function chartTemplate(args:any){
        return (<div id="templateWrap" style={{ border:'1px solid black', backgroundColor:'red', padding:'3px 3px 3px 3px'}}>
          <div>{args.point.x}</div>
          <div>{args.point.y}</div>
        </div>);
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Warmest'
          type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}