{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTimeCategory, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, Logarithmic } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { series2 } from 'datasource.ts';
function App() {
    const primaryxAxis = {
        valueType: 'DateTimeCategory',
        majorGridLines: { width: 0 },
        crosshairTooltip: { enable: true }
    };
    const crosshair = { enable: true };
    const tooltip = {
        enable: true,
        header: 'AAPL Stock Price'
    };
    return (<StockChartComponent id='stockchart'
        primaryXAxis={primaryxAxis}
        crosshair={crosshair}
        tooltip={tooltip}
        height='350'>
        <Inject services={[DateTimeCategory, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, Logarithmic,
            EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
            AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
        <StockChartSeriesCollectionDirective>
            <StockChartSeriesDirective dataSource={series2} type='Line' xName='x' yName='y'>
            </StockChartSeriesDirective>
        </StockChartSeriesCollectionDirective>
    </StockChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}