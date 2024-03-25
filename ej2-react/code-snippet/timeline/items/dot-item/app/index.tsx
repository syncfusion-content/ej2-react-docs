{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline' style={{ height: "330px" }}>
            <TimelineComponent>
                <ItemsDirective>
                    <ItemDirective content='Default' />
                    <ItemDirective content='Icon' dotCss='e-icons e-check' />
                    <ItemDirective content='Image' dotCss='custom-image' />
                    <ItemDirective content='Text' dotCss='custom-text' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
