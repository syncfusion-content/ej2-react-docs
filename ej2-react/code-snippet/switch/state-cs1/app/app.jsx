import { enableRipple } from '@syncfusion/ej2-base';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render Switch.
function App() {
    return (<table className='size'>
            <tr>
                <td className='lSize'>Checked</td>
                <td>
                    <SwitchComponent checked={true}/>
                </td>
            </tr>
            <tr>
                <td className='lSize'>Unchecked</td>
                <td>
                    <SwitchComponent />
                </td>
            </tr>
        </table>);
}
export default App;
ReactDom.render(<App />, document.getElementById('switch'));
