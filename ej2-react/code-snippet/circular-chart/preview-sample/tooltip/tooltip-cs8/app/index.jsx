import {
  CircularChart3DComponent,
  CircularChart3DSeriesCollectionDirective,
  CircularChart3DSeriesDirective,
  PieSeries3D,
  CircularChartTooltip3D,
  Inject,
} from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  const circularData = [
    { x: new Date(2024, 0, 1), y: 13 },
    { x: new Date(2024, 1, 1), y: 13 },
    { x: new Date(2024, 2, 1), y: 17 },
    { x: new Date(2024, 3, 1), y: 13.5 }
  ];
  const tooltip = { enable: true, format: '${point.x:MMM yyyy} : <b>${point.y:n2}%</b>' };

  return (
    <CircularChart3DComponent
      id="charts"
      tilt={-45}
      tooltip={tooltip}
    >
      <Inject
        services={[
          PieSeries3D,
          CircularChartTooltip3D,
        ]}
      />
      <CircularChart3DSeriesCollectionDirective>
        <CircularChart3DSeriesDirective
          dataSource={circularData}
          xName="x"
          yName="y"
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
