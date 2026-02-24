{% raw %}
 
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,ColumnSeries, Legend, Category, DataLabel } from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {

return(
    <ChartComponent id='charts'
            primaryXAxis={ { valueType: 'Category', title: 'Years', opposedPosition: true,  isInversed: true } }
            primaryYAxis={ { title: 'Exchange rate (INR per USD)', edgeLabelPlacement: 'Shift', labelIntersectAction: 'Rotate45',
                            isInversed: true } }
            title='Exchange Rate'>
            <Inject services={[ColumnSeries, Category, Legend, DataLabel]} />
            <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName='x' yName='y' type='Column' marker={ {dataLabel:{visible: true} } }></SeriesDirective>
            </SeriesCollectionDirective>
            </ChartComponent>

)
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}
