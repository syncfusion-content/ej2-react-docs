

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,TooltipSettingsModel,
         Legend, DateTime, Tooltip, DataLabel, StepLineSeries}
from'@syncfusion/ej2-react-charts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime' };
  const tooltip: TooltipSettingsModel = {
    enable: true, format: '${series.name} ${point.x} : ${point.y}',
    fill: '#7bb4eb', border: {
      width: 2,
      color: 'grey'
    }
  };
  const marker = { visible: true, width: 10, height: 10 };
  const titlestyle = {
    fontFamily: "Arial", fontStyle: 'italic', fontWeight: 'regular',
    color: "#E27F2D", size: '23px'
  };
  const data: any[] = [
    { x: new Date(1975, 0, 1), y: 16, y1: 10, y2: 4.5 },
    { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
    { x: new Date(1985, 0, 1), y: 19, y1: 11, y2: 6.5 },
    { x: new Date(1990, 0, 1), y: 14.4, y1: 7, y2: 4.4 },
    { x: new Date(1995, 0, 1), y: 11.5, y1: 8, y2: 5 },
    { x: new Date(2000, 0, 1), y: 14, y1: 6, y2: 1.5 },
    { x: new Date(2005, 0, 1), y: 10, y1: 3.5, y2: 2.5 },
    { x: new Date(2010, 0, 1), y: 16, y1: 7, y2: 3.7 }
];

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      tooltip={tooltip}
      title='Unemployment Rates 1975-2010'
      highlightColor='red'
      titleStyle={titlestyle}>
      <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='China' width={2}
          type='StepLine' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


