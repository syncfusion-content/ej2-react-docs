import { Chart3DComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return <Chart3DComponent id='charts'/>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
