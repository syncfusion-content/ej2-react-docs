import * as React from "react";
import * as ReactDOM from "react-dom";
import { SmithchartComponent } from '@syncfusion/ej2-react-charts';

function App() {
    return (<SmithchartComponent id="smithchart"></SmithchartComponent>);
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('smithchart'));
root.render(<App />);
