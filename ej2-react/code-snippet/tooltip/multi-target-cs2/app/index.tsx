

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  return (
    <div id='container'>
      <TooltipComponent id="details" target='.e-info' position='RightCenter'>
        <form id="details" role="form">
            <table>
                <tr>
                    <td className="info">User Name</td>
                    <td>
                        <input type="text" className="e-info" name="firstname" title="Please enter your name" /> </td>
                </tr>
                <tr>
                    <td className="info">Email Address</td>
                    <td>
                        <input type="text" className="e-info" name="email" title="Enter a valid email address" />
                    </td>
                </tr>
                <tr>
                    <td className="info">Password</td>
                    <td>
                        <input type="password" className="e-info" name="password" title="Be at least 8 characters length" />
                    </td>
                </tr>
                <tr>
                    <td className="info">Confirm Password</td>
                    <td>
                        <input type="password" className="e-info" name="Cpwd" title="Re-enter your password" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ButtonComponent id="sample" className="center" content="Submit"/>
                    </td>
                    <td>
                        <ButtonComponent id="reset" className="center" content="Reset"/>
                    </td>
                </tr>
            </table>
        </form>
      </TooltipComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));


