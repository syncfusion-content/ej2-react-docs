{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline' style={{ height: "330px" }}>
            <TimelineComponent align='Alternate'>
                <ItemsDirective>
                    <ItemDirective content='ReactJs' oppositeContent='Owned by Facebook'  />
                    <ItemDirective content='Angular' oppositeContent='Owned by Google'  />
                    <ItemDirective content='VueJs' oppositeContent='Owned by Evan you'  />
                    <ItemDirective content='Svelte' oppositeContent='Owned by Rich Harris' />
                </ItemsDirective>
            </TimelineComponent>
      </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
