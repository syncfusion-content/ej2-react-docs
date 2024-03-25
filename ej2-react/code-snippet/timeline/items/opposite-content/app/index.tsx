{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline' style={{ height: "330px" }}>
            <TimelineComponent>
                <ItemsDirective>
                    <ItemDirective content='Breakfast' oppositeContent='8:00 AM' />
                    <ItemDirective content='Lunch' oppositeContent='1:00 PM' />
                    <ItemDirective content='Dinner' oppositeContent='8:00 PM' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
