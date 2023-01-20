import * as React from "react";
import * as ReactDOM from "react-dom";
import { Category, ChartComponent, ColumnSeries, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
function App() {
    const chartData = [
        { month: 'Jan', sales: 35, sales1: 28 }, { month: 'Feb', sales: 28, sales1: 35 },
        { month: 'Mar', sales: 34, sales1: 32 }, { month: 'Apr', sales: 32, sales1: 34 },
        { month: 'May', sales: 40, sales1: 32 }, { month: 'Jun', sales: 32, sales1: 40 },
        { month: 'Jul', sales: 35, sales1: 55 }, { month: 'Aug', sales: 55, sales1: 35 },
        { month: 'Sep', sales: 38, sales1: 30 }, { month: 'Oct', sales: 30, sales1: 38 },
        { month: 'Nov', sales: 25, sales1: 32 }, { month: 'Dec', sales: 32, sales1: 25 }
    ];
    const primaryxAxis = { valueType: 'Category' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} dataSource={chartData}>
      <Inject services={[ColumnSeries, Legend, LineSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective xName='month' type='Column' yName='sales'/>
        <SeriesDirective xName='month' type='Column' yName='sales1'/>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
