import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartAnnotation, AnnotationsDirective, AnnotationDirective, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { columnData } from 'datasource.ts';
function App() {
    const primaryxAxis = { valueType: 'Category', title: 'Countries' };
    const primaryyAxis = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
    const border = { width: 2, color: 'grey' };
    const animation = { enable: true, duration: 1200, delay: 100 };
    const template = chartTemplate;
    function chartTemplate() {
        return (<div className='template'>
      <div>Highest Medal Count</div>
    </div>);
    }
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Medals'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, ChartAnnotation]}/>
      <AnnotationsDirective>
        <AnnotationDirective content={template} region='Series' coordinateUnits='Point' x='Japan' y={75}>
        </AnnotationDirective>
      </AnnotationsDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='country' yName='gold' name='Gold' border={border} animation={animation} type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
