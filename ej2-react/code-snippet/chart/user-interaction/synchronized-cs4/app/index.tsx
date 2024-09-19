{% raw %}


import * as ReactDOM from "react-dom";
import { Chart, SplineSeries, LineSeries, DateTime, Zoom, IZoomCompleteEventArgs, Selection, ISelectionCompleteEventArgs, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject } from '@syncfusion/ej2-react-charts';
import { synchronizedData } from './datasource';
import * as React from "react";
import { Browser } from '@syncfusion/ej2-base';

function App() {

    let chart1 = React.useRef<ChartComponent>(null);
    let chart2 = React.useRef<ChartComponent>(null);

    let charts: ChartComponent[] = [];
    React.useEffect(() => {
        charts = [chart1.current, chart2.current];
    }, []);
    let zoomFactor: number = 0;
    let zoomPosition: number = 0;
    let count: number = 0;

    let zoomComplete = (args: IZoomCompleteEventArgs): void => {
        if (args.axis.name === 'primaryXAxis') {
            zoomFactor = args.currentZoomFactor;
            zoomPosition = args.currentZoomPosition;
            zoomCompleteFunction(args);
        }
    };

    let zoomCompleteFunction = (args: IZoomCompleteEventArgs): void => {
        for (let i: number = 0; i < charts.length; i++) {
            if (args.axis.series[0].chart.element.id !== charts[i].element.id) {
                charts[i].primaryXAxis.zoomFactor = zoomFactor;
                charts[i].primaryXAxis.zoomPosition = zoomPosition;
                charts[i].zoomModule.isZoomed = args.axis.series[0].chart.zoomModule.isZoomed;
                charts[i].zoomModule.isPanning = args.axis.series[0].chart.zoomModule.isPanning;
            }
        }
    };

    let selectionComplete = (args: ISelectionCompleteEventArgs): void => {
        selectionCompleteFunction(args);
    };

    let selectionCompleteFunction = (args: ISelectionCompleteEventArgs): void => {
        if (count == 0) {
            for (var j = 0; j < args.selectedDataValues.length; j++) {
                args.selectedDataValues[j].point = args.selectedDataValues[j].pointIndex;
                args.selectedDataValues[j].series = args.selectedDataValues[j].seriesIndex;
            }
            for (var i = 0; i < charts.length; i++) {
                if (args.chart.element.id !== charts[i].element.id) {
                    charts[i].selectedDataIndexes = args.selectedDataValues;
                    count += 1;
                    charts[i].dataBind();
                }
            }
            count = 0;
        }
    };

    return <div className="control-section">
        <div className="row">
            <div className="col">
                <ChartComponent
                    id="container1"
                    ref={chart1}
                    primaryXAxis={{
                        minimum: new Date(2023, 1, 18),
                        maximum: new Date(2023, 7, 18),
                        valueType: 'DateTime',
                        labelFormat: 'MMM d',
                        lineStyle: { width: 0 },
                        majorGridLines: { width: 0 },
                        edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
                        labelRotation: Browser.isDevice ? -45 : 0,
                        interval: Browser.isDevice ? 2 : 1
                    }}
                    primaryYAxis={{
                        labelFormat: 'n2',
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 },
                        minimum: 0.86,
                        maximum: 0.96,
                        interval: 0.025
                    }}
                    chartArea={{ border: { width: 0 } }}
                    zoomSettings={{
                        enableSelectionZooming: true,
                        mode: 'X'
                    }}
                    zoomComplete={zoomComplete.bind(this)}
                    selectionComplete={selectionComplete.bind(this)}
                    titleStyle={{ textAlignment: 'Near' }}
                    title="US to Euro"
                    selectionMode='Point'
                    selectionPattern='Box'>
                    <Inject services={[LineSeries, DateTime, Zoom, Selection]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective type="Line" dataSource={synchronizedData} xName="USD" yName="EUR" width={2} emptyPointSettings={{ mode: 'Drop' }}></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
            <div className="col">
                <ChartComponent
                    id="container2"
                    ref={chart2}
                    primaryXAxis={{
                        minimum: new Date(2023, 1, 18),
                        maximum: new Date(2023, 7, 18),
                        valueType: 'DateTime',
                        labelFormat: 'MMM d',
                        lineStyle: { width: 0 },
                        majorGridLines: { width: 0 },
                        edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
                        labelRotation: Browser.isDevice ? -45 : 0,
                        interval: Browser.isDevice ? 2 : 1
                    }}
                    primaryYAxis={{
                        labelFormat: 'n1',
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 },
                        minimum: 79,
                        maximum: 85,
                        interval: 1.5
                    }}
                    chartArea={{ border: { width: 0 } }}
                    zoomSettings={{
                        enableSelectionZooming: true,
                        mode: 'X'
                    }}
                    zoomComplete={zoomComplete.bind(this)}
                    selectionComplete={selectionComplete.bind(this)}
                    titleStyle={{ textAlignment: 'Near' }}
                    title="US to INR"
                    selectionMode='Point'
                    selectionPattern='Box'>
                    <Inject services={[SplineSeries, DateTime, Zoom, Selection]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective type="Spline" dataSource={synchronizedData} xName="USD" yName="INR" width={2} border={{ width: 2 }}></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    </div>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}