{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';
import './index.css'

function App() {
    return (
        <div id='timeline' style={{ height: "350px" }}>
            <TimelineComponent cssClass='e-outline'>
                <ItemsDirective>
                    <ItemDirective content='Shipped' />
                    <ItemDirective content='Departed' />
                    <ItemDirective content='Arrived' />
                    <ItemDirective content='Out for Delivery' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
