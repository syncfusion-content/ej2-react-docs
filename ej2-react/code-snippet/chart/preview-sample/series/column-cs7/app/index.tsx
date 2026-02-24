

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries} from'@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis: AxisModel= { valueType: 'Category', title: 'Countries'}  ;
    const textstyle={ size:'18px', color:'Red', textAlignment: 'Far', textOverflow: 'Wrap' };

      return <ChartComponent id='charts'
                  primaryXAxis={ primaryxAxis }
                  textStyle= { textstyle }
                  title='Sales Analysis'>
                    <Inject services={[Legend, Tooltip, DataLabel, Category, LineSeries]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource ={data}  xName='month' yName='sales'
                         type='Line'>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


