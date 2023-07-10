{% raw %}
import { ImageEditorComponent, ImageFilterOption } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }
    chromeClick() {
        this.imgObj.applyImageFilter(ImageFilterOption.Chrome);
    }
    coldClick() {
        this.imgObj.applyImageFilter(ImageFilterOption.Cold);
    }
    warmClick() {
        this.imgObj.applyImageFilter(ImageFilterOption.Warm);
    }
    grayScaleClick() {
        this.imgObj.applyImageFilter(ImageFilterOption.Grayscale);
    }
    sepiaClick() {
        this.imgObj.applyImageFilter(ImageFilterOption.Sepia);
    }
    invertClick() {
        this.imgObj.applyImageFilter(ImageFilterOption.Invert);
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} created={this.imageEditorCreated.bind(this)} toolbar = {[]}>
            </ImageEditorComponent>
                    <div>
                        <ButtonComponent cssClass='e-primary' content='Chrome' onClick={this.chromeClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Cold' onClick={this.coldClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Warm' onClick={this.warmClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='GrayScale' onClick={this.grayScaleClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Sepia' onClick={this.sepiaClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Invert' onClick={this.invertClick.bind(this)}/>
                    </div>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}