{% raw %}
import { ImageEditorComponent, ZoomSettingsModel } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    imgObj;
    zoomSettings = {maxZoomFactor: 30, minZoomFactor: 0.1};
    zoomLevel = 1;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }
    zoomInClick() {
        if(zoomLevel < 1) {
            zoomLevel += 0.1;
        }else {
            zoomLevel += 1;
        }
        value = zoomSettings.maxZoomFactor;
        if (zoomLevel > value) {
            zoomLevel = value;
        }
        imgObj.zoom(zoomLevel); // Zoom in
    }
    zoomOutClick() {
        if(zoomLevel <= 1) {
            zoomLevel -= 0.1;
        }else {
            zoomLevel -= 1;
        }
        value = zoomSettings.minZoomFactor;
        if (zoomLevel < value) {
            zoomLevel = value;
        }
        imgObj.zoom(zoomLevel); // Zoom out
    }
    panClick() {
        this.imgObj.zoom(2); // Zoom in
        this.imgObj.pan(true);
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} created={this.imageEditorCreated.bind(this)} toolbar = {[]}>
            </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Zoom In' onClick={this.zoomInClick.bind(this)}/>
                    <ButtonComponent cssClass='e-primary' content='Zoom Out' onClick={this.zoomOutClick.bind(this)}/>
                    <ButtonComponent cssClass='e-primary' content='PAn' onClick={this.panClick.bind(this)}/>
                </div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}