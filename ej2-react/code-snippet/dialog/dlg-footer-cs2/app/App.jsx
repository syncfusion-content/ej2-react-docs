import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
function App() {
    let dialogInstance;
    let settings = { effect: 'Zoom', duration: 400, delay: 0 };
    function footer() {
        return (<div>
                <button id='Button1' className="e-control e-btn e-primary e-flat" data-ripple="true">
                <span className="e-btn-icon e-icons e-ok-icon e-icon-left"/>Yes</button>
                <button id="Button2" className="e-control e-btn e-flat" data-ripple="true">
                <span className="e-btn-icon e-icons e-close-icon e-icon-left"/>No</button>
            </div>);
    }
    function componentDidMount() {
        setTimeout(() => {
            document.getElementById('Button1').onclick = () => {
                dialogInstance.hide();
            };
            document.getElementById('Button2').onclick = () => {
                dialogInstance.hide();
            };
        });
    }
    function handleClick() {
        dialogInstance.show();
    }
    return (<div className="App" id='container'>
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={handleClick.bind(this)}>Open</button>

        <DialogComponent id='dialog' header='Delete Multiple Items' animationSettings={settings} showCloseIcon={true} closeOnEscape={true} width='300px' footerTemplate={footer} content='Are you sure you want to permanently delete all of these items?' ref={dialog => dialogInstance = dialog} target='#container'/>
    </div>);
}
export default App;
