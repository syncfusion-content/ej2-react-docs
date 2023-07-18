{% raw %}

import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }
    blurClick() {
        this.imgObj.finetuneImage(ImageFinetuneOption.Blur, 10);
    }
    exposureClick() {
        this.imgObj.finetuneImage(ImageFinetuneOption.Exposure, 10);
    }
    hueClick() {
        this.imgObj.finetuneImage(ImageFinetuneOption.Hue, 10);
    }
    opacityClick() {
        this.imgObj.finetuneImage(ImageFinetuneOption.Opacity, 10);
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} created={this.imageEditorCreated.bind(this)} toolbar = {[]}>
            </ImageEditorComponent>
                    <div>
                        <ButtonComponent cssClass='e-primary' content='Blur' onClick={this.blurClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Exposure' onClick={this.exposureClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Hue' onClick={this.hueClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Opacity' onClick={this.opacityClick.bind(this)}/>
                    </div>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));

{% endraw %}