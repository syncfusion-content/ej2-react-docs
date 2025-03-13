import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let animationSettings = { effect: "None" };
    let dialogInstance: DialogComponent;
    const contentTemplate = () => {
        return (<ImageEditorComponent ref={(img) => { imgObj = img }} height="350px"></ImageEditorComponent>);
    };
    const btnClick = () => {
        dialogInstance.show();
        imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
    };

    return (
        <div className='e-img-editor-sample'>
        <DialogComponent id="profile-dialog" isModal= {true} showCloseIcon={true} animationSettings={animationSettings} closeOnEscape={true} visible={false} width={"340px"} height={"420px"} ref={dialogInstance} content={contentTemplate} position={{ X: "center", Y: 100 }}></DialogComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Click' onClick = {btnClick}/>
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));