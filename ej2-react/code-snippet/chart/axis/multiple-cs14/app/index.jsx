import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, MultiLevelLabel } from '@syncfusion/ej2-react-charts';
import { categoryData } from 'datasource.ts';
function App() {
    const primaryxAxis = {
        valueType: 'Category',
        multiLevelLabels: [{
                categories: [{ start: -0.5, end: 3.5, text: 'Half Yearly 1' },
                    { start: 3.5, end: 7.5, text: 'Half Yearly 2' }],
                textStyle: { size: '18px', color: 'Red' }
            }]
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, MultiLevelLabel]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={categoryData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
