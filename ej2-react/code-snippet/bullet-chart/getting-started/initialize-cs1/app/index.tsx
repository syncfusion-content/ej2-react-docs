

import { BulletChartComponent } from "@syncfusion/ej2-react-charts";
import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <BulletChartComponent id="bulletChart" />;
}
export default App;

const root = createRoot(document.getElementById("charts")!);
root.render(<App />);


