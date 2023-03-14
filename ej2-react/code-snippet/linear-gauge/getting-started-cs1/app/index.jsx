{% raw %}
import React from 'react';
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';

export function App() {
   return (<LinearGaugeComponent title='Linear Gauge'></LinearGaugeComponent>);
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}