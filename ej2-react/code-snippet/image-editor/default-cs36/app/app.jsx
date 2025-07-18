import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    toolbar = [];
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    aspectClick() {
        this.imgObj.resize(300, 400, true);
    }
    nonaspectClick() {
        this.imgObj.resize(400, 100, false);
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbar = {this.toolbar}>
            </ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Aspect Ratio' onClick={this.aspectClick.bind(this)}/>
                <ButtonComponent cssClass='e-primary' content='Non Aspect Ratio' onClick={this.nonaspectClick.bind(this)}/>
            </div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));