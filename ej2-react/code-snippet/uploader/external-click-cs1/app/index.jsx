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
    browseClick() {
        const wrapperEle = select('.e-file-select-wrap button', document);
        wrapperEle.click();
    }
    render() {
        return (<div className="control_wrapper">
            <div id="dropArea">
                <span id="drop"> Drop image (JPG, PNG) files here or <button className='e-btn e-control' id="browse" onClick={this.browseClick = this.browseClick.bind(this)}>Browse</button></span>
            </div>
            <UploaderComponent ref={uplaod => { this.uploadObj = uplaod; }} asyncSettings={this.path}/>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}