

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,FontModel, Legend, DateTime, Tooltip, DataLabel, StepLineSeries} from'@syncfusion/ej2-react-charts';

function App() {

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
    const primaryxAxis: AxisModel= {title: 'Years',lineStyle: { width: 0 },labelFormat: 'y',
           intervalType: 'Years',valueType: 'DateTime',edgeLabelPlacement: 'Shift'}  ;
    const primaryyAxis: AxisModel= {title: 'Percentage (%)',labelFormat: '{value}%',
           minimum: 0, maximum: 20, interval: 2}  ;
    const titlestyle:FontModel ={fontFamily: "Arial", fontStyle: 'italic',fontWeight: 'regular',
           color: "#E27F2D", size: '23px'};
    const marker={ visible: true, width: 10, height: 10 };

    return <ChartComponent id='charts'
              primaryXAxis={ primaryxAxis }
              primaryYAxis={ primaryyAxis }
              title='Unemployment Rates 1975-2010'
              titleStyle = { titlestyle }>
          <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, DateTime]}/>
            <SeriesCollectionDirective>
                  <SeriesDirective dataSource ={data}  xName='x' yName='y' name='China' width={2}type='StepLine' marker={ marker }></SeriesDirective>
                  <SeriesDirective dataSource ={data}  xName='x' yName='y1' name='Australia' width={2}
                  type='StepLine' marker={ marker }></SeriesDirective>
                  <SeriesDirective dataSource ={data}  xName='x' yName='y2' name='Japan' width={2}type='StepLine' marker={ marker }></SeriesDirective>
            </SeriesCollectionDirective>
            </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


