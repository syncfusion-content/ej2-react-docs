import { ImageEditorComponent, UploadSettingsModel } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let uploadSettings: UploadSettingsModel = {
        minFileSize: 1024,     // Minimum file size in bytes (1 KB)
        maxFileSize: 90 * 1024  // Maximum file size in bytes (90 KB)
    };
    function loadInvalidImage(): void {
        imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} height="350px" uploadSettings = {uploadSettings}>
        </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Load Invalid Image' onClick = {loadInvalidImage}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));