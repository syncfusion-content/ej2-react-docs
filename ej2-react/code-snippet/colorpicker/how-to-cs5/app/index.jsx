import { L10n } from '@syncfusion/ej2-base';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
L10n.load({
    'de-DE': {
        'colorpicker': {
            'Apply': 'Anwenden',
            'Cancel': 'Abbrechen',
            'ModeSwitcher': 'Modus wechseln'
        }
    }
});
function App() {
    return (<div id='container'>
        <div className='wrap'>
            <h4>Choose Color</h4>
            <ColorPickerComponent locale='de-DE'/>
        </div>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
