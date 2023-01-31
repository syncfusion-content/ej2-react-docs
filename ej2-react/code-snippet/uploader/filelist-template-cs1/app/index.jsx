{% raw %}
import { detach, select } from '@syncfusion/ej2-base';
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
    dropAreaClick(args) {
        const target = args.target;
        if (target.classList.contains('e-file-delete-btn')) {
            for (const i of this.uploadObj.getFilesData()) {
                if (target.closest('li').getAttribute('data-file-name') === i.name) {
                    this.uploadObj.remove(this.uploadObj.getFilesData()[this.uploadObj.getFilesData().indexOf(i)]);
                }
            }
        }
        else if (target.classList.contains('e-file-remove-btn')) {
            detach(target.closest('li'));
        }
    }
    browseClick(args) {
        const wrapperEle = select('.e-file-select-wrap button', document);
        wrapperEle.click();
        args.preventDefault();
    }
    onFileUpload(args) {
        const li = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
        const progressValue = Math.round((args.e.loaded / args.e.total) * 100);
        li.getElementsByTagName('progress')[0].value = progressValue;
        li.getElementsByClassName('percent')[0].textContent = progressValue.toString() + " %";
    }
    onuploadSuccess(args) {
        if (args.operation === 'remove') {
            let height = this.dropAreaRef.style.height;
            height = (parseInt(height, 10) - 40) + 'px';
            this.dropAreaRef.style.height = height;
        }
        else {
            const li = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
            const progressBar = li.getElementsByTagName('progress')[0];
            progressBar.classList.add('e-upload-success');
            li.getElementsByClassName('percent')[0].classList.add('e-upload-success');
            const height = this.dropAreaRef.style.height;
            this.dropAreaRef.style.height = parseInt(height, 10) - 15 + 'px';
        }
    }
    onSelect(args) {
        const length = args.filesData.length;
        let height = this.dropAreaRef.style.height;
        height = parseInt(height, 10) + (length * 55) + 'px';
        this.dropAreaRef.style.height = height;
    }
    onuploadFailed(args) {
        const li = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
        const progressBar = li.getElementsByTagName('progress')[0];
        progressBar.classList.add('e-upload-failed');
        li.getElementsByClassName('percent')[0].classList.add('e-upload-failed');
    }
    uploaderTemplate(data) {
        return (<div>
            <span className='wrapper'>
                <span className={'icon template-icons sf-icon-${data.type}'}/>
                <span className='name file-name'>{data.name}</span>
            </span>
                <span className='file-size-td file-size'>{data.size} bytes</span>
                <span className='e-icons e-file-remove-btn' title='Remove'/> <br />
                <progress id='progressBar' className='progressbar' value='0' max='100'/>
                <span className='percent-td percent'/>
            </div>);
    }
    render() {
        return (<div id='dropArea' onClick={this.dropAreaClick = this.dropAreaClick.bind(this)} ref={dropEle => { this.dropAreaRef = dropEle; }}>
                <span id='drop'> Drop files here or <a href="" id='browse' onClick={this.browseClick = this.browseClick.bind(this)}><u>Browse</u></a> </span>
                <UploaderComponent id='UploadFiles' ref={upload => { this.uploadObj = upload; }} asyncSettings={this.path} progress={this.onFileUpload = this.onFileUpload.bind(this)} selected={this.onSelect = this.onSelect.bind(this)} success={this.onuploadSuccess = this.onuploadSuccess.bind(this)} failure={this.onuploadFailed = this.onuploadFailed.bind(this)} template={this.uploaderTemplate} created={this.onCreated = this.onCreated.bind(this)}/>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}