

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject,
    DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, Trendlines, StockChartIndicatorsDirective, StockChartIndicatorDirective, LineSeries, SplineSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries
} from '@syncfusion/ej2-react-charts';
import { BollingerBands } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';

function App() {
        const upperline: Object = { color: '#ffb735', width: 1 };
        const lowerline: Object = { color: '#f2ec2f', width: 1 };
        return (
            <StockChartComponent id='stockchart'
                primaryXAxis={{
                    majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true }
                }}
                primaryYAxis={{
                    lineStyle: { color: 'transparent' },
                    majorTickLines: { color: 'transparent', width: 0 }
                }}
                crosshair={{ enable: true }}
                tooltip={{ enable: true }}
                seriesType={[]}
                exportType={[]}
                trendlineType={[]}
                height='350'
            >
                <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, BollingerBands,
                LineSeries, SplineSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries]} />
                <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective dataSource={chartData} type='Candle' name='Apple Inc'
                    bearFillColor='#00226C' bullFillColor="#0450C2" fill='blue'>
                    </StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
                <StockChartIndicatorsDirective>
                    <StockChartIndicatorDirective type='BollingerBands' field='Close' seriesName='Apple Inc' fill='#606eff' xName='date' high='high' low='low' open='open' close='close' period={10} upperLine={upperline} lowerLine={lowerline}>
                    </StockChartIndicatorDirective>
                </StockChartIndicatorsDirective >
            </StockChartComponent>
        )
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



