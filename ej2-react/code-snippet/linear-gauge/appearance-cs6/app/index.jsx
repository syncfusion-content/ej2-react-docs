{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
ReactDOM.render(<LinearGaugeComponent allowMargin={false} id='gauge' height="100%" width="100%" orientation='Horizontal' margin={{ left: 0, right: 0, top: 0, bottom: 0 }} border={{ width: 2, color: "red" }}>
    </LinearGaugeComponent>, document.getElementById('gauge'));
{% endraw %}