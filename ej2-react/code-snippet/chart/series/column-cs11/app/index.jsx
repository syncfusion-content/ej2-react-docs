import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { Category, ChartComponent, ColumnSeries, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
function App() {
    const dataManager = new DataManager({
        url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/Tasks/'
    });
    const query = new Query().take(5).where('Estimate', 'lessThan', 3, false);
    const primaryxAxis = { valueType: 'Category', title: 'Asignee' };
    const primaryyAxis = { title: 'Estimate', minimum: 0, maximum: 3, interval: 1 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis}>
      <Inject services={[ColumnSeries, Legend, Category, LineSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={dataManager} xName='Assignee' type='Column' yName='Estimate' name='Sales' query={query}/>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
