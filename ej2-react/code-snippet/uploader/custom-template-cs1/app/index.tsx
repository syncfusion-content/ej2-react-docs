{% raw %}



import {  createElement, detach, EventHandler, select } from '@syncfusion/ej2-base';
import { FileInfo, RemovingEventArgs, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    public uploadObj: UploaderComponent;
     public parentElement : HTMLElement; public proxy : any; public progressbarContainer : HTMLElement;
     public filesDetails : FileInfo[] = [];
     public filesList: HTMLElement[] = [];
     public path: object = {
       removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove/',
       saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save/'
     }
     public dropAreaEle: HTMLElement;
     public dropAreaRef: HTMLElement;
     constructor(props: any) {
         super(props)
         this.removeFiles = this.removeFiles.bind(this);
     }

     public onCreated(): void {
           this.uploadObj.dropArea = this.dropAreaRef;
           this.uploadObj.dataBind();
       }
     public browseClick(args: React.MouseEvent): any {
         const wrapperEle: HTMLElement = select('.e-file-select-wrap button', document) as HTMLElement;
         wrapperEle.click();
         args.preventDefault();
     }
     public onSuccess(args: any) : void {
       const li: any =  this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]') as HTMLElement;
       if (args.operation === 'upload') {
           li.querySelector('.close-icon-container').classList.add('delete-icon');
           detach(li.getElementsByTagName('progress')[0]);
           (li.querySelector('.file-size') as HTMLElement).style.display = 'inline-block';
           (li.querySelector('.file-name') as HTMLElement).style.color = 'green';
       } else {
           this.uploadObj.element.value = '';
           detach(li);
       }
       EventHandler.add(li.querySelector('.close-icon-container'), 'click', this.removeFiles, this);
     }

       public onFileSelect(args : SelectedEventArgs) : void  {
         if ((this.dropAreaRef.querySelector('.upload-list-root')) === null) {
             this.parentElement = createElement('div', { className: 'upload-list-root' });
             this.parentElement.appendChild(createElement('ul', {className: 'ul-element' }));
            this.dropAreaRef.appendChild(this.parentElement);
         }
         for (const i of args.filesData) {
             this.formSelectedData(i, this);  // create the LI element for each file Data
         }
         this.filesDetails = this.filesDetails.concat(args.filesData);
         this.uploadObj.upload(args.filesData, true);
         args.cancel = true;
     }

    public formSelectedData ( selectedFiles : FileInfo, proxy: any ) : void {
         const liEle : any = createElement('li',  { className: 'file-lists', attrs: {'data-file-name' : selectedFiles.name} });
         liEle.appendChild(createElement('span', {className: 'file-name ', innerHTML: selectedFiles.name }));
         liEle.appendChild(createElement('span', {className: 'file-size ', innerHTML: this.uploadObj.bytesToSize(selectedFiles.size) }));
         if (selectedFiles.statusCode === '1') {
             this.progressbarContainer = createElement('span', {className: 'progress-bar-container'});
             this.progressbarContainer.appendChild(createElement('progress', {className: 'progress', attrs: {value : '0', max : '100'}} ));
             liEle.appendChild(this.progressbarContainer);
         } else { liEle.querySelector('.file-name').classList.add('upload-fails'); }
         const closeIconContainer : HTMLElement = createElement('span', {className: 'e-icons close-icon-container'});
         EventHandler.add(closeIconContainer, 'click', this.removeFiles, proxy);
         liEle.appendChild(closeIconContainer);
         (document as any).querySelector('.ul-element').appendChild(liEle);
         this.filesList.push(liEle);
     }

    public onFileUpload(args : any) : void {
         const li : any = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
         EventHandler.remove(li.querySelector('.close-icon-container'), 'click', this.removeFiles);
         const progressValue : number = Math.round((args.e.loaded / args.e.total) * 100);
         if (!isNaN(progressValue)) {
             li.getElementsByTagName('progress')[0].value = progressValue;   // Updating the progress bar value
         }
     }
     public onUploadFailed(args : any) : void {
         const li : any = this.dropAreaRef.querySelector('[data-file-name="' + args.file.name + '"]');
         EventHandler.add(li.querySelector('.close-icon-container'), 'click', this.removeFiles, this);
         li.querySelector('.file-name ').classList.add('upload-fails');
         if (args.operation === 'upload') {
             detach(li.querySelector('.progress-bar-container'));
         }
     }
     public removeFiles(args : React.MouseEvent) : void {
         const status : string = this.filesDetails[this.filesList.indexOf((args.currentTarget as HTMLElement).parentElement as HTMLElement)].statusCode;
         if (status === '2') {
             this.uploadObj.remove(this.filesDetails[this.filesList.indexOf((args.currentTarget as HTMLElement).parentElement as HTMLElement)]);
         } else {
             detach((args.currentTarget as HTMLElement).parentElement as HTMLElement);
         }
     }
       public onFileRemove(args: RemovingEventArgs): void {
           args.postRawFile = false;
       }
     public render():JSX.Element{
       return (
         <div id='dropArea' className='dropArea' ref={dropAreaEle => this.dropAreaRef = dropAreaEle!}>
           <span id='drop' className='file-name-span drop'> Drop files here or <a href="" id='browse' onClick={this.browseClick = this.browseClick.bind(this)}><u>Browse</u></a> </span>
             <UploaderComponent id='fileUpload' type = 'file' ref = {upload => {this.uploadObj = upload !}}
               asyncSettings = {this.path}
               success={ this.onSuccess = this.onSuccess.bind(this) }
               selected= { this.onFileSelect = this.onFileSelect.bind(this) }
               progress = {this.onFileUpload = this.onFileUpload.bind(this) }
               failure = { this.onUploadFailed = this.onUploadFailed.bind(this) } created={this.onCreated = this.onCreated.bind(this)} removing={this.onFileRemove = this.onFileRemove.bind(this)}/>
         </div>);
       }
   }
ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}