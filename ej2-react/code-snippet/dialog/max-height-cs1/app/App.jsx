import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    dialogInstance;
    handleClick() {
        this.dialogInstance.show(true);
    }
    onCreated = () => {
        // document.getElementById('dlgContent').style.display = 'block';
        this.dialogInstance.refreshPosition();
    };
    onBeforeOpen = (args) => {
        args.maxHeight = '300px';
    };
    render() {
        return (<div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>

      <DialogComponent header='Dialog' showCloseIcon={true} visible={false} width='800px' showCloseIcon="true" target='#dialog-target' ref={dialog => this.dialogInstance = dialog} created={this.onCreated} beforeOpen={this.onBeforeOpen}>
      <div className="dialogContent">
                  <span>
                   <b>JavaScript:</b><br />
                    JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript
                    language specification. Alongside HTML and CSS, it is one of the three essential technologies of World Wide Web
                    content production; the majority of websites employ it and it is supported by all modern Web browsers without
                    plug-ins. JavaScript is a prototype-based programming language with first-class functions, making it a multi-paradigm language,
                    supporting object-oriented , imperative, and functional programming styles.
                    <br /><br /><br />
                    <b>MVC:</b><br />
                    Model–view–controller (MVC) is a software architecture pattern which separates the representation of information from the user's interaction with it. The model consists of application data, business rules, logic, and functions. A view can be any output representation of data, such as a chart or a diagram. Multiple views of the same data are possible, such as a bar chart for management and a tabular view for accountants. The controller mediates input, converting it to commands for the model or view.The central ideas behind MVC are code reusability and in addition to dividing the application into three kinds of components, the MVC design defines the interactions between them.
                    A controller can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). It can also send commands to the model to update the model's state (e.g., editing a document).
                    A model notifies its associated views and controllers when there is a change in its state. This notification allows the views to produce updated output, and the controllers to change the available set of commands. A passive implementation of MVC omits these notifications because the application does not require them or the software platform does not support them.
                    A view requests from the model the information that it needs to generate an output representation to the user.
                    </span>
            </div>
       </DialogComponent>
  </div>);
    }
}
export default App;
