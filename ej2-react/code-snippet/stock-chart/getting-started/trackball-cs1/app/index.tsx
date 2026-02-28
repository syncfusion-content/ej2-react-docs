


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
import { trackData } from '../datasource';

function App() {

        return (
            <StockChartComponent id='stockchart'
                primaryXAxis={{
                    valueType: 'DateTime',
                }}
                height='350'
                title= 'Sales Analysis'
                tooltip={{ enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}'}}
                crosshair={{ enable: true, lineType: 'Vertical' }}
            >
                <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,
                    EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
                    AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
                <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective dataSource={trackData} xName='x' yName='y' name='John' type='Line' width={2} marker={{ visible: true }}>
                    </StockChartSeriesDirective>
                    <StockChartSeriesDirective dataSource={trackData} xName='x' yName='y1' name='Andrew' type='Line' width={2} marker={{ visible: true }}></StockChartSeriesDirective>
                    <StockChartSeriesDirective dataSource={trackData} xName='x' yName='y2' name='Thomas' type='Line' width={2} marker={{ visible: true }}></StockChartSeriesDirective>
                    <StockChartSeriesDirective dataSource={trackData} xName='x' yName='y3' name='Mark' type='Line' width={2} marker={{ visible: true }}></StockChartSeriesDirective>
                    <StockChartSeriesDirective dataSource={trackData} xName='x' yName='y4' name='William' type='Line' width={2} marker={{ visible: true }}></StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
            </StockChartComponent>
        )
};
export default App;

const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);


