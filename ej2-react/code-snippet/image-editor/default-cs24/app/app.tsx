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
    function startFreeHandDraw(): void {
        imgObj.freeHandDraw(true);
    }
    function deleteFreeHandDraw(): void {
        imgObj.deleteShape('pen_1');
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Start Drawing' onClick={startFreeHandDraw} />
                <ButtonComponent cssClass='e-primary' content='Delete Drawing' onClick={deleteFreeHandDraw} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));