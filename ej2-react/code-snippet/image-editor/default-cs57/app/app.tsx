import { ImageEditorComponent, UploadSettingsModel } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let uploadSettings: UploadSettingsModel = {
        allowedExtensions: ".png, .svg"
    };
    function loadInvalidImage(): void {
        imgObj.open('flower.jpeg');
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