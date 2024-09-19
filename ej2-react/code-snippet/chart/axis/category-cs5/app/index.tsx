{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Selection, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
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