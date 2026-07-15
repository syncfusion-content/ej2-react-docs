import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent cssClass='dot-size'>
                <ItemsDirective>
                    <ItemDirective content='Ordered' cssClass='x-small' />
                    <ItemDirective content='Shipped' cssClass='small' />
                    <ItemDirective content='Out for Delivery' cssClass='medium' />
                    <ItemDirective content='Delivered' cssClass='large' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);