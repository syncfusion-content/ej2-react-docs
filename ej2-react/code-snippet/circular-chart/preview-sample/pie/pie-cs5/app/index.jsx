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
    { x: 'Chrome', y: 62.92, text: 'Chrome: 35%', color: 'yellow' },
    {
      x: 'Internet Explorer',
      y: 6.12,
      text: 'Internet Explorer: 15%',
      color: 'orange',
    },
    { x: 'Opera', y: 3.15, text: 'Opera: 10%', color: 'red' },
    { x: 'Edge', y: 5.5, text: 'Edge: 15%', color: 'green' },
    { x: 'Safari', y: 19.97, text: 'Safari: 20%', color: 'blue' },
    { x: 'Others', y: 2.34, text: 'Others: 5%', color: 'black' },
  ];
  return (
    <CircularChart3DComponent
      id="charts"
      title="Browser Market Shares in November 2023"
      tilt={-45}
    >
      <Inject services={[PieSeries3D, CircularChartDataLabel3D]} />
      <CircularChart3DSeriesCollectionDirective>
        <CircularChart3DSeriesDirective
          dataSource={circularData}
          xName="x"
          yName="y"
          radius="80%"
          innerRadius="40%"
          pointColorMapping='color'
          dataLabel={{ visible: true, position: 'Outside', name: 'text' }}
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
