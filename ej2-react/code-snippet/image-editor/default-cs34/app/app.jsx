import { ImageEditorComponent, ImageFinetuneOption } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    brightnessClick() {
        this.imgObj.finetuneImage(ImageFinetuneOption.Brightness, 10);
    }
    contrastClick() {
        this.imgObj.finetuneImage(ImageFinetuneOption.Contrast, 30);
    }
    saturationClick() {
        this.imgObj.finetuneImage(ImageFinetuneOption.Saturation, 100);
    }

    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Brightness' onClick={this.brightnessClick.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Contrast' onClick={this.contrastClick.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Saturation' onClick={this.saturationClick.bind(this)} />
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));