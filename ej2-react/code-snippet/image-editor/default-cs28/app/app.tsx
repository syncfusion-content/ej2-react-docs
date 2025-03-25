import { ImageEditorComponent, ImageFinetuneOption } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }

    function blurClick(): void {
        imgObj.finetuneImage(ImageFinetuneOption.Blur, 20);
    }
    function exposureClick(): void {
        imgObj.finetuneImage(ImageFinetuneOption.Exposure, 20);
    }
    function hueClick(): void {
        imgObj.finetuneImage(ImageFinetuneOption.Hue, 20);
    }
    function opacityClick(): void {
        imgObj.finetuneImage(ImageFinetuneOption.Opacity, 70);
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Blur' onClick={blurClick} />
                <ButtonComponent cssClass='e-primary' content='Exposure' onClick={exposureClick} />
                <ButtonComponent cssClass='e-primary' content='Hue' onClick={hueClick} />
                <ButtonComponent cssClass='e-primary' content='Opacity' onClick={opacityClick} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));