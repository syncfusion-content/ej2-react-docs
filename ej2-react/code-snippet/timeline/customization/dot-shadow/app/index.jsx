{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline' style={{ height: "350px" }}>
            <TimelineComponent cssClass='dot-shadow'>
                <ItemsDirective>
                    <ItemDirective content='Ordered' />
                    <ItemDirective content='Shipped' />
                    <ItemDirective content='Delivered' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
