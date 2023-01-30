{% raw %}


import { ProgressButtonComponent, ProgressEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useState } from "react";

function App() {
    const [state, setState] = useState({
        eventTrace: ''
    });

    function begin(args: ProgressEventArgs): void {
        updateEventLog(args);
    }
    function end(args: ProgressEventArgs): void {
        updateEventLog(args);
    }
    function progress(args: ProgressEventArgs): void {
        updateEventLog(args);
    }
    function fail(args: Event): void {
        updateEventLog(args);
    }
    function updateEventLog(args: any): void {
       setState({ eventTrace: state.eventTrace + args.name + ' Event triggered. <br />' });
    }

    function btnClick(): void {
        setState({ eventTrace: '' });
    }

    return (
        <div className='control-section'>
            <div className='progress-btn-section'>
                <ProgressButtonComponent content='Progress' enableProgress = {true} begin={begin} end={end} progress={progress} fail={fail}/>
            </div>
            <div className='property-section'>
                <table id='propertyTable' title='Event trace'>
                    <tbody>
                        <th>Event trace:-</th>
                        <tr>
                            <td dangerouslySetInnerHTML={{__html: state.eventTrace}}/>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ButtonComponent id='clear' cssClass='e-small' content='Clear' onClick={btnClick}/>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('progress-button'));



{% endraw %}