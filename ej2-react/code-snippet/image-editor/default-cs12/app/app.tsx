import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
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
    function selectSquareShape(): void {
        imgObj.select("Square");
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Select Square' onClick={selectSquareShape} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));