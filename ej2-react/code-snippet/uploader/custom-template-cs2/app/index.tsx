{% raw %}


import {  createElement, detach, EventHandler, select } from '@syncfusion/ej2-base';
import { FileInfo, RemovingEventArgs, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
  let uploadObj;
  let dropAreaRef;
  let filesDetails = [];
  let filesList = [];
  let path = {
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove/',
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save/',
  };
  removeFiles = removeFiles.bind(this);
  function onCreated() {
    uploadObj.dropArea = dropAreaRef;
    uploadObj.dataBind();
  }
  function browseClick(args) {
    const wrapperEle = select('.e-file-select-wrap button', document);
    wrapperEle.click();
    args.preventDefault();
  }
  function onSuccess(args) {
    const li = dropAreaRef.querySelector(
      '[data-file-name="' + args.file.name + '"]'
    );
    if (args.operation === 'upload') {
      li.querySelector('.close-icon-container').classList.add('delete-icon');
      detach(li.getElementsByTagName('progress')[0]);
      li.querySelector('.file-size').style.display = 'inline-block';
      li.querySelector('.file-name').style.color = 'green';
    } else {
      uploadObj.element.value = '';
      detach(li);
    }
    EventHandler.add(
      li.querySelector('.close-icon-container'),
      'click',
      removeFiles,
      this
    );
  }
  function onFileSelect(args) {
    if (dropAreaRef.querySelector('.upload-list-root') === null) {
      parentElement = createElement('div', {
        className: 'upload-list-root',
      });
      parentElement.appendChild(
        createElement('ul', { className: 'ul-element' })
      );
      dropAreaRef.appendChild(parentElement);
    }
    for (const i of args.filesData) {
      formSelectedData(i, this); // create the LI element for each file Data
    }
    filesDetails = filesDetails.concat(args.filesData);
    uploadObj.upload(args.filesData, true);
    args.cancel = true;
  }
  function formSelectedData(selectedFiles, proxy) {
    const liEle = createElement('li', {
      className: 'file-lists',
      attrs: { 'data-file-name': selectedFiles.name },
    });
    liEle.appendChild(
      createElement('span', {
        className: 'file-name ',
        innerHTML: selectedFiles.name,
      })
    );
    liEle.appendChild(
      createElement('span', {
        className: 'file-size ',
        innerHTML: uploadObj.bytesToSize(selectedFiles.size),
      })
    );
    if (selectedFiles.statusCode === '1') {
      progressbarContainer = createElement('span', {
        className: 'progress-bar-container',
      });
      progressbarContainer.appendChild(
        createElement('progress', {
          className: 'progress',
          attrs: { value: '0', max: '100' },
        })
      );
      liEle.appendChild(progressbarContainer);
    } else {
      liEle.querySelector('.file-name').classList.add('upload-fails');
    }
    const closeIconContainer = createElement('span', {
      className: 'e-icons close-icon-container',
    });
    EventHandler.add(closeIconContainer, 'click', removeFiles, proxy);
    liEle.appendChild(closeIconContainer);
    document.querySelector('.ul-element').appendChild(liEle);
    filesList.push(liEle);
  }
  function onFileUpload(args) {
    const li = dropAreaRef.querySelector(
      '[data-file-name="' + args.file.name + '"]'
    );
    EventHandler.remove(
      li.querySelector('.close-icon-container'),
      'click',
      removeFiles
    );
    const progressValue = Math.round((args.e.loaded / args.e.total) * 100);
    if (!isNaN(progressValue)) {
      li.getElementsByTagName('progress')[0].value = progressValue; // Updating the progress bar value
    }
  }
  function onUploadFailed(args) {
    const li = dropAreaRef.querySelector(
      '[data-file-name="' + args.file.name + '"]'
    );
    EventHandler.add(
      li.querySelector('.close-icon-container'),
      'click',
      removeFiles,
      this
    );
    li.querySelector('.file-name ').classList.add('upload-fails');
    if (args.operation === 'upload') {
      detach(li.querySelector('.progress-bar-container'));
    }
  }
  function removeFiles(args) {
    const status =
      filesDetails[filesList.indexOf(args.currentTarget.parentElement)]
        .statusCode;
    if (status === '2') {
      uploadObj.remove(
        filesDetails[filesList.indexOf(args.currentTarget.parentElement)]
      );
    } else {
      detach(args.currentTarget.parentElement);
    }
  }
  function onFileRemove(args) {
    args.postRawFile = false;
  }
  return (
    <div
      id="dropArea"
      className="dropArea"
      ref={(dropAreaEle) => (dropAreaRef = dropAreaEle)}
    >
      <span id="drop" className="file-name-span drop">
        {' '}
        Drop files here or{' '}
        <a href="" id="browse" onClick={(browseClick = browseClick.bind(this))}>
          <u>Browse</u>
        </a>{' '}
      </span>
      <UploaderComponent id="fileUpload" type="file" ref={(upload) => {uploadObj = upload;}} asyncSettings={path}
        success={(onSuccess = onSuccess.bind(this))}
        selected={(onFileSelect = onFileSelect.bind(this))}
        progress={(onFileUpload = onFileUpload.bind(this))}
        failure={(onUploadFailed = onUploadFailed.bind(this))}
        created={(onCreated = onCreated.bind(this))}
        removing={(onFileRemove = onFileRemove.bind(this))} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('fileupload'));



{% endraw %}