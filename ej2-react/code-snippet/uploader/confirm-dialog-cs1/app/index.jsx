{% raw %}
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    uploadObj;
    dialog;
    removeFile = [];
    path = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    };
    buttons = [{ buttonModel: { content: 'OK', isPrimary: 'true' }, 'click': () => {
                this.dialog.hide();
                this.uploadObj.remove(this.removeFile[0], false, true);
            } },
        { 'click': () => { this.dialog.hide(); }, buttonModel: { content: 'Cancel', cssClass: 'e-flat' } }];
    dropAreaRef;
    onCreated() {
        this.uploadObj.dropArea = this.dropAreaRef;
        this.uploadObj.dataBind();
    }
    onremove(args) {
        this.removeFile = [];
        args.cancel = true;
        this.removeFile.push(args.filesData);
        this.dialog.show();
    }
    render() {
        return (<div className='control-pane' ref={dropAreaEle => this.dropAreaRef = dropAreaEle}>
            <div className='control-section row uploadpreview'>
            <div className='col-lg-9'>
            <div className='upload_wrapper'>
            <div id='preview'/>
                {/* Render Uploader */}
                <UploaderComponent id='fileUpload' type='file' ref={upload => { this.uploadObj = upload; }} asyncSettings={this.path} removing={this.onremove = this.onremove.bind(this)} created={this.onCreated = this.onCreated.bind(this)}/>
                <div id='targetElement' style={{ minHeight: '200px' }}/>
                <DialogComponent id="defaultdialog" content={"Are you sure want to remove the file?"} width={'300px'} ref={dialog => this.dialog = dialog} target={'#targetElement'} visible={false} buttons={this.buttons}/>
            </div>
            </div>
            </div>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}