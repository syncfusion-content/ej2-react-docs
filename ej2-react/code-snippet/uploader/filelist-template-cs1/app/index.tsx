{% raw %}



import {  detach, select } from '@syncfusion/ej2-base';
import { SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
     public uploadObj: UploaderComponent;
      public path: object = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
      }
        private dropAreaRef: HTMLElement;
        public onCreated(): void {
            this.uploadObj.dropArea = this.dropAreaRef;
            this.uploadObj.dataBind();
        }
        public dropAreaClick(args: React.MouseEvent): void {
            const target: any = args.target as HTMLElement;
        if (target.classList.contains('e-file-delete-btn')) {
            for (const i of  this.uploadObj.getFilesData()) {
                if (target.closest('li').getAttribute('data-file-name') === i.name) {
                    this.uploadObj.remove(this.uploadObj.getFilesData()[this.uploadObj.getFilesData().indexOf(i)]);
                }
            }
        } else if (target.classList.contains('e-file-remove-btn')) {
            detach(target.closest('li'));
        }
        }
        public browseClick(args: React.MouseEvent): any {
          const wrapperEle: HTMLElement = select('.e-file-select-wrap button', document) as HTMLElement;
          wrapperEle.click();
          args.preventDefault();
        }

        public onFileUpload(args: any): void {
            const li: HTMLElement = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]') as any;
            const progressValue: number = Math.round((args.e.loaded / args.e.total) * 100);
            li.getElementsByTagName('progress')[0].value = progressValue;
            li.getElementsByClassName('percent')[0].textContent = progressValue.toString() + " %";
        }
        public onuploadSuccess(args: any): void {
            if (args.operation === 'remove') {
                let height: any = this.dropAreaRef.style.height;
                height = (parseInt(height, 10) - 40) + 'px';
                this.dropAreaRef.style.height = height;
            } else {
                const li: HTMLElement = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]') as any;
                const progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
                progressBar.classList.add('e-upload-success');
                li.getElementsByClassName('percent')[0].classList.add('e-upload-success');
                const height: any = this.dropAreaRef.style.height;
                this.dropAreaRef.style.height = parseInt(height, 10) - 15 + 'px';
            }
        }
        public onSelect(args: SelectedEventArgs): void {
            const length: number = args.filesData.length;
            let height: any = this.dropAreaRef.style.height;
            height = parseInt(height, 10) + (length * 55) + 'px';
            this.dropAreaRef.style.height = height;
        }
        public onuploadFailed(args: any): void {
            const li: HTMLElement = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]') as any;
            const progressBar: HTMLElement = li.getElementsByTagName('progress')[0];
            progressBar.classList.add('e-upload-failed');
            li.getElementsByClassName('percent')[0].classList.add('e-upload-failed');
        }
        public uploaderTemplate(data: any): JSX.Element {
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

        public render(): JSX.Element{
            return (
                <div id='dropArea' onClick={this.dropAreaClick = this.dropAreaClick.bind(this)} ref={dropEle => {this.dropAreaRef = dropEle!}}>
                <span id='drop'> Drop files here or <a href="" id='browse' onClick={this.browseClick = this.browseClick.bind(this)}><u>Browse</u></a> </span>
                <UploaderComponent id='UploadFiles'  ref = {upload => {this.uploadObj = upload !}} asyncSettings={this.path}
                progress={this.onFileUpload = this.onFileUpload.bind(this)} selected={this.onSelect = this.onSelect.bind(this)} success={this.onuploadSuccess = this.onuploadSuccess.bind(this)} failure={this.onuploadFailed = this.onuploadFailed.bind(this)} template={this.uploaderTemplate} created={this.onCreated = this.onCreated.bind(this)}/>
            </div>);
        }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}