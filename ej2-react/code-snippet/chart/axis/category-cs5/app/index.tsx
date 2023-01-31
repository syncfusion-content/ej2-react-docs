{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Selection, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { x: 'Jan', y: 6.96, color: "red" },
    { x: 'Feb', y: 8.9, color: "blue" },
    { x: 'Mar', y: 12, color: "orange" },
    { x: 'Apr', y: 17.5, color: "aqua" },
    { x: 'May', y: 22.1, color: "grey" }
  ];

  return <ChartComponent id='charts' primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{ lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                labelFormat: '{value}°C' }} title="USA CLIMATE - WEATHER BY MONTH" chartArea={{ border: { width: 0 } }}>
                        <Inject services={[ColumnSeries, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective pointColorMapping="color" dataSource={data} name='USA' xName='x' yName='y' type='Column' animation={{ enable: false }} cornerRadius={{
                topLeft: 10, topRight: 10
            }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}