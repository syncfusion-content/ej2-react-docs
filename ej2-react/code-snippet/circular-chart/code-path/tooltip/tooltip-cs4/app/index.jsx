{% raw %}
import {
  CircularChart3DComponent,
  CircularChart3DSeriesCollectionDirective,
  CircularChart3DSeriesDirective,
  PieSeries3D,
  CircularChartDataLabel3D,
  CircularChartTooltip3D,
  Inject,
} from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  const circularData = [
    { x: 'Chrome', y: 62.92 },
    { x: 'Internet Explorer', y: 6.12 },
    { x: 'Opera', y: 3.15 },
    { x: 'Edge', y: 5.5 },
    { x: 'Safari', y: 19.97 },
    { x: 'Others', y: 2.34 },
  ];
  return (
    <CircularChart3DComponent
      id="charts"
      title="Browser Market Shares in November 2023"
      tilt={-45}
      tooltip={{ enable: true, template: '<div> ${x} : ${y} <div>' }}
    >
      <Inject
        services={[
          PieSeries3D,
          CircularChartDataLabel3D,
          CircularChartTooltip3D,
        ]}
      />
      <CircularChart3DSeriesCollectionDirective>
        <CircularChart3DSeriesDirective
          dataSource={circularData}
          xName="x"
          yName="y"
          dataLabel={{
            visible: true,
          }}
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
{% endraw %}