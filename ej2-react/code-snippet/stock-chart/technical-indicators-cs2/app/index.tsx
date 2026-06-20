


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, LineSeries, SplineSeries,
    AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator, MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator, TmaIndicator,
    IBeforeIndicatorChangeEventArgs, IIndicatorChangedEventArgs
} from '@syncfusion/ej2-react-charts';
import { chartData } from '../datasource';

function App() {
    const primaryXAxis: Object = { valueType: 'DateTime' };
    const tooltip: Object = { enable: true };
    const crosshair: Object = { enable: true };
    const beforeIndicatorChange = (args: IBeforeIndicatorChangeEventArgs): void => {
        console.log('Before Indicator Change:', args.type);
        // Prevent EMA indicator
        if (args.type === 'Ema') {
            args.cancel = true;
        }
    };
    const indicatorChanged = (args: IIndicatorChangedEventArgs): void => {
        console.log(`${args.type} indicator ${args.isAdd ? 'added' : 'removed'}`);
    };
    return (
        <StockChartComponent id='stockchart' title='AAPL Stock Price' primaryXAxis={primaryXAxis} tooltip={tooltip} crosshair={crosshair}
            height='350' beforeIndicatorChange={beforeIndicatorChange} indicatorChanged={indicatorChanged}>
            <Inject services={[ DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, LineSeries, SplineSeries, AccumulationDistributionIndicator, AtrIndicator,
                BollingerBands, EmaIndicator, MomentumIndicator, MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator, TmaIndicator ]} />
            <StockChartSeriesCollectionDirective>
                <StockChartSeriesDirective dataSource={chartData} type='Candle' xName='date' open='open' high='high' low='low'
                    close='close' volume='volume' name='Apple Inc'>
                </StockChartSeriesDirective>
            </StockChartSeriesCollectionDirective>
        </StockChartComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));