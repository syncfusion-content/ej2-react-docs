import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent>
                <ItemsDirective>
                    <ItemDirective content='Default' />
                    <ItemDirective content='Icon' dotCss='e-icons e-check' />
                    <ItemDirective content='Image' dotCss='custom-image' />
                    <ItemDirective content='Text' dotCss='custom-text' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);