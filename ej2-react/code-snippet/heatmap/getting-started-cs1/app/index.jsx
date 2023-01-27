import * as React from "react";
import * as ReactDOM from "react-dom";
import { HeatMapComponent } from '@syncfusion/ej2-react-heatmap';
export function App() {
    return (<HeatMapComponent id='heatmap'></HeatMapComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('heatmap'));
root.render(<App />);
