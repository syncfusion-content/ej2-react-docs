


import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

function App() {
    const [status, setStatus] = React.useState({ hideDialog: true });
    function onOverlayClick() {
        setStatus({ hideDialog: false })
    }

    function dialogClose () {
    setStatus({ hideDialog: false });
    };

    function handleClick() {
        setStatus({ hideDialog: true });
    }
    return (
    <div className="App" >
        <button
        className="e-control e-btn"
        id="targetButton1"
        role="button"
        onClick={(handleClick.bind(this))}
        >
        Open
        </button>

        <DialogComponent
        width="250px"
        isModal={true}
        visible={status.hideDialog}
        close={dialogClose}
        overlayClick={onOverlayClick}
        >
        This is a modal Dialog{" "}
        </DialogComponent>
    </div>
    );
}
export default App;



