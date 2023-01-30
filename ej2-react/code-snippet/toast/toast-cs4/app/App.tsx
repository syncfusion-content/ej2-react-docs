

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent  } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {
    let toastInstance: ToastComponent;
    let position = { X: "Right", Y: "Bottom" };
    let buttons: object[] = [
      { model: { content: "Ignore" } },
      { model: { content: "reply" } }
    ];
  
    function toastShow() {
      toastInstance.show();
    }
  
    function toastCreated() {
      toastInstance.show();
    }
  
    function contentTemplate() {
      return <p><img src='./laura.png'/></p>;
    }
  
    return (
        <div>
          <ButtonComponent cssClass="e-primary" onClick={toastShow.bind(this)}> Show Toast </ButtonComponent>
          <ToastComponent ref={toast => toastInstance = toast!} title="Anjolie Stokes" content={contentTemplate} position={position} width='230' height='250' buttons={buttons} created={toastCreated.bind(this)} />
        </div>
    );
}
export default App;



