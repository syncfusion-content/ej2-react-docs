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
        this.imgObj.drawText(dimension.x, dimension.y, 'Syncfusion');
    }
    outlineText() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawText(dimension.x + 50, dimension.y + 50, 'Syncfusion', 'Arial', 30, false, false, '', false, 0, '', 'green', 8);
    }
    bgColour() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawText(dimension.x + 100, dimension.y + 100, 'Syncfusion', 'Arial', 30, false, false, '', false, 0, 'red', '', 0);
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Add Text' onClick={this.addText.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Text Outline' onClick={this.outlineText.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Background Colour' onClick={this.bgColour.bind(this)} />
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));