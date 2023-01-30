import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { useState } from "react";
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    const [state, setState] = useState({
        content: 'Progress'
    });
    return (<ProgressButtonComponent content={state.content} enableProgress={true} duration={15000} begin={begin} progress={progress} end={end} cssClass='e-hide-spinner'/>);
    function begin(args) {
        setState({ content: 'Progress ' + args.percent + '%' });
    }
    function progress(args) {
        setState({ content: 'Progress ' + args.percent + '%' });
        if (args.percent === 40) {
            args.percent = 90;
        }
    }
    function end(args) {
        setState({ content: 'Progress ' + args.percent + '%' });
    }
}
export default App;
ReactDom.render(<App />, document.getElementById('progress-button'));
