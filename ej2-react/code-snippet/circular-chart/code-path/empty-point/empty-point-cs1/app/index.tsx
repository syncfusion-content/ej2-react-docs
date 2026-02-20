{% raw %}
import {
  CircularChart3DComponent,
  CircularChart3DSeriesCollectionDirective,
  CircularChart3DSeriesDirective,
  PieSeries3D,
  CircularChartDataLabel3D,
  Inject,
} from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  const circularData: any[] = [
    { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
    { x: 'Mar', y: undefined }, { x: 'Apr', y: 13.5 },
    { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
    { x: 'Jul', y: null }, { x: 'Aug', y: 25 },
    { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }
  ];
  return (
    <CircularChart3DComponent
      id="charts"
      title="Browser Market Shares in November 2023"
      tilt={-45}
    >
      <Inject
        services={[
          PieSeries3D,
          CircularChartDataLabel3D,
        ]}
      />
      <CircularChart3DSeriesCollectionDirective>
        <CircularChart3DSeriesDirective
          dataSource={circularData}
          xName="x"
          yName="y"
          dataLabel={{
            visible: true,
          }} emptyPointSettings={{ mode: 'Zero' }}
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));

{% endraw %}
