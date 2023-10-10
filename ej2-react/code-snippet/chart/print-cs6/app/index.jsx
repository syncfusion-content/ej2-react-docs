{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Export, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
      { x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
      { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }
    ];
    let chartInstance;
    function clickHandler() {
      const header = {
        content: 'Chart Header',
        fontSize: 15
    };

    const footer = {
        content: 'Chart Footer',
        fontSize: 15,
    };
    chartInstance.exportModule.export('PDF', 'Chart', 1, [chartInstance], null, null, true, header, footer);
    }
    const primaryxAxis = {
      title: 'Manager',
      valueType: 'Category',
      majorGridLines: { width: 0 }
    };
    const primaryyAxis = {
      title: 'Sales',
      minimum: 0,
      maximum: 20000,
      majorGridLines: { width: 0 }
    };
    return (<div><button value='print' onClick={clickHandler.bind(this)}>Export</button>
      <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Sales Comparision'>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Export, LineSeries, Category]}/>
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='x' yName='y' type='Column' width='2'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


{% endraw %}