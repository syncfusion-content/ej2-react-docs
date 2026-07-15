import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent cssClass='custom-connector'>
                <ItemsDirective>
                    <ItemDirective content='Eat' cssClass='state-initial' />
                    <ItemDirective content='Code' cssClass='state-intermediate' />
                    <ItemDirective content='Repeat' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
