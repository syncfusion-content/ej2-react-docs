{% raw %}

import { ChartComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import { createRoot } from 'react-dom/client';
function App() {
    return <ChartComponent id='charts'/>;
}
export default App;
createRoot(document.getElementById('charts')).render(<App />);

{% endraw %}