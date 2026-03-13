{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { 
    AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, 
    Inject, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries, IAccTextRenderEventArgs, IAccPointRenderEventArgs 
} from '@syncfusion/ej2-react-charts';

function App() {
    const CategoryData: object[] = [
        { Category: 'Electronics', Share: 22.5, DataLabel: 'Electronics: 22.5%' },
        { Category: 'Fashion', Share: 18.0, DataLabel: 'Fashion: 18.0%' },
        { Category: 'Home & Kitchen', Share: 15.5, DataLabel: 'Home & Kitchen: 15.5%' },
        { Category: 'Beauty & Health', Share: 10.0, DataLabel: 'Beauty: Health: 10.0%' },
        { Category: 'Sports & Outdoors', Share: 9.5, DataLabel: 'Sports & Outdoors: 9.5%' },
        { Category: 'Books', Share: 8.0, DataLabel: 'Books: 8.0%' },
        { Category: 'Toys & Games', Share: 7.0, DataLabel: 'Toys: 7.0%' },
        { Category: 'Groceries', Share: 6.0, DataLabel: 'Groceries: 6.0%' },
        { Category: 'Other', Share: 3.5, DataLabel: 'Other: 3.5%' }
    ];
    const baseColors: string[] = ["#0072B2", "#E69F00", "#009E73", "#D55E00", "#CC79A7", "#56B4E9", "#F0E442", "#999999", "#7F3C8D"];
    const onPointRender = (args: IAccPointRenderEventArgs) => {
        const idx = args.point.index as number;
        const base = baseColors[idx % baseColors.length];
        args.linearGradient = {
            x1: 0.05, y1: 0.0, x2: 0.95, y2: 1.0,
            gradientColorStop: [
                { offset: 0, color: base, opacity: 1, brighten: 0.85, lighten: 0 },
                { offset: 20, color: base, opacity: 0.98, brighten: 0.45, lighten: 0 },
                { offset: 50, color: base, opacity: 0.96, brighten: 0, lighten: 0 },
                { offset: 80, color: base, opacity: 0.94, brighten: -0.30, lighten: 0 },
                { offset: 100, color: base, opacity: 0.92, brighten: -0.55, lighten: 0 }
            ]
        };
    };
    return (
        <AccumulationChartComponent id="charts" title="Orders by Category" legendSettings={{ visible: true, position: 'Right' }} tooltip={{ enable: true }} enableSmartLabels={true} pointRender={onPointRender}>
            <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={CategoryData} xName="Category" yName="Share" name="Share by Category" type="Pie" dataLabel={{ visible: true, name: 'DataLabel', position: 'Outside', connectorStyle: { length: '10px' }, font: { size: '12px' } }} border={{ color: '#FFFFFF', width: 2 }} />
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
 
{% endraw %}