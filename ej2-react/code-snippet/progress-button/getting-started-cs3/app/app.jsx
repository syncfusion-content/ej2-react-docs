import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useState } from "react";
function App() {
    const [state, setState] = useState({
        content: 'Upload',
        cssClass: 'e-hide-spinner'
    });
    function begin() {
        setState({ content: 'Uploading...', cssClass: 'e-hide-spinner e-info' });
    }
    function end() {
        setState({ content: 'Success', cssClass: 'e-hide-spinner e-success' });
        setTimeout(() => {
            setState({ content: 'Upload', cssClass: 'e-hide-spinner' });
        }, 500);
    }
    return (<ProgressButtonComponent content={state.content} enableProgress cssClass={state.cssClass} duration={4000} begin={begin} end={end}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('progress-button'));
