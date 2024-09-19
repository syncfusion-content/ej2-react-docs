

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartAnnotation, AnnotationsDirective, AnnotationDirective, Legend, Category, Tooltip, DataLabel, SplineSeries ,AxisModel}from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 60, interval: 20 };
  const marker = { visible: true };
  const animation = { enable: true, duration: 1200, delay: 100 };
  const content: any = chartTemplate;
  function chartTemplate(): any {
    return (<div className='template'>
      <a href="https://www.syncfusion.com" target="_blank">www.syncfusion.com</a>
    </div>);
  }

    return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Olympic Medals'>
      <Inject services={[SplineSeries, Legend, Tooltip, DataLabel, Category, ChartAnnotation]} />
      <AnnotationsDirective>
        <AnnotationDirective content={content} coordinateUnits='Point' x='Wed' y={20}>
        </AnnotationDirective>
        <AnnotationDirective content={content} coordinateUnits='Pixel' x={440} y={600}>
        </AnnotationDirective>
      </AnnotationsDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Max Temp' marker={marker}
          animation={animation} type='Spline'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


