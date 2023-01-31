{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent id='circulargauge' title= 'Speedometer'
    titleStyle= {{
        color: '#27d5ff'
    }}>
  </CircularGaugeComponent>);
  const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
  root.render(<App />);

}




{% endraw %}