

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, StripLine, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection, StripLinesDirective, StripLineDirective, AxisModel, TooltipSettingsModel} from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { x: 1, y: 20 }, { x: 2, y: 22 }, { x: 3, y: 10 }, { x: 4, y: 12 }, { x: 5, y: 5 },
    { x: 6, y: 15 }, { x: 7, y: 6 }, { x: 8, y: 12 }, { x: 9, y: 34 }, { x: 10, y: 7 },
  ];
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


