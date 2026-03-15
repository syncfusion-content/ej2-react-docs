import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, LegendSettingsModel, ChartSeriesType, Legend, Category, ColumnSeries, Tooltip, DataLabel, ILegendRenderEventArgs } from '@syncfusion/ej2-react-charts';
import { chinaData, indiaData, indonesiaData } from './datasource';

const legendIcons: { [key: string]: string } = {
    'China': 'https://img.icons8.com/color/100/china.png',
    'India': 'https://img.icons8.com/color/100/india.png',
    'Indonesia': 'https://img.icons8.com/color/100/indonesia.png'
};

function App() {

  const primaryxAxis: AxisModel = { interval: 1, edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 } };
  const primaryyAxis: AxisModel = { title: 'Coal Production (Million Tonnes)', labelFormat: '{value}t' };
  const chartArea: any = { border: { width: 0 } };
  const legendSettings: LegendSettingsModel = {
    visible: true,
    template: '<div class="coal-legend-item" style="display:flex;align-items:center;gap:8px;padding:4px 8px;opacity:1;transition:opacity .3s;cursor:pointer;">' +
      '<img class="e-icon" src="" width="24" height="24" style="border-radius:4px;object-fit:cover;" />' +
      '<span class="e-label" style="font-size:13px;font-weight:bold;color:;"></span>' +
      '</div>'
  };
  const handleLegendRender = (args: ILegendRenderEventArgs): void => {
    const matchedSeries = args.chart?.series?.filter((s: any) => s.name === args.text)[0];
    const opacity = matchedSeries && matchedSeries.visible === false ? '0.5' : '1';
    args.template = args.template
      .replace('opacity:1;', `opacity:${opacity};`)
      .replace('src=""', `src="${legendIcons[args.text] || ''}"`)
      .replace('color:;', `color:${args.fill};`)
      .replace('></span>', `>${args.text}</span>`);
  };
  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    chartArea={chartArea}
    legendSettings={legendSettings}
    legendRender={handleLegendRender}
    tooltip={{ enable: true }}
    title='Top 3 Countries by Coal Production (2022–2024)'>
    <Inject services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={chinaData} xName='x' yName='y' name='China' type='Column' animation={{ enable: false }} marker={{ dataLabel: { visible: true } }}>
      </SeriesDirective>
      <SeriesDirective dataSource={indiaData} xName='x' yName='y' name='India' type='Column' animation={{ enable: false }} marker={{ dataLabel: { visible: true } }}>
      </SeriesDirective>
      <SeriesDirective dataSource={indonesiaData} xName='x' yName='y' name='Indonesia' type='Column' animation={{ enable: false }} marker={{ dataLabel: { visible: true } }}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


