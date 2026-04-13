


import * as React from "react";
import * as ReactDOM from "react-dom";
import { Inject, SmithchartComponent, SmithchartLegend, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, TooltipRender } from '@syncfusion/ej2-react-charts';

function App() {
    function load(args: ISmithchartLoadedEventArgs): void {
        args.smithchart.series[0].marker = {
            visible: true,
            height: 10,
            width: 10,
            fill: '#ff99ff',
            opacity: 1,
            shape: 'rectangle',
            border: {
                color: '#cc00cc',
                width: 2
            }
        };
    }

    return ( <SmithchartComponent id='smithchart' load={load.bind(this)}>
                <Inject services={[TooltipRender]} />
                        <SmithchartSeriesCollectionDirective>
                            <SmithchartSeriesDirective
                                points={[
                                    { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                                    { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                                    { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                                    { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                                    { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                                    { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
                                ]} name='Transmission1'
                                >
                            </SmithchartSeriesDirective>
                        </SmithchartSeriesCollectionDirective>
            </SmithchartComponent> );

};
export default App;
ReactDOM.render(<App />, document.getElementById('smithchart'));



