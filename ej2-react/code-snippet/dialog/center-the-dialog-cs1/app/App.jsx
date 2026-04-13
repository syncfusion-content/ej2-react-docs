import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onOverlayClick = () => {
            this.setState({ hideDialog: false });
        };
        this.dialogClose = () => {
            this.setState({ hideDialog: false });
        };
        this.state = {
            hideDialog: true
        };
    }
    handleClick() {
        this.setState({ hideDialog: true });
    }
    render() {
        return (<div className="App">
        <button className="e-control e-btn" id="targetButton1" role="button" onClick={(this.handleClick = this.handleClick.bind(this))}>
          Open
        </button>

        <DialogComponent width="250px" isModal={true} visible={this.state.hideDialog} close={this.dialogClose} overlayClick={this.onOverlayClick}>
          This is a modal Dialog{" "}
        </DialogComponent>
      </div>);
    }
}
export default App;
