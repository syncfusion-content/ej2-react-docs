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
  const circularData = [
    { x: 'Chrome', y: 62.92, text: 'Chrome: 40%' },
    { x: 'Internet Explorer', y: 6.12, text: 'Chrome: 15%' },
    { x: 'Opera', y: 3.15, text: 'Chrome: 8%' },
    { x: 'Edge', y: 5.5, text: 'Chrome: 15%' },
    { x: 'Safari', y: 19.97, text: 'Chrome: 20%' },
    { x: 'Others', y: 2.34, text: 'Chrome: 2%' },
  ];
  const textRender = function (args) {
    if (args.point.index === 0) {
        args.text = 'Custom Tooltip';
    }
  };
  return (
    <CircularChart3DComponent
      id="charts"
      tooltipRender={textRender}
      title="Browser Market Shares in November 2023"
      tilt={-45}
      legendSettings={{ visible: true, position: 'Right' }}
    >
      <Inject services={[PieSeries3D, CircularChartDataLabel3D]} />
      <CircularChart3DSeriesCollectionDirective>
        <CircularChart3DSeriesDirective
          dataSource={circularData}
          xName="x"
          yName="y"
          dataLabel={{
            visible: true,
            enableRotation: true,
          }}
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
{% endraw %}