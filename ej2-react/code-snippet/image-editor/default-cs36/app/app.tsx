import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let toolbar = [];
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }

    function aspectClick(): void {
        imgObj.resize(450, 342, true);
    }
    function nonaspectClick(): void {
        imgObj.resize(450, 342, false);
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {toolbar}>
        </ImageEditorComponent>
        <div>
            <ButtonComponent cssClass='e-primary' content='Aspect Ratio' onClick = {aspectClick}/>
            <ButtonComponent cssClass='e-primary' content='Non Aspect Ratio' onClick = {nonaspectClick}/>
        </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));