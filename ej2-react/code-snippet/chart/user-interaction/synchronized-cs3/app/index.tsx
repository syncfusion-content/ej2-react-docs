{% raw %}


import * as ReactDOM from "react-dom";
import { Chart, SplineAreaSeries, LineSeries, DateTime, Zoom, IZoomCompleteEventArgs, Selection, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject } from '@syncfusion/ej2-react-charts';
import { synchronizedData } from 'datasource.ts';
import React, { useEffect } from 'react';
import { Browser } from '@syncfusion/ej2-base';


function App() {

    let chart1: ChartComponent;
    let chart2: ChartComponent;

    let charts: ChartComponent[] = [];
    useEffect(() => {
        charts = [chart1, chart2];
    }, []);
    let zoomFactor: number = 0;
    let zoomPosition: number = 0;

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
    }

    return <div className="control-section">
        <div className="row">
            <div className="col">
                <ChartComponent
                    id="container1"
                    ref={chart => chart1 = chart}
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
                        enableMouseWheelZooming: true,
                        enablePinchZooming: true,
                        enableScrollbar: false,
                        enableDeferredZooming: false,
                        enableSelectionZooming: true,
                        enablePan: true,
                        mode: 'X',
                        toolbarItems: ['Pan', 'Reset']
                    }}
                    zoomComplete={zoomComplete.bind(this)}
                    titleStyle={{ textAlignment: 'Near' }}
                    title="US to Euro">
                    <Inject services={[LineSeries, DateTime, Zoom, Selection]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective type="Line" dataSource={synchronizedData} xName="USD" yName="EUR" width={2} emptyPointSettings={{ mode: 'Drop' }}></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
            <div className="col">
                <ChartComponent
                    id="container2"
                    ref={chart => chart2 = chart}
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
                        enableMouseWheelZooming: true,
                        enablePinchZooming: true,
                        enableScrollbar: false,
                        enableDeferredZooming: false,
                        enableSelectionZooming: true,
                        enablePan: true,
                        mode: 'X',
                        toolbarItems: ['Pan', 'Reset']
                    }}
                    zoomComplete={zoomComplete.bind(this)}
                    titleStyle={{ textAlignment: 'Near' }}
                    title="US to INR">
                    <Inject services={[SplineAreaSeries, DateTime, Zoom, Selection]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective type="SplineArea" dataSource={synchronizedData} xName="USD" yName="INR" opacity={0.6} width={2} border={{ width: 2 }}></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    </div>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}