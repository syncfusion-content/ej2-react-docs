import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastUtility } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
const toastObj;
class App extends React.Component {
    toastShow() {
        toastObj = ToastUtility.show({
            title: 'Toast Title',
            content: 'Toast shown using utility function with ToastModel',
            timeOut: 20000,
            position: { X: 'Right', Y: 'Bottom' },
            showCloseButton: true,
            click: this.toastClick.bind(this),
            buttons: [{
                    model: { content: 'Close' }, click: this.toastClose.bind(this)
                }]
        });
    }
    toastClick() {
        console.log('Toast click event triggered');
    }
    toastClose() {
        toastObj.hide('All');
    }
    render() {
        return (<div>
        <div className="toastUtility">
          <ButtonComponent cssClass="e-btn e-control" onClick={this.hideToast = this.toastShow.bind(this)}> Show Toast </ButtonComponent>
        </div>
      </div>);
    }
}
;
export default App;
