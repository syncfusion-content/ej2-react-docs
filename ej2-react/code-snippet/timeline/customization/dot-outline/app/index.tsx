import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent cssClass='e-outline'>
                <ItemsDirective>
                    <ItemDirective content='Shipped' />
                    <ItemDirective content='Departed' />
                    <ItemDirective content='Arrived' />
                    <ItemDirective content='Out for Delivery' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);