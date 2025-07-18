import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    shapeChanging(args) {
        if (args.currentShapeSettings.type === 'FreehandDraw') {
            args.currentShapeSettings.strokeColor = 'red';
            args.currentShapeSettings.strokeWidth = 5;
        }
    }
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} shapeChanging={this.shapeChanging.bind(this)}></ImageEditorComponent>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));