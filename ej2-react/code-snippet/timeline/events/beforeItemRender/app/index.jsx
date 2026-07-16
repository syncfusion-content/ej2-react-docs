import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent beforeItemRender={(args) => { /* Your required action here */ }}>
                <ItemsDirective>
                    <ItemDirective content='Planning' />
                    <ItemDirective content='Developing' />
                    <ItemDirective content='Testing' />
                    <ItemDirective content='Launch' />
                </ItemsDirective>
            </TimelineComponent>
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
