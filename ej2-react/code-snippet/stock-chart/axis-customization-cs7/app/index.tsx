

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel } from'@syncfusion/ej2-react-charts';
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, RangeTooltip, Tooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';

function App() {

    const primaryXAxis: AxisModel= {
            valueType: 'DateTime',
            opposedPosition: true
    };
        return (
            <StockChartComponent id='stockchart'
                primaryXAxis={ primaryXAxis }
                height='350'
            >
                <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,
                    EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
                    AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
                <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective dataSource={chartData} type='Candle' >
                    </StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
            </StockChartComponent>
        )
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


