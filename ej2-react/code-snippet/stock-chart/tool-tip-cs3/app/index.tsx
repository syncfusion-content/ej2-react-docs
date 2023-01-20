

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, CrosshairSettingsModel,TooltipSettingsModel }
from'@syncfusion/ej2-react-charts';
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';

function App() {

    const primaryxAxis: AxisModel= {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            majorTickLines: { color: 'transparent' }
    };
    const primaryyAxis: AxisModel= {
            labelFormat: 'n0',
            majorTickLines: { width: 0 }
    };
    const crosshair: CrosshairSettingsModel ={ enable: true } ;
    const tooltip: TooltipSettingsModel ={
            enable: true,
            format: ' ${point.x} : ${point.y}',
            fill: '#7bb4eb',
            border: {width: 2, color: 'grey'}
        } ;

            return <StockChartComponent id='stockcharts'
                    primaryXAxis={ primaryxAxis }
                    primaryYAxis={ primaryyAxis }
                    crosshair={crosshair}
                    tooltip={tooltip}
                    height='350'
                    title='AAPL Stock Price'>
                     <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,       AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
                      <StockChartSeriesCollectionDirective>
                            <StockChartSeriesDirective dataSource={chartData} xName='date' type='Candle' animation={{ enable: true }}>
                            </StockChartSeriesDirective>
                        </StockChartSeriesCollectionDirective>
                  </StockChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



