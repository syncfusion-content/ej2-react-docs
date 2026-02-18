import { RangeNavigatorComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <RangeNavigatorComponent id="charts"/>;
}

const root = createRoot(document.getElementById("charts"));
root.render(<App />);
