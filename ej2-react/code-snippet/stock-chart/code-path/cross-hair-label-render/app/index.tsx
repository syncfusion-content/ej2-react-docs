{% raw %}

import { StockChartComponent, Inject, LineSeries, Crosshair, DateTime, type ICrosshairLabelRenderEventArgs, AccumulationDistributionIndicator, AtrIndicator, BollingerBands, CandleSeries, EmaIndicator, Export, HiloOpenCloseSeries, HiloSeries, load, MacdIndicator, MomentumIndicator, RangeAreaSeries, RangeTooltip, RsiIndicator, SmaIndicator, SplineAreaSeries, SplineSeries, StochasticIndicator, StockChartSeriesCollectionDirective, StockChartSeriesDirective, TmaIndicator, Trendlines } from '@syncfusion/ej2-react-charts';
import { stockData1 } from './datasource';
import type { JSX } from 'react';


function App(): JSX.Element {
    const crosshairLabelRender = (args: ICrosshairLabelRenderEventArgs) => {
        if (args.axisName === 'primaryXAxis') {
            const date = args.value instanceof Date ? args.value : new Date(args.text);
            args.text = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
        }
        if (args.axisName === 'primaryYAxis') {
            const price = typeof args.value === 'number' ? args.value : Number(args.text);
            args.text = '₹' + price.toLocaleString('en-IN', { maximumFractionDigits: 0 });
            if (price > 310) {
                args.textStyle.color = '#d32f2f';
                args.fill = '#ffebee';
            }
        }
    };

    return <StockChartComponent
        id='stockchartsplinearea' primaryXAxis={{ valueType: 'DateTime', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } }} primaryYAxis={{ lineStyle: { color: 'transparent' }, majorTickLines: { color: 'transparent', height: 0 }, crosshairTooltip: { enable: true } }} seriesType={[]} indicatorType={[]} chartArea={{ border: { width: 0 } }} crosshair={{ enable: true, lineType: 'Both' }} crosshairLabelRender={crosshairLabelRender}>
        <Inject services={[DateTime, SplineAreaSeries, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
        <StockChartSeriesCollectionDirective>
            <StockChartSeriesDirective dataSource={stockData1} xName='x' yName='high' type='SplineArea' opacity={0.5} >
            </StockChartSeriesDirective>
        </StockChartSeriesCollectionDirective>
    </StockChartComponent>;
}

export default App;

ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}