import { ImageEditorComponent, RedactType, RedactSettings } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    function addRedact(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawRedact(RedactType.Blur, dimension.x, dimension.y, 200, 300);
    }
    function updateRedact(): void {
        let redacts: RedactSettings[] = imgObj.getRedacts();
        if (redacts.length > 0) {
            redacts[redacts.length - 1].blurIntensity = 100;
            imgObj.updateRedact(redacts[redacts.length - 1]);
        }
    }
    function selectRedact(): void {
        let redacts: RedactSettings[] = imgObj.getRedacts();
        if (redacts.length > 0) {
            imgObj.selectRedact(redacts[redacts.length - 1].id);
        }
    }
    function deleteRedact(): void {
        let redacts: RedactSettings[] = imgObj.getRedacts();
        if (redacts.length > 0) {
            imgObj.deleteRedact(redacts[redacts.length - 1].id);
        }
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {[]}>
        </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Add Redact' onClick = {addRedact}/>
                    <ButtonComponent cssClass='e-primary' content='Update Redact' onClick = {updateRedact}/>
                    <ButtonComponent cssClass='e-primary' content='Select Redact' onClick = {selectRedact}/>
                    <ButtonComponent cssClass='e-primary' content='Delete Redact' onClick = {deleteRedact}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));