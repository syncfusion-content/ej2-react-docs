import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function drawShape(): void {
        let dimension = imgObj.getImageDimension();
        imgObj.drawEllipse(dimension.x + 100, dimension.y + 100);
    }
    function deleteShape(): void {
        imgObj.deleteShape('shape_1');
    }
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Draw Shape' onClick={drawShape} />
                <ButtonComponent cssClass='e-primary' content='Delete Shape' onClick={deleteShape} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));