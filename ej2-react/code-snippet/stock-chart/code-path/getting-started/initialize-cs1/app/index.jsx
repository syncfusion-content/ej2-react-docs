{% raw %}

import * as React from "react";
import { createRoot } from "react-dom/client";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from '../datasource';
function App() {
    return (<StockChartComponent id='stockchart' primaryXAxis={{
            valueType: 'DateTime',
            majorGridLines: { width: 0 }, majorTickLines: { color: 'transparent' },
            crosshairTooltip: { enable: true }
        }} primaryYAxis={{
            labelFormat: 'n0',
            lineStyle: { width: 0 }, rangePadding: 'None',
            majorTickLines: { width: 0 }
        }} height='350'>
                <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,
            EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
            AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
                <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective dataSource={chartData} type='Candle'>
                    </StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
            </StockChartComponent>);
}
;
export default App;

const root = createRoot(document.getElementById("charts"));
root.render(<App />);

{% endraw %}
