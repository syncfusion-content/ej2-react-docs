import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
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
    addText() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawText(dimension.x, dimension.y);
    }
    deleteText() {
        this.imgObj.deleteShape('shape_1');
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbar = {[]}></ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Add Text' onClick={this.addText.bind(this)}/>
                    <ButtonComponent cssClass='e-primary' content='Delete Text' onClick = {this.deleteText.bind(this)}/>
                </div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));