

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,Category,ChartComponent, ColumnSeries, DataLabel,
  Inject, Legend,LineSeries, SeriesCollectionDirective, SeriesDirective,
  Tooltip} from '@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  ];
  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} width='80%' height='90%'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='month' yName='sales' type='Column' name='Sales' />
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


