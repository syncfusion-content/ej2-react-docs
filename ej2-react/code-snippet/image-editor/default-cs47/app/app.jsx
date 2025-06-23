import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    dialogInstance;
    animationSettings = { effect: "None" };
    contentTemplate = () => {
        return (<ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px"></ImageEditorComponent>);
    };
    btnClick() {
        this.dialogInstance.show();
        this.imgObj.open("https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg");
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <DialogComponent id="profile-dialog" isModal= {true} showCloseIcon={true} animationSettings={this.animationSettings} closeOnEscape={true} visible={false} width={"340px"} height={"420px"} ref={(dialogInstance) => { this.dialogInstance = dialogInstance; }} content={this.contentTemplate.bind(this)} position={{ X: "center", Y: 100 }}></DialogComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Click' onClick={this.btnClick.bind(this)}/>
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));