


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,Category,ChartComponent,ColumnSeries,Inject,Legend, SeriesCollectionDirective, SeriesDirective } from'@syncfusion/ej2-react-charts';
import { data1, data2 } from './datasource';
function App() {
    const primaryxAxis: AxisModel= { valueType: 'Category',   isIndexed: true } ;

            return <ChartComponent id='charts'
                    primaryXAxis={ primaryxAxis }>
                        <Inject services={[ColumnSeries, Legend, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource ={data1}  xName='x' yName='y' type='Column'/>
                            <SeriesDirective dataSource ={data2}  xName='x' yName='y' type='Column'/>
                        </SeriesCollectionDirective>
                  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


