


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App(){
  function buttonClick() {
    DialogUtility.alert({
    title: 'Low Battery',
    width: '250px',
    content: '10% of battery remaining',
    animationSettings: { effect: 'Zoom'}
  });
  }
  return (
    <div className="App" id='dialog-target'>
        <ButtonComponent id="alertBtn" cssClass="e-danger" onClick={buttonClick.bind(this)}>Alert</ButtonComponent>
    </div>
  );
}
export default App;



