import { ImageEditorComponent, shapeChanging } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function shapeChanging(args: shapeChanging): void {
        if (args.currentShapeSettings.type === 'Text') {
            args.currentShapeSettings.color = 'red';
            args.currentShapeSettings.fontFamily = 'italic';
        }
    }
    function customizeText(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawText(dimension.x, dimension.y, 'Syncfusion');
    }

    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('flower.png');
        } else {
            imgObj.open('bridge.png');
        }
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} shapeChanging={shapeChanging} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Customize Text' onClick={customizeText} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));