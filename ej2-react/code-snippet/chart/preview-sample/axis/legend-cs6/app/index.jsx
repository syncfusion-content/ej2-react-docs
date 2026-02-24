


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, ColumnSeries } from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis = { 
    valueType: 'Category',
    title: 'Countries'
  };
  const primaryyAxis = { 
    minimum: 0, 
    maximum: 80,
    interval: 20, 
    title: 'Medals'
  };
  const legendSettings = { 
    visible: true,
    layout: "Auto",
    maximumColumns: 3,
    fixedWidth: true
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      title='Olympic Medals'>
      <Inject services={[ColumnSeries, Legend, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='country' yName='gold' name='Gold' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='silver' name='Silver' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='bronze' name='Bronze' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='gold' name='Ruby' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='silver' name='Platinum' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='bronze' name='Diamond' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



