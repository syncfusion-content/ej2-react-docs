import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useState } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom";
enableRipple(true);
function App() {
    const [state, setState] = useState({
        content: 'Play',
        iconCss: 'e-btn-sb-icon e-play-icon'
    });
    // Click Event.
    function btnClick() {
        if (state.content === "Play") {
            setState({ content: 'Pause', iconCss: 'e-btn-sb-icon e-pause-icon' });
        }
        else {
            setState({ content: 'Play', iconCss: 'e-btn-sb-icon e-play-icon' });
        }
    }
    // Button is active in toggled state.
    return (<ButtonComponent cssClass='e-flat' iconCss={state.iconCss} content={state.content} isToggle={true} onClick={btnClick}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('button'));
