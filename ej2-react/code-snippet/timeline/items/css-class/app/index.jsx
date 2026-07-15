import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';


function App() {
    return (
        <div id='timeline'>
            <TimelineComponent>
                <ItemsDirective>
                    <ItemDirective content='Shipped' cssClass='shipped' />
                    <ItemDirective content='Departed' cssClass='departed' />
                    <ItemDirective content='Arrived' cssClass='arrived' />
                    <ItemDirective content='Out for Delivery' cssClass='out-for-delivery' />
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
