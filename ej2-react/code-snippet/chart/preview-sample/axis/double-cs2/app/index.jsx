import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { loadCldr, setCurrencyCode } from '@syncfusion/ej2-base';
// For non en-US cultures, install @syncfusion/ej2-cldr-data and load the CLDR JSON:
// import * as currencyData from '@syncfusion/ej2-cldr-data/main/en/currencies.json';
// import * as numbersData from '@syncfusion/ej2-cldr-data/main/en/numbers.json';
// loadCldr(currencyData, numbersData);
import { data } from './datasource';
setCurrencyCode('EUR');
function App() {
    const primaryxAxis = { edgeLabelPlacement: 'Shift', title: 'Years' };
    const primaryyAxis = { labelFormat: 'c', title: 'Sales Amount in Millions' };
    const marker = { dataLabel: { visible: true } };
    const tooltip = { enable: true, header: '${point.x}', format: '${point.y}' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Average Sales Comparison' tooltip={tooltip}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Product X' type='Column' marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='Product Y' type='Column' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
