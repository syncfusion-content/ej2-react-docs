{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
export default class App extends React.Component {
    // Uploader component
    uploadObj;
    path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    dropAreaRef;
    onCreated() {
        this.uploadObj.dropArea = this.dropAreaRef;
        this.uploadObj.dataBind();
    }
    render() {
        return (<div className='control-pane'>
            <div className='control-section row uploadpreview' ref={dropAreaEle => this.dropAreaRef = dropAreaEle}>
            <div className='col-lg-9'>
            <div className='upload_wrapper'>
                {/* Render Uploader */}
                <UploaderComponent id='fileUpload' type='file' ref={upload => { this.uploadObj = upload; }} asyncSettings={this.path} created={this.onCreated = this.onCreated.bind(this)}/>
            </div>
            </div>
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}