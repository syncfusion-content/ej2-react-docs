

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,AnnotationsDirective,AnnotationDirective, Legend,  Category, Tooltip, DataLabel, StackingColumnSeries, IAnnotationRenderEventArgs, ChartAnnotation ,AxisModel} from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { x: 'Jamesh', y0: 5, y1: 4, y2: 5 },
    { x: 'Michael', y0: 4, y1: 3, y2: 4 },
    { x: 'John', y0: 5, y1: 4, y2: 2 }
  ];
  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 15, interval: 5 };
  const marker1 = { visible: true, dataLabel: { position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } };
  const marker2 = { visible: true, dataLabel: { position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } };
  const marker3 = { visible: true, dataLabel: { position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } };
  const template1: any = chartTemplate1;
  function chartTemplate1(): any {
    return (<div className='template'>
      <div style={{ color: 'gray',fontSize:'11px',fontWeight:'bold',fill: 'gray'}}>
        <span>11</span>
      </div>
    </div>);
  };
  const template2: any = chartTemplate2;
  function chartTemplate2(): any {
    return (<div className='template'>
      <div style={{ color: 'gray',fontSize:'11px',fontWeight:'bold',fill: 'gray'}}>
        <span>10</span>
      </div>
    </div>);
  };
  const template3: any = chartTemplate3;
  function chartTemplate3(): any {
    return (<div className='template'>
      <div style={{ color: 'gray',fontSize:'11px',fontWeight:'bold',fill: 'gray'}}>
        <span>12</span>
      </div>
    </div>);
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryxAxis}
      title='Fruit Consumption' >
      <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category, ChartAnnotation]} />
      <AnnotationsDirective>
        <AnnotationDirective content={template1} coordinateUnits='Point' x='Jamesh' y={14.5}>
        </AnnotationDirective>
        <AnnotationDirective content={template2} coordinateUnits='Point' x='Michael' y={12}>
        </AnnotationDirective>
        <AnnotationDirective content={template3} coordinateUnits='Point' x='John' y={12}>
        </AnnotationDirective>
      </AnnotationsDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} type='StackingColumn' xName='x' yName='y0' name='Apple'
          marker={marker1} ></SeriesDirective>
        <SeriesDirective dataSource={data} type='StackingColumn' xName='x' yName='y1' name='Orange'
          marker={marker2}></SeriesDirective>
        <SeriesDirective dataSource={data} type='StackingColumn' xName='x' yName='y2' name='Grapes'
          marker={marker3} ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


