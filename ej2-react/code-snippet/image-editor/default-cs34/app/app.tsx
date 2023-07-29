{% raw %}





import { ImageEditorComponent, ImageFinetuneOption } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }
    function brightnessClick(): void {
        imgObj.finetuneImage(ImageFinetuneOption.Brightness,10);
    }
    function contrastClick(): void {
        imgObj.finetuneImage(ImageFinetuneOption.Contrast,10);
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {[]}>
        </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Brightness' onClick = {brightnessClick}/>
                    <ButtonComponent cssClass='e-primary' content='Contrast' onClick = {contrastClick}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));



{% endraw %}