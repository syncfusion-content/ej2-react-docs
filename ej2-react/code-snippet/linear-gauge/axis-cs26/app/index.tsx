
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, ILoadedEventArgs } from '@syncfusion/ej2-react-lineargauge';

export function App() {
    function loaded(args: ILoadedEventArgs){
    }
    return (<div>
    <LinearGaugeComponent loaded={loaded}>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}


