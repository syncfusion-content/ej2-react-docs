{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline' style={{ height: "330px" }}>
            <TimelineComponent cssClass='custom-connector'>
                <ItemsDirective>
                    <ItemDirective content='Eat' cssClass='state-initial' />
                    <ItemDirective content='Code' cssClass='state-intermediate' />
                    <ItemDirective content='Repeat' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
