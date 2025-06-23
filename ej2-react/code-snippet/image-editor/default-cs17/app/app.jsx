import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        } else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    buttonTemplate() {
        return (
            <div className="e-toolbar">
                <ButtonComponent cssClass="e-primary" content="Enable FreeHandDraw" onClick={this.enableFreeHandDraw.bind(this)} />
            </div>
        );
    }
    enableFreeHandDraw() {
        this.imgObj.freeHandDraw(true);
    }
    render() {
        return (
            <div className="e-img-editor-sample">
                <ImageEditorComponent toolbarTemplate={this.buttonTemplate.bind(this)} ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbar={[]} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));