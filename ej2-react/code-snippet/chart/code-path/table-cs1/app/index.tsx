{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, StripLine, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection, StripLinesDirective, StripLineDirective, AxisModel, TooltipSettingsModel} from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const primaryxAxis: AxisModel = { title: 'Overs' };
  const primaryyAxis: AxisModel = { title: 'Runs' };
  const template:any = chartTemplate;
  const tooltip: TooltipSettingsModel = {
    enable: true,
    template: template
  };
  function chartTemplate(args:any){
   return (<div id="templateWrap">
      <table style={{width:'100%',margin: '5px', border: '1px solid black' ,backgroundColor:'#00FFFF'}}>
        <tbody><tr><th colSpan={2}>Female</th></tr>
          <tr><td>{args.x}</td><td>:</td><td>{args.y}</td></tr>
        </tbody>
      </table>
    </div>);
  }
  const marker = { visible: true };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='India Vs Australia 1st match'
      tooltip={tooltip}>
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