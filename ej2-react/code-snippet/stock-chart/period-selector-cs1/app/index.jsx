{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';
function App() {
    const primaryxAxis = {
        valueType: 'DateTime',
        majorGridLines: { width: 0 },
        majorTickLines: { color: 'transparent' }
    };
    const primaryyAxis = {
        labelFormat: 'n0',
        majorTickLines: { width: 0 }
    };
    const crosshair = { enable: true };
    const periodselector = [
        { text: '1M', interval: 1, intervalType: 'Months' },
        { text: '3M', interval: 3, intervalType: 'Months' },
        { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
        { text: '1Y', interval: 1, intervalType: 'Years' },
        { text: '2Y', interval: 2, intervalType: 'Years', selected: true }, { text: 'All' }
    ];
    return <StockChartComponent id='stockcharts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} crosshair={crosshair} periods={periodselector} height='350' title='AAPL Stock Price'>
                     <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
                      <StockChartSeriesCollectionDirective>
                            <StockChartSeriesDirective dataSource={chartData} type='Candle' animation={{ enable: true }}>
                            </StockChartSeriesDirective>
                        </StockChartSeriesCollectionDirective>
                  </StockChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}