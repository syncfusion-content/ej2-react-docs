{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useEffect, useRef, useState } from 'react'; import { createRoot } from 'react-dom/client';
import {
    StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, ITooltipRenderEventArgs, IStockChartEventArgs, ChartTheme,
    DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines
} from '@syncfusion/ej2-react-charts';
import {
    EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator,
    AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from '@syncfusion/ej2-react-charts';
import { chartData } from '../datasource.ts';

function App() {
    const [hasData, setHasData] = React.useState(false);
    var chart: StockChartComponent | null;
    React.useEffect(() => {
        if (hasData) {
            const buttonContainer = document.getElementById("syncfusionButtonContainer");
            if (buttonContainer) {
                ReactDOM.unmountComponentAtNode(buttonContainer);
            }
        }
    }, [hasData]);
    const SAMPLE_CSS = `
        #noDataTemplateContainer {
            height: inherit;
            width: inherit;
        }
        .light-bg {
            background-color: #fafafa;
            color: #000000;
        }

        .template-align img {
            max-width: 150px;
            /* Adjust size as needed */
            max-height: 150px;
            margin-top: 55px;
        }

        .load-data-btn {
            border-radius: 4px;
        }

        .template-align {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex-direction: column;
        }

        #syncfusionButtonContainer {
            margin-top: 5px;
        }`;
    const noDataTemplate = `
          <div id="noDataTemplateContainer" class="light-bg">
              <div class="template-align">
                  <img src="no-data.png" alt="No Data"/>
              </div>
              <div class="template-align">
                  <p style="font-size: 15px; margin: 10px 0 10px;"><strong>No data available to display.</strong></p>
              </div>
              <div class="template-align">
                  <div id="syncfusionButtonContainer"></div>
              </div>
          </div>
      `;

    // Function to load data when button is clicked
    const loadData = () => {
        if (chart) {
            (chart as StockChartComponent).series[0].dataSource = chartData;
        }
    };
    // Function to load data when button is clicked
    const loadedChartData = () => {
        if (!hasData) {
            const buttonContainer = document.getElementById("syncfusionButtonContainer");
            if (buttonContainer && !buttonContainer.hasChildNodes()) {
                // Create the button element using React.createElement
                const buttonElement = React.createElement(ButtonComponent, {
                    id: "loadDataButton",
                    content: "Load Data",
                    iconCss: "e-icons e-refresh",
                    cssClass: "load-data-btn e-outline",
                    isPrimary: false,
                    onClick: loadData
                });

                const root = createRoot(buttonContainer);
                root.render(buttonElement);
            }
        }
    };
    return (
        <div>
            {/* Custom No Data Template with Button */}
            <style>{SAMPLE_CSS}</style>

            {/* Chart Component */}
            <div id="chart-container">
                <StockChartComponent id='stockchart' ref={g => chart = g} loaded={loadedChartData} noDataTemplate={noDataTemplate}
                    primaryXAxis={{
                        valueType: 'DateTime',
                        majorGridLines: { width: 0 }, majorTickLines: { color: 'transparent' },
                        crosshairTooltip: { enable: true }
                    }}
                    primaryYAxis={{
                        labelFormat: 'n0',
                        lineStyle: { width: 0 }, rangePadding: 'None',
                        majorTickLines: { width: 0 }
                    }}
                    title='Sales Analysis'
                    bearFillColor='#2ecd71'
                    bullFillColor='#e74c3d'
                    height='350'
                >
                    <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,
                        EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
                        AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
                    <StockChartSeriesCollectionDirective>
                        <StockChartSeriesDirective type='Candle' animation={{ enable: true }}>
                        </StockChartSeriesDirective>
                    </StockChartSeriesCollectionDirective>
                </StockChartComponent>
            </div>
        </div>

    )
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}