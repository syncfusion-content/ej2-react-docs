import * as React from "react";
import * as ReactDOM from "react-dom";
import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, ILoadedEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
    const [chartData, setChartData] = React.useState([]);
    let chartInstance = React.useRef<ChartComponent>(null);
    const buttonContainerRef = React.useRef(null);
    const [hasData, setHasData] = React.useState(false);
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
    // Sample data that will be loaded when button is clicked
    const sampleData = [
        { x: 'January', y: 19173 },
        { x: 'February', y: 17726 },
        { x: 'March', y: 19874 },
        { x: 'April', y: 19391 },
        { x: 'May', y: 20072 },
        { x: 'June', y: 19233 }
    ];
        useEffect(() => {
        if (hasData) {
            const buttonContainer = document.getElementById("syncfusionButtonContainer");
            if (buttonContainer) {
                ReactDOM.unmountComponentAtNode(buttonContainer);
            }
        }
    }, [hasData]);
    
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
        if (chartInstance.current) {
            chartInstance.current.series[0].dataSource = sampleData;
            setHasData(true);
            chartInstance.current.series[0].animation.enable = true;
            chartInstance.current.refresh();
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
                <ChartComponent 
                    id='chart'
                    ref={chartInstance}
                   primaryXAxis={{ valueType: 'Category', 
                        majorGridLines: {
                            width: 0
                        },
                        majorTickLines: {
                            width: 0
                        }, 
                    }}
                    chartArea={{border: {width: 0}}}
                    primaryYAxis={{
                        title: 'Production (in million pounds)',
                        titleStyle: {
                            fontWeight: '600'
                        },
                        majorTickLines: {
                            width: 0
                        },
                        lineStyle: {
                            width: 0
                        }
                    }} loaded={loadedChartData} noDataTemplate={noDataTemplate} title="Milk Production in US - 2025" subTitle="Source: nass.usda.gov">
                    <Inject services={[ColumnSeries, Category]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective 
                            dataSource={hasData ? sampleData : []}
                            xName='x' 
                            yName='y' 
                            type='Column' />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
