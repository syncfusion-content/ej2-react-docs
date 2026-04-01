import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export, StockLegend } from '@syncfusion/ej2-react-charts';
import { chartData } from '../datasource';
const iconMap = {
    'Google': 'https://img.icons8.com/?size=100&id=110580&format=png&color=000000',
    'MicrosoftEdge': 'https://img.icons8.com/?size=100&id=4rcnsWVaR2ja&format=png&color=000000'
};
function App() {
    const primaryXAxis = {
        valueType: 'DateTime',
        majorTickLines: { color: 'transparent', width: 0 }
    };

    const primaryYAxis = {
        lineStyle: { color: 'transparent' },
        majorTickLines: { color: 'transparent', width: 0 }
    };

    const LegendTemplate = (props) => {
        const seriesName = props.series.name;
        const icon = iconMap[seriesName] || '';
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 5, cursor: 'pointer' }}>
                <img
                    src={icon}
                    width={24}
                    height={24}
                    style={{ objectFit: 'contain', borderRadius: 2 }}
                    alt={seriesName}
                />
                <span style={{ fontSize: 13, fontWeight: 500 }}>{seriesName}</span>
            </div>
        );
    };
    const legendSettings = {
        visible: true,
        template: LegendTemplate
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
