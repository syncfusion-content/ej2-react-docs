import { ChartComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return <ChartComponent id='charts'/>;
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);

