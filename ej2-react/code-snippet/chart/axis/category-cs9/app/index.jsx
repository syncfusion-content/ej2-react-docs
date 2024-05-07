{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, DataLabel } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { x: 2008, y: 15.1 }, { x: 2009, y: 16 }, { x: 2010, y: 21.4 },
        { x: 2011, y: 18 }, { x: 2012, y: 16.2 }, { x: 2013, y: 11 },
        { x: 2014, y: 7.6 }, { x: 2015, y: 1.5 }
    ];
    return (<ChartComponent id='charts' primaryXAxis={{ valueType: 'Category', title: 'Years', opposedPosition: true, isInversed: true }} primaryYAxis={{ title: 'Exchange rate (INR per USD)', edgeLabelPlacement: 'Shift', labelIntersectAction: 'Rotate45',
            isInversed: true }} title='Exchange Rate'>
            <Inject services={[ColumnSeries, Category, Legend, DataLabel]}/>
            <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName='x' yName='y' type='Column' marker={{ dataLabel: { visible: true } }}></SeriesDirective>
            </SeriesCollectionDirective>
            </ChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}