import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    dialogInstance;
    constructor(props) {
        super(props);
        this.state = {
            hideDialog: false
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
      <DialogComponent width='250px' content='This is a Dialog with content' target='#dialog-target' visible={this.state.hideDialog} close={this.dialogClose}/>
    </div>);
    }
}
export default App;
