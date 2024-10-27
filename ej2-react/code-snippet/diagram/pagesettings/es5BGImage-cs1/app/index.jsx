import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'}
    // Defines the pageSettings for the diagram
    pageSettings={{
            orientation: 'Landscape',
            showPageBreaks: true,
            // Defines the background Image source
            background: {
                source: 'https://www.w3schools.com/images/w3schools_green.jpg',
                // Defines the scale values for the background image
                scale: 'Meet',
                // Defines the align values for the background image
                align: 'XMinYMin'
            },
            width: 300,
            height: 300,
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);