

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccLegendRenderEventArgs, PieSeries, Inject, AccumulationDataLabel, AccumulationTooltip, Legend, LegendSettingsModel } from '@syncfusion/ej2-react-charts';
import { StatisticsDetails } from './datasource';

function App() {
    const legendSettings: LegendSettingsModel = {
        visible: true,
        template: '<div style="display:flex; align-items:center; gap:8px; padding:4px 0; line-height:1.1;">' +
            '<div style="display:flex; flex-direction:column;">' +
            '<span style="font-weight:800; font-size:14px; color:{{color}};">{{browser}}</span>' +
            '<span style="font-size:12px; opacity:0.85;">{{info}}</span>' +
            '</div>' +
            '</div>'
    };
    const handleLegendRender = (args: any): void => {
        const browser = args.text;
        const dataPoint = StatisticsDetails.find((item: any) => item.Browser === browser);
        const users = dataPoint?.Users || 0;
        const color = args.fill;
        args.template = (legendSettings.template as string)
            .replace('{{color}}', color)
            .replace('{{browser}}', browser)
            .replace('{{info}}', `<b>${users} million</b> people use ${browser}`);
    };

    return <AccumulationChartComponent id='charts' title='Mobile Browser Statistics' legendSettings={legendSettings} legendRender={handleLegendRender} tooltip={{ enable: true }}>
        <Inject services={[PieSeries, AccumulationDataLabel, AccumulationTooltip, Legend]} />
        <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={StatisticsDetails} xName='Browser' yName='Users' type='Pie' pointColorMapping='Color' dataLabel={{ visible: true, format: '{value}M', position: 'Outside' }}>
            </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
