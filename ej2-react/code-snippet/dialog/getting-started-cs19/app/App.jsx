import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    buttons = [{
            buttonModel: {
                content: 'OK',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            'click': () => {
                this.setState({ hideDialog: false });
            }
        },
        {
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat'
            },
            'click': () => {
                this.setState({ hideDialog: false });
            }
        }];
    constructor(props) {
        super(props);
        this.state = {
            hideDialog: true
        };
    }
    handleClick() {
        this.setState({ hideDialog: true });
    }
    dialogClose = () => {
        this.setState({ hideDialog: false });
    };
    render() {
        return (<div className="App" id='dialog-target'>
      <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)}>Open</button>
      <DialogComponent width='250px' target='#dialog-target' visible={this.state.hideDialog} close={this.dialogClose} header='Dialog' enableResize={true} resizeHandles={['All']} allowDragging={true} showCloseIcon={true} buttons={this.buttons}>
      This is a Dialog with drag enabled </DialogComponent>
  </div>);
    }
}
export default App;
