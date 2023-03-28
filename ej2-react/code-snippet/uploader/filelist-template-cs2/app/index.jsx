{% raw %}
import { detach, select } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    let uploadObj;
    const path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    let dropAreaRef;
    function onCreated() {
        uploadObj.dropArea = dropAreaRef;
        uploadObj.dataBind();
    }
    function dropAreaClick(args) {
        const target = args.target;
        if (target.classList.contains('e-file-delete-btn')) {
            for (const i of uploadObj.getFilesData()) {
                if (target.closest('li').getAttribute('data-file-name') === i.name) {
                    uploadObj.remove(uploadObj.getFilesData()[uploadObj.getFilesData().indexOf(i)]);
                }
            }
        }
        else if (target.classList.contains('e-file-remove-btn')) {
            detach(target.closest('li'));
        }
    }
    function browseClick(args) {
        const wrapperEle = select('.e-file-select-wrap button', document);
        wrapperEle.click();
        args.preventDefault();
    }
    function onFileUpload(args) {
        const li = dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
        const progressValue = Math.round((args.e.loaded / args.e.total) * 100);
        li.getElementsByTagName('progress')[0].value = progressValue;
        li.getElementsByClassName('percent')[0].textContent = progressValue.toString() + " %";
    }
    function onuploadSuccess(args) {
        if (args.operation === 'remove') {
            let height = dropAreaRef.style.height;
            height = (parseInt(height, 10) - 40) + 'px';
            dropAreaRef.style.height = height;
        }
        else {
            const li = dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
            const progressBar = li.getElementsByTagName('progress')[0];
            progressBar.classList.add('e-upload-success');
            li.getElementsByClassName('percent')[0].classList.add('e-upload-success');
            const height = dropAreaRef.style.height;
            dropAreaRef.style.height = parseInt(height, 10) - 15 + 'px';
        }
    }
    function onSelect(args) {
        const length = args.filesData.length;
        let height = dropAreaRef.style.height;
        height = parseInt(height, 10) + (length * 55) + 'px';
        dropAreaRef.style.height = height;
    }
    function onuploadFailed(args) {
        const li = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
        const progressBar = li.getElementsByTagName('progress')[0];
        progressBar.classList.add('e-upload-failed');
        li.getElementsByClassName('percent')[0].classList.add('e-upload-failed');
    }
    function uploaderTemplate(data) {
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
    return (<div id='dropArea' onClick={dropAreaClick = dropAreaClick.bind(this)} ref={dropEle => { dropAreaRef = dropEle; }}>
                <span id='drop'> Drop files here or <a href="" id='browse' onClick={browseClick = browseClick.bind(this)}><u>Browse</u></a> </span>
                <UploaderComponent id='UploadFiles' ref={upload => { uploadObj = upload; }} asyncSettings={path} progress={onFileUpload = onFileUpload.bind(this)} selected={onSelect = onSelect.bind(this)} success={onuploadSuccess = onuploadSuccess.bind(this)} failure={onuploadFailed = onuploadFailed.bind(this)} template={uploaderTemplate} created={onCreated = onCreated.bind(this)}/>
            </div>);
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}