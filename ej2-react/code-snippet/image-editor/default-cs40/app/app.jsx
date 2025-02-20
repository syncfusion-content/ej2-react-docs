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
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }
    drawShapes() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawRectangle(dimension.x + 10, dimension.y + 10, 150, 70, null, null, 'red');
        this.imgObj.drawRectangle(dimension.x + 20, dimension.y + 20, 150, 70, null, null, 'red');
        this.imgObj.drawRectangle(dimension.x + 30, dimension.y + 30, 150, 70, null, null, 'green');
        this.imgObj.drawRectangle(dimension.x + 40, dimension.y + 40, 150, 70, null, null, 'red');
    }
    bringForward() {
        this.imgObj.bringForward('shape_3');
    }
    sendBackward() {
        this.imgObj.sendBackward('shape_3');
    }
    bringToFront() {
        this.imgObj.bringToFront('shape_3');
    }
    sendToBack() {
        this.imgObj.sendToBack('shape_3');
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Draw Shapes' onClick={this.drawShapes.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Bring Forward' onClick={this.bringForward.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Sent Backward' onClick={this.sendBackward.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Bring to Front' onClick={this.bringToFront.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Send to Back' onClick={this.sendToBack.bind(this)} />
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}