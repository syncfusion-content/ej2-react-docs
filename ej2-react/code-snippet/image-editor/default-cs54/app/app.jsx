import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    changeColor = true;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    shapeChanging(args) {
        if (this.changeColor && args.action == "insert" && args.currentShapeSettings?.type === 'Rectangle') {
            args.currentShapeSettings.strokeColor = 'red';
            this.changeColor = false;
        }
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} shapeChanging={this.shapeChanging.bind(this)}></ImageEditorComponent>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));