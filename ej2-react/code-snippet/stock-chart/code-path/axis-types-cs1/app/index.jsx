{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, Logarithmic } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';
function App() {
    return (<StockChartComponent id='stockchart' primaryXAxis={{
            valueType: 'DateTime',
        }} primaryYAxis={{
            valueType: 'Logarithmic',
        }} height='350'>
                <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, Logarithmic,
            EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
            AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
                <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective dataSource={chartData} type='Line' xName='date' yName='high'>
                    </StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
            </StockChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}