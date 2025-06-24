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
    function beforeSaved(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawText(dimension.x, dimension.y, 'Syncfusion', 'Arial', 40, false, false, '#80330075');
    };
    function saved(): void {
        let shapes = imgObj.getShapeSettings();
        imgObj.deleteShape(shapes[shapes.length - 1].id);
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} beforeSave = {beforeSaved} saved = {saved}>
        </ImageEditorComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));