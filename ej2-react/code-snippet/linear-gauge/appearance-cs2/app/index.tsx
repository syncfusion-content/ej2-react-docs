{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    return(
    <LinearGaugeComponent title='linear gauge'
        titleStyle={ { fontFamily:'Arial', fontStyle:'italic', fontWeight:'regular', color:'#E27F2D', size:'23px' } }>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}