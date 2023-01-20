

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection} from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [{ x: 'John', y: 10000 },
  { x: 'Jake', y: 12000 },
  { x: 'Peter', y: 18000 },
  { x: 'James', y: 11000 },
  ];
  var chartInstance: ChartComponent;
  function add() {
    chartInstance.addSeries([{
      type: 'Column',
      dataSource: [{ x: 'John', y: 11000 }, { x: 'Jake', y: 16000 }, { x: 'Peter', y: 19000 },
      { x: 'James', y: 12000 }, { x: 'Mary', y: 10700 }],
      xName: 'x', width: 2,
      yName: 'y'
    }]);
  };
  function remove() {
    chartInstance.removeSeries(1);
  };

    return (<div>
      <ButtonComponent value='add' cssClass='e-flat' onClick={add.bind(this)}>add</ButtonComponent>
      <ButtonComponent value='remove' cssClass='e-flat' onClick={remove.bind(this)}>remove</ButtonComponent>
      <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={{ valueType: 'Category' }}
        title='Sales Comparision'>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='x' yName='y' type='Column' name='Sales'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent> </div>)

};
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


