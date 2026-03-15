{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    LineSeries, Category, DataLabel, SeriesLabel, Legend
} from '@syncfusion/ej2-react-charts';
import { vietnamData, indonesiaData, franceData, polandData, mexicoData } from "./datasource";

function App(): JSX.Element {
    return <ChartComponent id='charts' primaryXAxis={{ valueType: 'Category' }} legendSettings={{ visible: true }}>
        <Inject services={[LineSeries, DataLabel, Category, SeriesLabel, Legend]} />
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={vietnamData} xName='x' yName='y' name='Vietnam' type='Line'
                labelSettings={{ visible: true }} marker={{ visible: true }}>
            </SeriesDirective>
            <SeriesDirective dataSource={indonesiaData} xName='x' yName='y' name='Indonesia' type='Line'
                labelSettings={{ visible: true }} marker={{ visible: true }}>
            </SeriesDirective>
            <SeriesDirective dataSource={franceData} xName='x' yName='y' name='France' type='Line'
                labelSettings={{ visible: true }} marker={{ visible: true }}>
            </SeriesDirective>
            <SeriesDirective dataSource={polandData} xName='x' yName='y' name='Poland' type='Line'
                labelSettings={{ visible: true }} marker={{ visible: true }}>
            </SeriesDirective>
            <SeriesDirective dataSource={mexicoData} xName='x' yName='y' name='Mexico' type='Line'
                labelSettings={{ visible: true }} marker={{ visible: true }}>
            </SeriesDirective>
        </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
