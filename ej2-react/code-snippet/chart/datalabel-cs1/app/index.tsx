{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, StripLine, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection, StripLinesDirective, StripLineDirective} from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const template:any = chartTemplate;
  const marker = { visible: true, dataLabel: { visible: true, name: 'color', template: template } };
  function chartTemplate(args:any){
        return (<div id="templateWrap" style={{ border:'1px solid black', backgroundColor:'red', padding:'3px 3px 3px 3px'}}>
          <div>{args.point.x}</div>
          <div>{args.point.y}</div>
        </div>);
  }
    return <ChartComponent id='charts'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category, StripLine]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}