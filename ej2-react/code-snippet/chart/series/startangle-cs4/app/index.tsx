

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective,IAccPointRenderEventArgs, AccumulationSeriesDirective, Inject, AccumulationDataLabel} from'@syncfusion/ej2-react-charts';
import { dataMapping } from 'datasource.ts';

function App() {

  const onPointRender: EmitType<IAccPointRenderEventArgs> = (args: IAccPointRenderEventArgs): void => {
    if ((args.point.x as string).indexOf('Apr') > -1) {
      args.fill = '#f4bc42';
    }
    else {
      args.fill = '#597cf9';
    }
  };

  return <AccumulationChartComponent id='charts' pointRender={onPointRender}>
      <Inject services={[AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={dataMapping} xName='x' yName='y'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


