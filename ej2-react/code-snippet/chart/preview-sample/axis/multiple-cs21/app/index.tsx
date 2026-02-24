
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, IAxisLabelRenderEventArgs,StackingColumnSeries, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection} from'@syncfusion/ej2-react-charts';
import { data1 } from './datasource';
function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', interval: 1,tickPosition: 'Inside', labelPosition:'Inside', labelStyle: { color: '#ffffff' } };
  const primaryyAxis: AxisModel ={ minimum: 0, maximum: 300, interval: 50,  labelStyle: { color: 'transparent' } };
  let count: number = 0;
  
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}  primaryYAxis={primaryyAxis} title='Trade in Food Groups'
>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category,StackingColumnSeries]} />
         <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} type='Column' xName='x' width={2} yName='y' name='Tiger'
                                cornerRadius={{ bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10 }}
                                marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }}>
                            </SeriesDirective>
          </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
