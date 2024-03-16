{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective, TimelineRenderingEventArgs } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline' style={{ height: "350px" }}>
            <TimelineComponent beforeItemRender={(args: TimelineRenderingEventArgs) => { /* Your required action here */ }}>
                <ItemsDirective>
                    <ItemDirective content='Planning' />
                    <ItemDirective content='Developing' />
                    <ItemDirective content='Testing' />
                    <ItemDirective content='Launch' />
                </ItemsDirective>
            </TimelineComponent>
      </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
