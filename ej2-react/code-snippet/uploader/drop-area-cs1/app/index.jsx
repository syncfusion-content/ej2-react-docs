{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
export default class App extends React.Component {
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
        return (<div id='container'>
                <div id='droparea' ref={dropAreaEle => this.dropAreaRef = dropAreaEle}>
                Drop files here to upload
                </div>
                <div id='uploadfile'>
                    <UploaderComponent autoUpload={false} ref={upload => { this.uploadObj = upload; }} created={this.onCreated = this.onCreated.bind(this)} asyncSettings={this.path}/>
                </div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}