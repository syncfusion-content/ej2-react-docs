{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';
function App() {
    return (<StockChartComponent id='stockchart' primaryXAxis={{
            valueType: 'DateTime',
            majorGridLines: { width: 0 }, majorTickLines: { color: 'transparent' },
            crosshairTooltip: { enable: true }
        }} primaryYAxis={{
            labelFormat: 'n0',
            lineStyle: { width: 0 }, rangePadding: 'None',
            majorTickLines: { width: 0 }
<<<<<<<< HEAD:ej2-react/code-snippet/stock-chart/code-path/chart-dimensions-cs3/app/index.jsx
        }} title='Sales Analysis' height='90%' width='80%'>
========
        }} title='Sales Analysis' height='350' width='650'>
>>>>>>>> remotes/origin/Resolve-2026-vol1-Main-release-dev-to-master-branch-merging-conflicts:ej2-react/code-snippet/stock-chart/code-path/chart-dimensions-cs2/app/index.jsx
                <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,
            EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
            AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
                <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective dataSource={chartData} type='Candle' animation={{ enable: true }}>
                    </StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
            </StockChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}