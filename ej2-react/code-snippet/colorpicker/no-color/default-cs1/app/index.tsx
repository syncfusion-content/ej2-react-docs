

import { ColorPickerComponent, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useEffect } from "react";

function App() {
    let preview: HTMLElement;
    function onChange (args: ColorPickerEventArgs): void {
        preview.style.backgroundColor = args.currentValue.hex;
        preview.textContent = args.currentValue.hex ? args.currentValue.hex : 'No color';
    }

    useEffect(() => {
        preview = document.getElementById('preview') as HTMLElement;
        preview.style.backgroundColor = '#ba68c8';
        preview.textContent = '#ba68c8';
    }, []);

    return (
        <div id='container'>
        <div className='wrap'>
            <div id='preview'/>
            <h4>Select Color</h4>
            <ColorPickerComponent id='colorpicker' value='#ba68c8' mode='Palette' noColor={true} showButtons={false} modeSwitcher={false} change={onChange}/>
        </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


