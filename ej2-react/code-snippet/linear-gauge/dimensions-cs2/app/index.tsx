
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
export function App() {
  return (
    <LinearGaugeComponent width="100%" height="50%"></LinearGaugeComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}