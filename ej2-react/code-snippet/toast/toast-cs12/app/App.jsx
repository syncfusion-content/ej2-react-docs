import { ButtonComponent, CheckBoxComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from 'react';
function App() {
    let toastInstance;
    let checkboxObj;
    const [status, setStatus] = React.useState({ content: 'Hey, wanna dress up as wizards and ride our hoverboards?', title: 'Matt sent you a friend request', width: '600', position: { X: 'Center', Y: "Bottom" } });
    function toastCreated() {
        toastShow(600);
    }
    function toastShow(timeOutDelay) {
        setTimeout(() => {
            toastInstance.show();
        }, timeOutDelay);
    }
    function checkboxChange(e) {
        if (e.event.target.checked) {
            setStatus({
                content: '',
                width: '',
                title: '',
                position: { Y: "Top", X: '' }
            });
            toastInstance.hide('All');
            toastShow(700);
        }
    }
    function checkboxChange1(e) {
        if (e.event.target.checked) {
            setStatus({
                content: '',
                width: '',
                title: '',
                position: { Y: "Bottom", X: '' }
            });
            toastInstance.hide('All');
            toastShow(700);
        }
    }
    function onChange(e) {
        if (e.checked) {
            toastInstance.hide('All');
            setStatus({
                content: "<div class='e-custom'>Take a look at our next generation <b>Javascript</b> <a href='https://ej2.syncfusion.com/home/index.html' target='_blank'>LEARN MORE</a></div>",
                width: '100%',
                title: '',
                position: { X: '', Y: '' }
            });
            toastShow(500);
        }
        else {
            toastInstance.hide('All');
            setStatus({
                content: 'Hey, wanna dress up as wizards and ride our hoverboards?',
                width: '300',
                title: 'Matt sent you a friend request',
                position: { X: '', Y: '' }
            });
            toastShow(500);
        }
    }
    return (<div id="container">
        <div id="toast_full_width" className='row'>
          <table>
            <tr>
              <td>
                <div>
                  <RadioButtonComponent checked={true} label='Top' name="toast" change={checkboxChange.bind(this)}/>
                </div>
              </td>
              <td>
                <div>
                  <RadioButtonComponent checked={true} label='Bottom' name="toast" change={checkboxChange1.bind(this)}/>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <CheckBoxComponent label='100% Width' ref={scope => checkboxObj = scope} change={onChange.bind(this)}/>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <ButtonComponent cssClass="e-primary" onClick={toastShow.bind(this, 500)}> Show Toast </ButtonComponent>
        <ToastComponent ref={toast => toastInstance = toast} width={status.width} title={status.title} content={status.content} position={status.position} created={toastCreated.bind(this)}/>
      </div>);
}
export default App;
