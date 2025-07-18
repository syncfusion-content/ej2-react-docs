import { ImageEditorComponent, RedactType } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    addRedact() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawRedact(RedactType.Blur, dimension?.x, dimension.y, 200, 300);
    }
    updateRedact() {
        let redacts = this.imgObj.getRedacts();
        if (redacts.length > 0) {
            redacts[redacts.length - 1].blurIntensity = 100;
            this.imgObj.updateRedact(redacts[redacts.length - 1]);
        }
    }
    selectRedact() {
        let redacts = this.imgObj.getRedacts();
        if (redacts.length > 0) {
            this.imageEditorObj?.selectRedact(redacts[redacts.length - 1].id);
        }
    }
    deleteRedact() {
        let redacts = this.imgObj.getRedacts();
        if (redacts.length > 0) {
            this.imgObj.deleteRedact(redacts[redacts.length - 1].id);
        }
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbar = {[]}>
            </ImageEditorComponent>
                    <div>
                        <ButtonComponent cssClass='e-primary' content='Add Redact' onClick={this.addRedact.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Update Redact' onClick={this.updateRedact.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Select Redact' onClick={this.selectRedact.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Delete Redact' onClick={this.deleteRedact.bind(this)}/>
                    </div>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));