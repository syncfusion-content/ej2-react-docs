

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, ITooltipRenderEventArgs, IStockChartEventArgs, ChartTheme,
    DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines
} from '@syncfusion/ej2-react-charts';
import {
    EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator,
    AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';

function App() {

    const primaryXAxis: AxisModel= {
            valueType: 'DateTime',
            majorTickLines : { color : 'blue', width : 5 },
            minorTickLines : {color : 'red',width : 0 }
    };
    const primaryYAxis: AxisModel= {
            majorTickLines : { color : 'green', width : 5 },
            minorTickLines : {color : 'red',width : 0 }
    };

        return (
            <StockChartComponent id='stockchart'
                primaryXAxis={ primaryXAxis }
                primaryYAxis={ primaryYAxis }
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



