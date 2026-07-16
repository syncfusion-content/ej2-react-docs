import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    const orderStatus = [
        'Ordered \n 9:15 AM, January 1, 2024',
        'Shipped \n 12:20 PM, January 4, 2024',
        'Out for delivery \n 07:00 AM, January 8, 2024',
        'Delivered \n Estimated delivery by 09:20 AM'
    ];
    return (
        <div id="timeline">
            <TimelineComponent>
                <ItemsDirective>
                    <ItemDirective content={orderStatus[0]} dotCss='state-success' cssClass='completed'/>
                    <ItemDirective content={orderStatus[1]} dotCss='state-success' cssClass='completed'/>
                    <ItemDirective content={orderStatus[2]} dotCss='state-progress' cssClass='intermediate'/>
                    <ItemDirective content={orderStatus[3]}/>
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
