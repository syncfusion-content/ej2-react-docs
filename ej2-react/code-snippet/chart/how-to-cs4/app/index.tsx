

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, Legend,  Category, Tooltip, DataLabel, StepAreaSeries , ILegendRenderEventArgs } from'@syncfusion/ej2-react-charts';
import { EmitType} from '@syncfusion/ej2-base';

function App() {

  const data: any[] = [
    { x: 2000, y: 416 }, { x: 2001, y: 490 },
    { x: 2002, y: 470 }, { x: 2003, y: 500 },
    { x: 2004, y: 449 }, { x: 2005, y: 470 },
    { x: 2006, y: 437 }, { x: 2007, y: 458 }
  ];
  const data1: any[] = [
    { x: 2000, y: 180 }, { x: 2001, y: 240 },
    { x: 2002, y: 370 }, { x: 2003, y: 200 },
    { x: 2004, y: 229 }, { x: 2005, y: 210 },
    { x: 2006, y: 337 }, { x: 2007, y: 258 }
  ];
  const legendRender: EmitType<ILegendRenderEventArgs> = (args: ILegendRenderEventArgs): void => {
    if (args.text === 'Renewable') {
      args.shape = 'Circle';
    } else if (args.text === 'Non-Renewable') {
      args.shape = 'Triangle';
    }
  };
  const primaryxAxis: AxisModel = { valueType: 'Double' };
  const primaryyAxis: AxisModel = { valueType: 'Double' };

  
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='FB Penetration of Internet Audience'
      legendRender={legendRender}>
      <Inject services={[StepAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} type='StepArea' xName='x' yName='y' width={2} name='Renewable'>
        </SeriesDirective>
        <SeriesDirective dataSource={data1} type='StepArea' xName='x' yName='y' width={2} name='Non-Renewable' >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



