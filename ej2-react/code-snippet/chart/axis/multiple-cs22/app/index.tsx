


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,Category,ChartComponent,ColumnSeries,Inject,Legend, SeriesCollectionDirective, SeriesDirective } from'@syncfusion/ej2-react-charts';

function App() {

    const  data1: any[] = [{ x: 'Myanmar', y: 7.3 }, { x: 'India', y: 7.9 },
                           { x: 'Bangladesh', y: 6.8 }, { x: 'Cambodia', y: 7.0 }, { x: 'China', y: 6.9 }];
    const  data2: any[] = [{ x: 'Poland', y: 2.7 },{ x: 'Australia', y: 2.5 },
                           { x: 'Singapore', y: 2.0 },{ x: 'Canada', y: 1.4 },{ x: 'Germany', y: 1.8 }];
    const primaryxAxis: AxisModel= { valueType: 'Category',   isIndexed: true } ;

            return <ChartComponent id='charts'
                    primaryXAxis={ primaryxAxis }>
                        <Inject services={[ColumnSeries, Legend, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource ={data1}  xName='x' yName='y' type='Column'/>
                            <SeriesDirective dataSource ={data1}  xName='x' yName='y' type='Column'/>
                        </SeriesCollectionDirective>
                  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


