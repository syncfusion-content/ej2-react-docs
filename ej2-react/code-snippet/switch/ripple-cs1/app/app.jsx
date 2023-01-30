import { enableRipple } from '@syncfusion/ej2-base';
import { rippleMouseHandler } from '@syncfusion/ej2-buttons';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render Switch with checked state.
function App() {
    function onCreated() {
        // Function to handle ripple effect for Switch with label.
        document.querySelector('.lSize label').addEventListener('mouseup', rippleHandler);
        document.querySelector('.lSize label').addEventListener('mousedown', rippleHandler);
        function rippleHandler(e) {
            const rippleSpan = e.target.parentElement.nextElementSibling.querySelector('.e-ripple-container');
            if (rippleSpan) {
                rippleMouseHandler(e, rippleSpan);
            }
        }
    }
    return (<table className='size'>
            <tr>
                <td className='lSize'>
                    <label htmlFor='switch1'>USB Tethering</label>
                </td>
                <td>
                    <SwitchComponent id="switch1" created={onCreated} checked={true}/>
                </td>
            </tr>
        </table>);
}
export default App;
ReactDom.render(<App />, document.getElementById('switch'));
