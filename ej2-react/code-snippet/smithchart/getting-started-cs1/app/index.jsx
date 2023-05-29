import * as React from "react";
import * as ReactDOM from "react-dom";
import { SmithchartComponent } from '@syncfusion/ej2-react-charts';
function App() {
    return (<SmithchartComponent id="smithchart"></SmithchartComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('smithchart'));
