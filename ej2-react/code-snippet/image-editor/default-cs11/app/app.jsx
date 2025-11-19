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
    fitWidth() {
        this.imgObj.zoom(1); // Reset zoom to original size before applying Fit Width
        const containerWidth = this.imgObj.upperCanvas.width;
        const { width: oldWidth } = this.imgObj.getImageDimension();
        let imageWidth = oldWidth, zoomFactor = 0.1, newZoom = 1;
        while (imageWidth < containerWidth) {
            newZoom++;
            imageWidth = oldWidth * (1 + zoomFactor);
            zoomFactor += 0.1;
        }
        this.imgObj.zoom(newZoom);
    }
    fitHeight() {
        this.imgObj.zoom(1); // Reset zoom to original size before applying Fit Height
        const containerHeight = this.imgObj.upperCanvas.height;
        const { height: oldHeight } = this.imgObj.getImageDimension();
        let imageHeight = oldHeight, zoomFactor = 0.1, newZoom = 1;
        while (imageHeight < containerHeight) {
            newZoom++;
            imageHeight = oldHeight * (1 + zoomFactor);
            zoomFactor += 0.1;
        }
        this.imgObj.zoom(newZoom);
    }

    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)}></ImageEditorComponent>
            <div style={{ marginTop: '10px' }}>
                <ButtonComponent cssClass='e-primary' content='Fit Width' onClick={this.fitWidth.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Fit Height' onClick={this.fitHeight.bind(this)} />
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));