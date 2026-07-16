import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent cssClass='dot-variant'>
                <ItemsDirective>
                    <ItemDirective content='Filled' cssClass='dot-filled' />
                    <ItemDirective content='Flat' cssClass='dot-flat' />
                    <ItemDirective content='Outlined' cssClass='dot-outlined' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);