{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries, Highlight, Selection } from '@syncfusion/ej2-react-charts';

function App() {
  const primaryxAxis = { valueType: 'Category' };
  const legendSettings = { visible: true, toggleVisibility: false, enableHighlight: true };
  const selectionData = [
    { country: "USA", gold: 50, silver: 70, bronze: 45 },
    { country: "China", gold: 40, silver: 60, bronze: 55 },
    { country: "Japan", gold: 70, silver: 60, bronze: 50 },
    { country: "Australia", gold: 60, silver: 56, bronze: 40 },
    { country: "France", gold: 50, silver: 45, bronze: 35 },
    { country: "Germany", gold: 40, silver: 30, bronze: 22 },
    { country: "Italy", gold: 40, silver: 35, bronze: 37 },
    { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
  ];
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} legendSettings={legendSettings} title='Olympic Medals' selectionMode='Cluster'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Selection, Category, Highlight]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={selectionData} xName='country' yName='gold' name='Gold' type='Column'>
      </SeriesDirective>
      <SeriesDirective dataSource={selectionData} xName='country' yName='silver' name='Silver' type='Column'>
      </SeriesDirective>
      <SeriesDirective dataSource={selectionData} xName='country' yName='bronze' name='Bronze' type='Column'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}