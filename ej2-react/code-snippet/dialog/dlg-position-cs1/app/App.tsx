


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public render() {
    const firstPosition: any = { X: 160, Y: 14 };
    const secondPosition: any = { X: 160, Y: 240 };
    const effect: any = { effect: 'None' };
  return (
  <div className="App" id='dialog-target'>
      <DialogComponent id='firstDialog' header='Position-01' visible={true}
      width='360px' height='120px' target='#dialog-target'
      closeOnEscape={false} animationSettings={effect} position={firstPosition}
      >
     The dialog is positioned at X: 160, Y: 14 coordinates </DialogComponent>

      <DialogComponent id='secondDialog' header='Position-02' visible={true}
      width='360px' height='120px' target='#dialog-target'
      closeOnEscape={false} animationSettings={effect} position={secondPosition}
      >
     The dialog is positioned at X: 160, Y: 240 coordinates </DialogComponent>
  </div>);
}
}
export default App;



