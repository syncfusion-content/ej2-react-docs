{% raw %}
import { select } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
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
    browseClick(args) {
        const wrapperEle = select('.e-file-select-wrap button', document);
        wrapperEle.click();
        args.preventDefault();
    }
    render() {
        return (<div id='container'>
                <div id='dropArea'>
                    <span id='drop'> Drop files here or <a href="" id='browse' onClick={this.browseClick = this.browseClick.bind(this)}><u>Browse</u></a> </span>
                    <UploaderComponent asyncSettings={this.path} ref={upload => { this.uploadObj = upload; }} created={this.onCreated = this.onCreated.bind(this)}/>
                </div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}