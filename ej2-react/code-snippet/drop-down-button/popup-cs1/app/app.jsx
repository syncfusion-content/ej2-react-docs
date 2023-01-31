import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render DropDownButton.
function App() {
    function itemBeforeEvent(args) {
        args.element.style.height = '105px';
    }
    return (<div>
        <div id="target">
          <table>
            <caption><b>Insert Table</b></caption>
            <tbody>
              <tr className='e-row'>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              </tr>
              <tr className='e-row'>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              </tr>
              <tr className='e-row'>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              </tr>
              <tr className='e-row'>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              </tr>
              <tr className='e-row'>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              </tr>
              <tr className='e-row'>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              <td className='e-data'/>
              </tr>
            </tbody>
          </table>
        </div>
        <DropDownButtonComponent target='#target' iconCss='e-icons e-table' iconPosition='Top' cssClass='e-vertical' beforeItemRender={itemBeforeEvent}>Table</DropDownButtonComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
