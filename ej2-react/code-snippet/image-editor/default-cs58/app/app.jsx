{% raw %}
import { ImageEditorComponent, RedactType } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    uploadSettings = {
        minFileSize: 1024,     // Minimum file size in bytes (1 KB)
        maxFileSize: 90 * 1024  // Maximum file size in bytes (100 KB)
    };
    loadInvalidImage() {
        this.imgObj.open('flower.jpeg');
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" uploadSettings = {this.uploadSettings}>
            </ImageEditorComponent>
                    <div>
                        <ButtonComponent cssClass='e-primary' content='Load Invalid Image' onClick={this.loadInvalidImage.bind(this)}/>
                    </div>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}