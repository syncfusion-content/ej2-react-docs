import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Zoom, DataLabel } from '@syncfusion/ej2-react-charts';
import { L10n } from '@syncfusion/ej2-base';
import { data } from './datasource';
L10n.load({
    'ar-AR': {
        'chart': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين',
        },
    }
});
function App() {
    const primaryxAxis = { edgeLabelPlacement: 'Shift', title: 'Years' };
    const primaryyAxis = { title: 'Sales Amount in Millions' };
    const zoomsettings = {
        enableMouseWheelZooming: true, enablePinchZooming: true,
        enableSelectionZooming: true
    };
    const marker = { dataLabel: { visible: true } };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Average Sales Comparison' zoomSettings={zoomsettings} locale='ar-AR'>
      <Inject services={[ColumnSeries, Legend, Zoom, DataLabel]}/>
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
