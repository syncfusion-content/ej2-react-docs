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
    rectangleClick() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawRectangle(dimension.x + 10, dimension.y + 60, 150, 70);
        this.imgObj.drawRectangle(dimension.x + 250, dimension.y + 60, 150, 70, 2, '', '', 0, false, 8);
    }
    ellipseClick() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawEllipse(dimension.x, dimension.y + 200);
    }
    lineClick() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawLine(dimension.x + 300, dimension.y + 30);
    }
    arrowClick() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawArrow(dimension.x + 150, dimension.y + 150, dimension.x + 300, dimension.y + 150, 10);
    }
    pathClick() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawPath([{ x: dimension.x, y: dimension.y }, { x: dimension.x + 50, y: dimension.y + 50 }, { x: dimension.x + 20, y: dimension.y + 50 }], 8);
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Rectangle' onClick={this.rectangleClick.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Ellipse' onClick={this.ellipseClick.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Line' onClick={this.lineClick.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Arrow' onClick={this.arrowClick.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Path' onClick={this.pathClick.bind(this)} />
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));