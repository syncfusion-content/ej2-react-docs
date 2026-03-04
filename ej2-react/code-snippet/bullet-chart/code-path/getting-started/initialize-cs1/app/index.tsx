{% raw %}

import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return <BulletChartComponent id="bulletChart" />;
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);


{% endraw %}