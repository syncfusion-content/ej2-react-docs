

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, CrosshairSettingsModel,TooltipSettingsModel }
from'@syncfusion/ej2-react-charts';
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export, StockLegend } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';

function App() {

    const primaryXAxis: AxisModel= {
            valueType: 'DateTime',
    };
    const crosshair: CrosshairSettingsModel ={ enable: true } ;
    const tooltip: TooltipSettingsModel ={ enable: true } ;
    const legendSettings: LegendSettingsModel = { visible: true, width: '500', height: '50', border: { width: 1, color: 'pink'} };

            return <StockChartComponent id='stockcharts'
                    primaryXAxis={ primaryXAxis }
                    crosshair={crosshair}
                    tooltip={tooltip}
                    legendSettings={legendSettings}
                    indicatorType={[]}
                    trendlineType ={[]}
                    height='350'
                    title='AAPL Stock Price'>
                     <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, StockLegend, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
                      <StockChartSeriesCollectionDirective>
                            <StockChartSeriesDirective dataSource={chartData} type='Candle' name='AAPL'>
                            </StockChartSeriesDirective>
                        </StockChartSeriesCollectionDirective>
                  </StockChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


