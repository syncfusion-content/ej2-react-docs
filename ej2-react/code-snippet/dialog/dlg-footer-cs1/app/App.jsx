import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    dialogInstance;
    settings = { effect: 'Zoom', duration: 400, delay: 0 };
    footer() {
        return (<div>
            <button id='Button1' className="e-control e-btn e-primary e-flat" data-ripple="true">
            <span className="e-btn-icon e-icons e-ok-icon e-icon-left"/>Yes</button>
            <button id="Button2" className="e-control e-btn e-flat" data-ripple="true">
            <span className="e-btn-icon e-icons e-close-icon e-icon-left"/>No</button>
        </div>);
    }
    componentDidMount() {
        setTimeout(() => {
            document.getElementById('Button1').onclick = () => {
                this.dialogInstance.hide();
            };
            document.getElementById('Button2').onclick = () => {
                this.dialogInstance.hide();
            };
        });
    }
    handleClick() {
        this.dialogInstance.show();
    }
    render() {
        return (<div className="App" id='container'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>

     <DialogComponent id='dialog' header='Delete Multiple Items' animationSettings={this.settings} showCloseIcon={true} closeOnEscape={true} width='300px' footerTemplate={this.footer} content='Are you sure you want to permanently delete all of these items?' ref={dialog => this.dialogInstance = dialog} target='#container'/>
  </div>);
    }
}
export default App;
