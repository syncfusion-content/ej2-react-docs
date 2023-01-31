import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { Internationalization } from '@syncfusion/ej2-base';
function App() {
    const data = [
        { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
        { x: new Date(2007, 0, 1), y: 30 }, { x: new Date(2008, 0, 1), y: 38 },
        { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
    ];
    const primaryxAxis = { valueType: 'DateTime' };
    const marker = { visible: true, height: 10, width: 10, dataLabel: { visible: true } };
    const tooltip = { enable: true };
    const tooltipRender = (args) => {
        let intl = new Internationalization();
        let formattedString = intl.formatDate(new Date(args.point.x), { skeleton: 'yMd' });
        args.text = formattedString;
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} title='Inflation - Consumer Price' tooltipRender={tooltipRender} tooltip={tooltip}>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Germany' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
