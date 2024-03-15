{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent orientation='Horizontal'>
                <ItemsDirective>
                    <ItemDirective content='Day 1, 4:00 PM' oppositeContent='Check-in and campsite visit' />
                    <ItemDirective content='Day 1, 7:00 PM' oppositeContent='Dinner with music' />
                    <ItemDirective content='Day 2, 5:30 AM' oppositeContent='Sunrise between mountains' />
                    <ItemDirective content='Day 2, 8:00 AM' oppositeContent='Breakfast and check-out' />
                </ItemsDirective>
            </TimelineComponent>
      </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
