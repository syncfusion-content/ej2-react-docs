{% raw %}
import { createElement, detach, EventHandler, select } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    uploadObj;
    parentElement;
    proxy;
    progressbarContainer;
    filesDetails = [];
    filesList = [];
    path = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove/',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save/'
    };
    dropAreaEle;
    dropAreaRef;
    constructor(props) {
        super(props);
        this.removeFiles = this.removeFiles.bind(this);
    }
    onCreated() {
        this.uploadObj.dropArea = this.dropAreaRef;
        this.uploadObj.dataBind();
    }
    browseClick(args) {
        const wrapperEle = select('.e-file-select-wrap button', document);
        wrapperEle.click();
        args.preventDefault();
    }
    onSuccess(args) {
        const li = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
        if (args.operation === 'upload') {
            li.querySelector('.close-icon-container').classList.add('delete-icon');
            detach(li.getElementsByTagName('progress')[0]);
            li.querySelector('.file-size').style.display = 'inline-block';
            li.querySelector('.file-name').style.color = 'green';
        }
        else {
            this.uploadObj.element.value = '';
            detach(li);
        }
        EventHandler.add(li.querySelector('.close-icon-container'), 'click', this.removeFiles, this);
    }
    onFileSelect(args) {
        if ((this.dropAreaRef.querySelector('.upload-list-root')) === null) {
            this.parentElement = createElement('div', { className: 'upload-list-root' });
            this.parentElement.appendChild(createElement('ul', { className: 'ul-element' }));
            this.dropAreaRef.appendChild(this.parentElement);
        }
        for (const i of args.filesData) {
            this.formSelectedData(i, this); // create the LI element for each file Data
        }
        this.filesDetails = this.filesDetails.concat(args.filesData);
        this.uploadObj.upload(args.filesData, true);
        args.cancel = true;
    }
    formSelectedData(selectedFiles, proxy) {
        const liEle = createElement('li', { className: 'file-lists', attrs: { 'data-file-name': selectedFiles.name } });
        liEle.appendChild(createElement('span', { className: 'file-name ', innerHTML: selectedFiles.name }));
        liEle.appendChild(createElement('span', { className: 'file-size ', innerHTML: this.uploadObj.bytesToSize(selectedFiles.size) }));
        if (selectedFiles.statusCode === '1') {
            this.progressbarContainer = createElement('span', { className: 'progress-bar-container' });
            this.progressbarContainer.appendChild(createElement('progress', { className: 'progress', attrs: { value: '0', max: '100' } }));
            liEle.appendChild(this.progressbarContainer);
        }
        else {
            liEle.querySelector('.file-name').classList.add('upload-fails');
        }
        const closeIconContainer = createElement('span', { className: 'e-icons close-icon-container' });
        EventHandler.add(closeIconContainer, 'click', this.removeFiles, proxy);
        liEle.appendChild(closeIconContainer);
        document.querySelector('.ul-element').appendChild(liEle);
        this.filesList.push(liEle);
    }
    onFileUpload(args) {
        const li = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
        EventHandler.remove(li.querySelector('.close-icon-container'), 'click', this.removeFiles);
        const progressValue = Math.round((args.e.loaded / args.e.total) * 100);
        if (!isNaN(progressValue)) {
            li.getElementsByTagName('progress')[0].value = progressValue; // Updating the progress bar value
        }
    }
    onUploadFailed(args) {
        const li = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
        EventHandler.add(li.querySelector('.close-icon-container'), 'click', this.removeFiles, this);
        li.querySelector('.file-name ').classList.add('upload-fails');
        if (args.operation === 'upload') {
            detach(li.querySelector('.progress-bar-container'));
        }
    }
    removeFiles(args) {
        const status = this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)].statusCode;
        if (status === '2') {
            this.uploadObj.remove(this.filesDetails[this.filesList.indexOf(args.currentTarget.parentElement)]);
        }
        else {
            detach(args.currentTarget.parentElement);
        }
    }
    onFileRemove(args) {
        args.postRawFile = false;
    }
    render() {
        return (<div id='dropArea' className='dropArea' ref={dropAreaEle => this.dropAreaRef = dropAreaEle}>
           <span id='drop' className='file-name-span drop'> Drop files here or <a href="" id='browse' onClick={this.browseClick = this.browseClick.bind(this)}><u>Browse</u></a> </span>
             <UploaderComponent id='fileUpload' type='file' ref={upload => { this.uploadObj = upload; }} asyncSettings={this.path} success={this.onSuccess = this.onSuccess.bind(this)} selected={this.onFileSelect = this.onFileSelect.bind(this)} progress={this.onFileUpload = this.onFileUpload.bind(this)} failure={this.onUploadFailed = this.onUploadFailed.bind(this)} created={this.onCreated = this.onCreated.bind(this)} removing={this.onFileRemove = this.onFileRemove.bind(this)}/>
         </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}