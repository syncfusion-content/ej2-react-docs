{% raw %}


import {  detach, select } from '@syncfusion/ej2-base';
import { SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let uploadObj: UploaderComponent;
    const path: object = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
      }
    let dropAreaRef: HTMLElement;
        function onCreated(): void {
            uploadObj.dropArea = dropAreaRef;
            uploadObj.dataBind();
        }
        function dropAreaClick(args: React.MouseEvent): void {
            const target: any = args.target as HTMLElement;
        if (target.classList.contains('e-file-delete-btn')) {
            for (const i of  uploadObj.getFilesData()) {
                if (target.closest('li').getAttribute('data-file-name') === i.name) {
                    uploadObj.remove(uploadObj.getFilesData()[uploadObj.getFilesData().indexOf(i)]);
                }
            }
        } else if (target.classList.contains('e-file-remove-btn')) {
            detach(target.closest('li'));
        }
        }
        function browseClick(args: React.MouseEvent): any {
          const wrapperEle: HTMLElement = select('.e-file-select-wrap button', document) as HTMLElement;
          wrapperEle.click();
          args.preventDefault();
        }

        function onFileUpload(args: any): void {
            const li: HTMLElement = dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]') as any;
            const progressValue: number = Math.round((args.e.loaded / args.e.total) * 100);
            li.getElementsByTagName('progress')[0].value = progressValue;
            li.getElementsByClassName('percent')[0].textContent = progressValue.toString() + " %";
        }
        function onuploadSuccess(args: any): void {
            if (args.operation === 'remove') {
                let height: any = dropAreaRef.style.height;
                height = (parseInt(height, 10) - 40) + 'px';
                dropAreaRef.style.height = height;
            } else {
                const li: HTMLElement = dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]') as any;
                const progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
                progressBar.classList.add('e-upload-success');
                li.getElementsByClassName('percent')[0].classList.add('e-upload-success');
                const height: any = dropAreaRef.style.height;
                dropAreaRef.style.height = parseInt(height, 10) - 15 + 'px';
            }
        }
        function onSelect(args: SelectedEventArgs): void {
            const length: number = args.filesData.length;
            let height: any = dropAreaRef.style.height;
            height = parseInt(height, 10) + (length * 55) + 'px';
            dropAreaRef.style.height = height;
        }
        function onuploadFailed(args: any): void {
            const li: HTMLElement = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]') as any;
            const progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
            progressBar.classList.add('e-upload-failed');
            li.getElementsByClassName('percent')[0].classList.add('e-upload-failed');
        }
        function uploaderTemplate(data: any): JSX.Element {
        return (
            <div>
            <span className='wrapper'>
                <span className={'icon template-icons sf-icon-${data.type}'} />
                <span className='name file-name'>{data.name}</span>
            </span>
                <span className='file-size-td file-size'>{data.size} bytes</span>
                <span className='e-icons e-file-remove-btn' title='Remove' /> <br/>
                <progress id='progressBar' className='progressbar' value='0' max='100' />
                <span className='percent-td percent' />
            </div>);
        }

            return (
                <div id='dropArea' onClick={dropAreaClick = dropAreaClick.bind(this)} ref={dropEle => {dropAreaRef = dropEle!}}>
                <span id='drop'> Drop files here or <a href="" id='browse' onClick={browseClick = browseClick.bind(this)}><u>Browse</u></a> </span>
                <UploaderComponent id='UploadFiles'  ref = {upload => {uploadObj = upload !}} asyncSettings={path}
                progress={onFileUpload = onFileUpload.bind(this)} selected={onSelect = onSelect.bind(this)} success={onuploadSuccess = onuploadSuccess.bind(this)} failure={onuploadFailed = onuploadFailed.bind(this)} template={uploaderTemplate} created={onCreated = onCreated.bind(this)}/>
            </div>);
}
ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}