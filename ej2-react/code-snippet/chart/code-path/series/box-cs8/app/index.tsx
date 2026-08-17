{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import type { AxisModel, BorderModel } from "@syncfusion/ej2-react-charts";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BoxAndWhiskerSeries, Category } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const marker = { visible: true, width: 10, height: 10 };
  const border: BorderModel = { width: 2, color: '#bd0032', dashArray: '2,2' };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[Category, BoxAndWhiskerSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='BoxAndWhisker' marker={marker} border={border}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);



{% endraw %}