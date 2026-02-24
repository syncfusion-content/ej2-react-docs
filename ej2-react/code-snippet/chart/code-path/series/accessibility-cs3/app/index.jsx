{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Legend } from'@syncfusion/ej2-react-charts';
import { columnData } from './datasource';

function App() {

  const primaryxAxis = { 
    valueType: 'Category',
    title: 'Countries',
    labelPlacement: 'OnTicks' 
  };
  const primaryyAxis = { 
    minimum: 0, 
    maximum: 80,
    interval: 20, 
    title: 'Medals' 
  };
  const titleStyle = {
    accessibility: {
      accessibilityDescription: 'This chart shows the number of gold, silver, and bronze medals won by different countries in the Olympics.',
      accessibilityRole: 'heading'
    }
  };
  const subTitleStyle = {
    accessibility: {
      accessibilityDescription: 'The subtitle provides additional context for the Olympic medal distribution chart.',
      accessibilityRole: 'heading'
    }
  };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Medals Comparison by Country' titleStyle={titleStyle} subTitle='Medal Comparison' subTitleStyle={subTitleStyle}>
            <Inject services={[ColumnSeries, Category, Legend]} />
            <SeriesCollectionDirective>
              <SeriesDirective dataSource={columnData} xName='country' yName='gold' type='Column' name='Gold'>
              </SeriesDirective>
              <SeriesDirective dataSource={columnData} xName='country' yName='silver' type='Column' name='Silver'>
              </SeriesDirective>
              <SeriesDirective dataSource={columnData} xName='country' yName='bronze' type='Column' name='Bronze'>
              </SeriesDirective>
            </SeriesCollectionDirective>
         </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}