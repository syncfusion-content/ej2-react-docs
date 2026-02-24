

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, AnnotationsDirective, AnnotationDirective, Inject, ColumnSeries, Category, ChartAnnotation } from'@syncfusion/ej2-react-charts';
import { columnData } from './datasource';

function App() {

  const primaryxAxis = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis = { title: 'Medals' };
  const accessibility = {
      accessibilityDescription: 'Annotation indicating that France has won 70 Gold Medals.',
      accessibilityRole: 'note',
      focusable: true
  };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Medals'>
            <Inject services={[ColumnSeries, Category, ChartAnnotation]} />
            <AnnotationsDirective>
              <AnnotationDirective content='<div style="border: 1px solid #000; background-color: #f8f8f8; padding: 5px; border-radius: 4px; font-size: 12px; font-weight: bold;">70 Gold Medals</div>' coordinateUnits='Point' x='France' y={55} accessibility={accessibility}>
              </AnnotationDirective>
            </AnnotationsDirective>
            <SeriesCollectionDirective>
              <SeriesDirective dataSource={columnData} xName='country' yName='gold' type='Column'>
              </SeriesDirective>
            </SeriesCollectionDirective>
         </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


