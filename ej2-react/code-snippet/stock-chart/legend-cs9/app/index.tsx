import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, AxisModel, LegendSettingsModel } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export, StockLegend } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

const iconMap: { [key: string]: string } = {
    'Google': 'https://img.icons8.com/?size=100&id=110580&format=png&color=000000',
    'MicrosoftEdge': 'https://img.icons8.com/?size=100&id=4rcnsWVaR2ja&format=png&color=000000'
};

function App() {
    const primaryXAxis: AxisModel = {
        valueType: 'DateTime',
        majorTickLines: { color: 'transparent', width: 0 }
    };
    const primaryYAxis: AxisModel = {
        lineStyle: { color: 'transparent' },
        majorTickLines: { color: 'transparent', width: 0 }
    };
    const legendSettings: LegendSettingsModel = {
        visible: true,
        template: (data: any): string => {
            const icon = iconMap[data.series.name] || '';
            return '<div style="display:flex;align-items:center;gap:4px;">' +
                '<img src="' + icon + '" width="30" height="30"/>' +
                '<span>' + data.series.name + '</span>' +
                '</div>';
        }
    };
    return <StockChartComponent id='stockcharts' height='455px' primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={legendSettings} indicatorType={[]} trendlineType={[]} title='AAPL Stock Price'>
        <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, StockLegend, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
        <StockChartSeriesCollectionDirective>
            <StockChartSeriesDirective dataSource={chartData} type='Candle' name='Google'>
            </StockChartSeriesDirective>
            <StockChartSeriesDirective dataSource={chartData} type='Candle' name='MicrosoftEdge'>
            </StockChartSeriesDirective>
        </StockChartSeriesCollectionDirective>
    </StockChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
