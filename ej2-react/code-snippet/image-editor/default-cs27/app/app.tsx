import { ImageEditorComponent, ImageFilterOption } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('flower.png');
        } else {
            imgObj.open('bridge.png');
        }
    }
    function chromeClick(): void {
        imgObj.applyImageFilter(ImageFilterOption.Chrome);
    }
    function coldClick(): void {
        imgObj.applyImageFilter(ImageFilterOption.Cold);
    }
    function warmClick(): void {
        imgObj.applyImageFilter(ImageFilterOption.Warm);
    }
    function grayScaleClick(): void {
        imgObj.applyImageFilter(ImageFilterOption.Grayscale);
    }
    function sepiaClick(): void {
        imgObj.applyImageFilter(ImageFilterOption.Sepia);
    }
    function invertClick(): void {
        imgObj.applyImageFilter(ImageFilterOption.Invert);
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {[]}>
        </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Chrome' onClick = {chromeClick}/>
                    <ButtonComponent cssClass='e-primary' content='Cold' onClick = {coldClick}/>
                    <ButtonComponent cssClass='e-primary' content='Warm' onClick = {warmClick}/>
                    <ButtonComponent cssClass='e-primary' content='Grayscale' onClick = {grayScaleClick}/>
                    <ButtonComponent cssClass='e-primary' content='Sepia' onClick = {sepiaClick}/>
                    <ButtonComponent cssClass='e-primary' content='Invert' onClick = {invertClick}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));