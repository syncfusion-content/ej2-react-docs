import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { categoryData } from './datasource';
function App() {
    const primaryxAxis = {
        valueType: 'Category',
        majorTickLines: {
            color: 'blue',
            width: 5
        },
        minorTickLines: {
            color: 'red',
            width: 0
        }
    };
    const primaryyAxis = {
        title: 'Temperature (Fahrenheit)',
        majorTickLines: {
            color: 'blue',
            width: 5
        },
        minorTickLines: {
            color: 'red',
            width: 0
        }
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Temperature flow over months'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={categoryData} xName='country' yName='gold' name='Sales' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
