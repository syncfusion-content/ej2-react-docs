import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
function App() {
    let toastInstance;
    let position = { X: "Right", Y: "Bottom" };
    let buttons = [
        { model: { content: "Ignore" } },
        { model: { content: "reply" } }
    ];
    function toastCreated() {
        toastShow();
    }
    function toastShow() {
        const value = parseInt(document.getElementById('timeOut').value, 0);
        toastInstance.show({ timeOut: value });
    }
    function contentTemplate() {
        return <p><img src='./laura.png'/></p>;
    }
    return (<div>
      <div className='e-float-input'>
        <input type='text' className='e-input' id='timeOut' defaultValue={'0'} required={true}/>
        <span className='e-float-line'/>
        <label className="e-float-text">TimeOut</label>
      </div>
      <ButtonComponent cssClass="e-primary" onClick={toastShow.bind(this)}> Show Toast </ButtonComponent>
      <ToastComponent id="elementToastTime" ref={toast => toastInstance = toast} title="Anjolie Stokes" content={contentTemplate} position={position} width={230} height={250} buttons={buttons} showProgressBar={true} created={toastCreated.bind(this)}/>
    </div>);
}
export default App;
