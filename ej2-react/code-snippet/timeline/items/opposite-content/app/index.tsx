import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
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
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);