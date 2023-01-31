import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    const primaryxAxis = { valueType: 'Category', title: 'Countries' };
    const textstyle = { size: '18px', color: 'Red', textAlignment: 'Far', textOverflow: 'Wrap' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} textStyle={textstyle} title='Sales Analysis'>
                    <Inject services={[Legend, Tooltip, DataLabel, Category, LineSeries]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} xName='month' yName='sales' type='Line'>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
