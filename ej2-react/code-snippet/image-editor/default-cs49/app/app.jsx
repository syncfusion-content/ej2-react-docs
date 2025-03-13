import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;

    selected(args) {
        if (args.filesData.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
               this.imgObj.open(reader.result);
            };
            reader.readAsDataURL(args.filesData[0].rawFile);
        }
    }
    
    render() {
        return (<div className='e-img-editor-sample'>
            <UploaderComponent selected={this.selected.bind(this)} showFileList={false}></UploaderComponent>
            <ImageEditorComponent height='350px' ref={(img) => { this.imgObj = img; }}>
            </ImageEditorComponent>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));