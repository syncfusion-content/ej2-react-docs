{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
ReactDOM.render(<LinearGaugeComponent id='gauge' title='linear gauge' titleStyle={{ fontFamily: 'Arial', fontStyle: 'italic', fontWeight: 'regular', color: '#E27F2D', size: '23px' }}>
    </LinearGaugeComponent>, document.getElementById('gauge'));
{% endraw %}