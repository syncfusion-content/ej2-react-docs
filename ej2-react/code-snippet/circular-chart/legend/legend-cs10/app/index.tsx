{% raw %}
import {
  CircularChart3DComponent,
  CircularChart3DSeriesCollectionDirective,
  CircularChart3DSeriesDirective,
  PieSeries3D,
  CircularChartLegend3D,
  Inject,
} from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  const circularData: any[] = [
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
      title="Legend in Circular 3D"
      tilt={-45}
      legendSettings={{
        visible: true,
        width: '240px',
        height: '100px',
        enablePages: false,
      }}
    >
      <Inject services={[PieSeries3D, CircularChartLegend3D]} />
      <CircularChart3DSeriesCollectionDirective
      >
        <CircularChart3DSeriesDirective
          dataSource={circularData}
          xName="x"
          yName="y"
          legendShape='Rectangle'
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
{% endraw %}