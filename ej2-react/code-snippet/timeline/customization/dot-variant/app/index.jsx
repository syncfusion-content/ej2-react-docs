{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';
import './index.css'

function App() {
    return (
        <div id='timeline' style={{ height: "350px" }}>
            <TimelineComponent cssClass='dot-variant'>
                <ItemsDirective>
                    <ItemDirective content='Filled' cssClass='dot-filled' />
                    <ItemDirective content='Flat' cssClass='dot-flat' />
                    <ItemDirective content='Outlined' cssClass='dot-outlined' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
