import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent orientation='Vertical'>
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
const root = ReactDOM.createRoot(
  document.getElementById('element')
);
root.render(<App />);