{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { Chart, AreaSeries, LineSeries, DateTime, Tooltip, IMouseEventArgs, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject } from '@syncfusion/ej2-react-charts';
import { synchronizedData } from 'datasource.ts';
import { Browser } from '@syncfusion/ej2/base';

function App() {
  let chart1;
  let chart2;

  let chart1MouseLeave = (args) => {
    chart2.hideTooltip();
  };

  let chart1MouseMove = (args) => {
    if ((!Browser.isDevice && !chart1.isTouch && !chart1.isChartDrag) || chart1.startMove) {
      chart2.startMove = chart1.startMove;
      chart2.showTooltip(args.x, args.y);
    }
  };

  let chart1MouseUp = (args) => {
    if (Browser.isDevice && chart1.startMove) {
      chart2.hideTooltip();
    }
  };

  let chart2MouseLeave = (args) => {
    chart1.hideTooltip();
  };

  let chart2MouseMove = (args) => {
    if ((!Browser.isDevice && !chart2.isTouch && !chart2.isChartDrag) || chart2.startMove) {
      chart1.startMove = chart2.startMove;
      chart1.showTooltip(args.x, args.y);
    }
  };
  let chart2MouseUp = (args) => {
    if (Browser.isDevice && chart2.startMove) {
      chart1.hideTooltip();
    }
  };
    return <div className="control-section">
    <div className="row">
      <div className="col">
        <ChartComponent
          id="container1"
          ref={chart => chart1 = chart}
          primaryXAxis={{
            minimum: new Date(2023, 1, 18),
            maximum: new Date(2023, 7, 18),
            valueType: 'DateTime',
            labelFormat: 'MMM d',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
            labelRotation: Browser.isDevice ? -45 : 0,
            interval: Browser.isDevice ? 2 : 1
          }}
          primaryYAxis={{
            labelFormat: 'n2',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            minimum: 0.86,
            maximum: 0.96,
            interval: 0.025
          }}
          chartArea={{ border: { width: 0 } }}
          chartMouseLeave={chart1MouseLeave.bind(this)}
          chartMouseMove={chart1MouseMove.bind(this)}
          chartMouseUp={chart1MouseUp.bind(this)}
          titleStyle={{ textAlignment: 'Near' }}
          tooltip={{ enable: true, fadeOutDuration: Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>€${point.y}</b><br>${point.x} 2023', enableMarker: false }}
          title="US to Euro">
          <Inject services={[LineSeries, DateTime, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective type="Line" dataSource={synchronizedData} xName="USD" yName="EUR" width={2} emptyPointSettings={{ mode: 'Drop' }}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <div className="col">
        <ChartComponent
          id="container2"
          ref={chart => chart2 = chart}         
          primaryXAxis={{
            minimum: new Date(2023, 1, 18),
            maximum: new Date(2023, 7, 18),
            valueType: 'DateTime',
            labelFormat: 'MMM d',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
            labelRotation: Browser.isDevice ? -45 : 0,
            interval: Browser.isDevice ? 2 : 1
          }}
          primaryYAxis={{
            labelFormat: 'n1',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            minimum: 79,
            maximum: 85,
            interval: 1.5
          }}
          chartArea={{ border: { width: 0 } }}
          chartMouseLeave={chart2MouseLeave.bind(this)}
          chartMouseMove={chart2MouseMove.bind(this)}
          chartMouseUp={chart2MouseUp.bind(this)}
          titleStyle={{ textAlignment: 'Near' }}
          tooltip={{ enable: true, fadeOutDuration: Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>₹${point.y}</b><br>${point.x} 2023', enableMarker: false }}
          title="US to INR">
          <Inject services={[AreaSeries, DateTime, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective type="Area" dataSource={synchronizedData} xName="USD" yName="INR" opacity={0.6} width={2} border={{ width: 2 }}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  </div>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}