{% raw %}
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { SmithchartComponent } from '@syncfusion/ej2-react-charts';

function App() {
    return (<SmithchartComponent id="smithchart"></SmithchartComponent>);
}
export default App;
createRoot(document.getElementById('smithchart')).render(<App />);
{% endraw %}
