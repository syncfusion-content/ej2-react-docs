
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import * as React from "react";
import { createRoot } from 'react-dom/client';

function App() {
    return (<ProgressBarComponent id="linear" type='Linear' height='60' value={40} animation={{
            enable: true,
            duration: 2000,
            delay: 0
        }}>
         </ProgressBarComponent>);
}
export default App;

const root = createRoot(document.getElementById('container'));
root.render(<App />);
