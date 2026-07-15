import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent cssClass='dot-color'>
                <ItemsDirective>
                    <ItemDirective content='Ordered' cssClass='state-completed' />
                    <ItemDirective content='Shipped' cssClass='state-progress' />
                    <ItemDirective content='Delivered' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);