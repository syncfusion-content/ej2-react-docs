{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline' style={{ height: "330px" }}>
            <TimelineComponent cssClass='dot-size'>
                <ItemsDirective>
                    <ItemDirective content='Ordered' cssClass='x-small' />
                    <ItemDirective content='Shipped' cssClass='small' />
                    <ItemDirective content='Delivered' cssClass='medium' />
                    <ItemDirective content='Delivered' cssClass='large' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
