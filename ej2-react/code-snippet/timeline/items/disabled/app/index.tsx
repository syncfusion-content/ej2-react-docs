{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline' style={{ height: "350px" }}>
            <TimelineComponent>
                <ItemsDirective>
                    <ItemDirective content='Eat' />
                    <ItemDirective content='Code' />
                    <ItemDirective content='Repeat' disabled={true} />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
