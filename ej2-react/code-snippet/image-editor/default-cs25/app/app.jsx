import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    drawShape() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawEllipse(dimension.x + 100, dimension.y + 100);
    }
    deleteShape() {
        this.imgObj.deleteShape('shape_1');
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
        return (<div id="wrapperDiv">
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbar={[]}/>
            <div>
                <ButtonComponent cssClass="e-primary" content="Draw Shape" onClick={this.drawShape.bind(this)} />
                <ButtonComponent cssClass="e-primary" content="Delete Shape" onClick={this.deleteShape.bind(this)} />
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));