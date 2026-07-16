import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';

function App() {
    return (
        <div id='timeline'>
            <TimelineComponent align='AlternateReverse'>
                <ItemsDirective>
                    <ItemDirective content='ReactJs' oppositeContent='Owned by Facebook'  />
                    <ItemDirective content='Angular' oppositeContent='Owned by Google'  />
                    <ItemDirective content='VueJs' oppositeContent='Owned by Evan You'  />
                    <ItemDirective content='Svelte' oppositeContent='Owned by Rich Harris' />
                </ItemsDirective>
            </TimelineComponent>
      </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
