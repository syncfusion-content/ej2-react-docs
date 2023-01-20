{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    private imgObj: ImageEditorComponent;
    public imageEditorCreated(): void {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }
    public zoomInClick(): void {
        this.imgObj.zoom(.1); // Zoom in
    }
    public zoomOut(): void {
        this.imgObj.zoom(-.1); // Zoom out
    }
    public panClick(): void {
        this.imgObj.zoom(.1); // Zoom in
        this.imgObj.pan(true);
    }

    render() {
        return (
            <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img }} created={this.imageEditorCreated.bind(this)}>
            </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Zoom In' onClick = {this.zoomInClick.bind(this)}/>
                    <ButtonComponent cssClass='e-primary' content='Zoom Out' onClick = {this.zoomOutClick.bind(this)}/>
                    <ButtonComponent cssClass='e-primary' content='PAn' onClick = {this.panClick.bind(this)}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}