{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, Tooltip } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export, StockChartAxesDirective, StockChartAxisDirective } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';
function App() {
    const primaryxAxis = {
        valueType: 'DateTime',
        majorGridLines: { width: 0 }
    };
    const primaryyAxis = {
        majorTickLines: { width: 0 }
    };
    return (<StockChartComponent id='stockcharts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Multiple Axis' height='350'>
                     <Inject services={[DateTime, RangeTooltip, Tooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
                      <StockChartAxesDirective>
                        <StockChartAxisDirective rowIndex={0} name='yAxis1'>
                        </StockChartAxisDirective>
                      </StockChartAxesDirective>
                      <StockChartSeriesCollectionDirective>
                            <StockChartSeriesDirective dataSource={chartData} type='Line' xName='date' yName='high' animation={{ enable: true }}>
                            </StockChartSeriesDirective>
                             <StockChartSeriesDirective dataSource={chartData} yAxisName='yAxis1' type='Line' animation={{ enable: true }} xName='date' yName='low'>
                            </StockChartSeriesDirective>
                        </StockChartSeriesCollectionDirective>
                  </StockChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}