import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

let node=[{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
}]

let arrange = (args) => {
    if (args.tickInterval % 10 === 0) {
        // Sets the tick length to 25 if the interval is divisible by 10
        args.tickLength = 25;
    } 
};

function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node} rulerSettings={{
            showRulers: true,
            horizontalRuler: {
                segmentWidth: 50,
                orientation: 'Horizontal',
                interval: 10,
                thickness: 50,
                arrangeTick: arrange,
            },
            verticalRuler: {
                segmentWidth: 200,
                interval: 20,
                thickness: 20,
                tickAlignment: 'LeftOrTop',
                markerColor: 'red',
            }}}

        ></DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
