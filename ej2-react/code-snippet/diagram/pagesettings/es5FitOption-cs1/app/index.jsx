
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let node = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 200,
        offsetY: 200,
        annotations: [{ content: 'Node fits at the center of view port' }],
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node}
    // Defines the pageSettings for the diagram
    pageSettings={{
        width: 500,
        height: 500,
        background: { color: 'grey' },
        fitOptions: {
          // Fits the content to the center of the viewport
          canFit: true,
          // Allows zooming in to fit smaller content
          canZoomIn: true,
          // Specifies the region to fit to the center
          region: 'Content',
          // Specifies the mode of fitOptions
          mode: 'Page',
          // Defines the margin around the fitted content
          margin: { left: 50, right: 50, top: 50, bottom: 50 },
        }
    }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
