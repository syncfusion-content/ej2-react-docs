import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';

function App() {
    function popupTemplate() {
        return (<div>
            <div className="speeddial-form">
                <p>Here you can customize your code.</p>
            </div>
        </div>);
    }
    return (<div>
        <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
        {/* Initialize the SpeedDial component */}
        <SpeedDialComponent id='speeddial' content="Edit" popupTemplate={popupTemplate} target="#targetElement"></SpeedDialComponent>
    </div>);
}
export default App;
createRoot(document.getElementById('button')).render(<App />);