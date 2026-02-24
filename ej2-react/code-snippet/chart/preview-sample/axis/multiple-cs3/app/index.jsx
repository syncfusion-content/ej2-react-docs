import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { categoryData } from './datasource';
function App() {
    const primaryxAxis = {
        valueType: 'Category', title: 'Countries', titleRotation: 90, titleStyle: {
            size: '16px', color: 'blue', fontFamily: 'Segoe UI', fontWeight: 'bold'
        }
    };

        return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={categoryData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;

}
;
ReactDOM.render(<App />, document.getElementById("charts"));
