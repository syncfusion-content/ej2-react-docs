import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccLegendRenderEventArgs, PieSeries, Inject, Legend, LegendSettingsModel } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

const legendIcons: { [key: string]: string } = {
    'Tomatoes': 'https://img.icons8.com/?size=100&id=B3GArIks2sS3&format=png&color=000000',
    'Onions': 'https://img.icons8.com/?size=100&id=4hJ0WG08NVR6&format=png&color=000000',
    'Cucumbers': 'https://img.icons8.com/?size=100&id=s1ia2tPy9Y53&format=png&color=000000',
    'Cabbage': 'https://img.icons8.com/?size=100&id=cXQXJRTzBMK8&format=png&color=000000',
    'Carrots': 'https://img.icons8.com/?size=100&id=XAlmnfiT1sh5&format=png&color=000000'
};

function App() {
    const legendSettings: LegendSettingsModel = {
        visible: true,
        template: '<div class="veg-legend-item" style="display:flex;align-items:center;gap:8px;padding:4px 8px;opacity:1;transition:opacity .3s;">' +
            '<img class="e-icon" src="" width="24" height="24" style="object-fit:cover;" />' +
            '<span class="e-label" style="font-size:13px;font-weight:bold;color:;"></span>' +
            '</div>'
    };
    const handleLegendRender = (args: AccLegendRenderEventArgs): void => {
        const points = args.chart?.series[0]?.points;
        const matchedPoint = points?.filter((p: any) => p.x === args.text)[0];
        const opacity = matchedPoint && matchedPoint.visible === false ? '0.3' : '1';

        args.template = args.template
            .replace('opacity:1;', `opacity:${opacity};`)
            .replace('src=""', `src="${legendIcons[args.text] || ''}"`)
            .replace('color:;', `color:${args.fill};`)
            .replace('></span>', `>${args.text}</span>`);
    };

    return <AccumulationChartComponent id='charts' enableBorderOnMouseMove={false} legendSettings={legendSettings} legendRender={handleLegendRender}
        title='Top 5 Vegetables by Global Production (2024)' subTitle='Share of Top 5 Total (500 Million Tonnes)'>
        <Inject services={[PieSeries, Legend]} />
        <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' type='Pie' dataLabel={{ visible: true, format: '{value}%' }} name='Vegetable Production Share' animation={{ enable: false }}>
            </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


