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
    { x: 'Belgium', y: 551500, r: '110.7', text: 'Belgium' },
    { x: 'Dominican Republic', y: 312685, r: '137.5', text: 'Dominican Republic' },
    { x: 'Cuba', y: 350000, r: '124.6', text: 'Cuba' },
    { x: 'Egypt', y: 301000, r:  '150.8', text: 'Egypt' },
    { x: 'Kazakhstan', y: 300000, r:  '155.5', text: 'Kazakhstan' },
    { x: 'Somalia', y: 357022, r:'160.6', text: 'Somalia' },
    { x: 'Argentina', y: 505370, r: '100', text: 'Argentina' },
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
          radius='r'
        ></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
{% endraw %}
