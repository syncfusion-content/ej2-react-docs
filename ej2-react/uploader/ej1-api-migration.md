---
layout: post
title: Ej1 api migration in React Uploader component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Uploader component

This article describes the API migration process of File Upload component from Essential JS 1 to Essential JS 2.

## Accessibility

{% raw %}

<!-- markdownlint-disable MD033 -->
| **Behavior**           | **Property in Essential JS 1**     |        **Property in Essential JS 2**       |
| -----------------------| -----------------------------------| ------------------------------------------- |
| Localization           | **Property** : locale <br/> <br/>`<EJ.Uploadbox id="UploadDefault" locale= 'es-ES'></EJ.Uploadbox>` | **Property** : locale <br/> <br/>`<UploaderComponent id='fileUpload' locale='es-ES' />` |
| Right to left | **Property:** enableRTL <br/> <br/>`<EJ.Uploadbox id="UploadDefault" enableRTL= {true}></EJ.Uploadbox>`  | **Property:** enableRTL <br/> <br/>`<UploaderComponent id='fileUpload' enableRtl= {true} />`

## File List

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Show/Hide the selected files | **Property** : showFileDetails <br/> <br/>`<EJ.Uploadbox id="UploadDefault" showFileDetails= {false}></EJ.Uploadbox>`  | **Property** :  showFileList <br/> <br/>`<UploaderComponent id='fileUpload' showFileList= {false} />`  |
| Customizing the file list | Not Applicable  | **Property** : template <br/> <br/>`<UploaderComponent id='fileUpload' template='#templateid' />`  |
| Get the files in sorted form | Not Applicable | **Method:** SortFileList<br/> <br/>`<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} />`<br/><br/>`constructor(props: {}) {`<br/>`this.uploadObj.sortFileList(files);`<br/>`}` <br/> |
| Clearing File List | Not Applicable | **Method:** ClearAll <br/> <br/>`<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} />`<br/><br/>`constructor(props: {}) {`<br/>`this.uploadObj.clearAll();`<br/>`}` <br/> |
| Event triggers when clearing Files | Not Applicable | **Event :** clearing <br/>  <br/>`<UploaderComponent id='fileUpload' clearing= { this.onClearing.bind(this) } />`<br/> <br/>`private onClearing(ClearingEventArgs): void  { }` <br/> |

## File selection

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Select multiple files to upload | **Property** : multipleFilesSelection <br/><br/>`<EJ.Uploadbox id="UploadDefault" multipleFilesSelection= {true}></EJ.Uploadbox>`  | **Property** : multiple <br/><br/>`<UploaderComponent id='fileUpload' multiple= {true} />` |
| Set minimum file size to upload | **Not Applicable** | **Property** : minFileSize <br /><br /> `<UploaderComponent id='fileUpload' minFileSize ={this.minFileSize} />`<br/><br/>`constructor(props: {}) { this.minFileSize= 1024;`<br/> `}` |
| Set maximum file size to upload | **Property** : fileSize <br/><br/>`<EJ.Uploadbox id="UploadDefault" fileSize= '5000'></EJ.Uploadbox>` | **Property** : maxFileSize <br/><br/>`<UploaderComponent id='fileUpload' maxFileSize= {this.maxFileSize} />`<br/><br/>`constructor(props: {}) { this.maxFileSize= 5000;`<br/>`}` |
| Allowed file types to select | **Property** :  extensionsAllow <br/><br/>`<EJ.Uploadbox id="UploadDefault" extensionsAllow='.zip'/></EJ.Uploader>`  | **Property:** allowedExtensions <br/> <br/>`<UploaderComponent id='fileUpload' allowedExtensions= {this.allowedExtensions} /> constructor(props: {}) { this.allowedExtensions='.pdf'; }` |
| Restricted files types to select | **Property:** extensionsDeny <br/> <br/>`<EJ.Uploadbox id="UploadDefault" extensionsDeny='.docx'></EJ.Uploadbox>` |   **Not Applicable** |
| Display only selected details in File list | **Property** :  customFileDetails<br/> <br/>`<EJ.Uploadbox id="UploadDefault" customFileDetails={this.customFileDetails}></EJ.Uploadbox>`<br/><br/>`customFileDetails(): void  {`<br/>`title: false,`<br/>`name: true,`<br/>`size: true,`<br/>`status: true,`<br/>`action: false`<br/>`}` <br/> | **Not Applicable** |
| Options to customize File list dialog | **Property:** dialogAction <br/> <br/>`<EJ.Uploadbox id="UploadDefault" dialogAction={this.dialogAction}></EJ.Uploadbox>`<br/><br/>`dialogAction(): void  {`<br/>`modal: false,`<br/>`closeOnComplete: true,`<br/>`resize: true,`<br/>`drag: false,`<br/>`content:'#dialogTarget'`<br/>`}` <br/> | **Not Applicable** |
| Customize dialog position | **Property:** dialogPosition<br/><br/>`<EJ.Uploadbox id="UploadDefault" dialogPosition={this.position}></EJ.Uploadbox> position(): void  { X: 300, Y: 100}`<br/> | **Not Applicable** |
| Change file list key values | **Property:** dialogText<br/> <br/>`<EJ.Uploadbox id="UploadDefault" dialogText={this.dlgText}></EJ.Uploadbox>`<br/><br/>`dlgText(): void  {`<br/>`title: Upload File List,`<br/>`name: File Name,`<br/>`size: File Size,`<br/>`}`<br/> | **Not Applicable** |
| Change drop area text | **Property:**  dropAreaText<br/> <br/>`<EJ.Uploadbox id="UploadDefault" dropAreaText= 'Drop files here'></EJ.Uploadbox>`  | No separate Property to change dropAreaText. It can be customize using locale Texts |
| Change drop area height | **Property:** dropAreaHeight<br/> <br/>`<EJ.Uploadbox id="UploadDefault" dropAreaHeight= '100%'></EJ.Uploadbox>`  | Not Applicable |
| Change drop area width | **Property:** dropAreaWidth <br/> <br/>`<EJ.Uploadbox id="UploadDefault" dropAreaWidth= '100%'></EJ.Uploadbox>`  | Not Applicable |
| Dynamically push the file | **Property:** pushFile<br/> <br/>`<EJ.Uploadbox id="UploadDefault" pushFile= {files} /></EJ.Uploadbox>`  | Not Applicable |
| Show the files uploader in server already. | **Not Applicable** | **Property:** files <br/><br/>`<UploaderComponent id='validation' type='file'>`<br/>`<FilesDirective>`<br/>`<UploadedFilesDirective name="Nature" size={25000}type=".png">`<br/>`</UploadedFilesDirective>`<br/>`</FilesDirective>`<br/>`</UploaderComponent>`<br/>  |
| Event triggers when select the file successfully | **Event:** fileSelect <br/> <br/>`<EJ.Uploadbox id="UploadDefault" fileSelect= {this.onFileSelect} /></EJ.Uploadbox>`<br/><br/>`onFileSelect ():void {}`<br/>  | **Event:** selected<br/> <br/>`<UploaderComponent id='fileUpload' selected= { this.onFileSelect.bind(this) } />`<br/><br/>`private onFileSelect(): void  { }`<br/> |

## Upload action

<!-- markdownlint-disable MD038 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Save URL | **Property** : saveUrl <br/><br/>`<EJ.Uploadbox id="UploadDefault" saveUrl= {savefiles}></EJ.Uploadbox>` | **Property** : saveUrl<br/><br/>`<UploaderComponent id='fileUpload' asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) {`<br/>`this.asyncSettings = {`<br/>`saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',`<br/>`};}`  |
| Remove URL | **Property** : removeUrl<br/> <br/>`<EJ.Uploadbox id="UploadDefault" removeUrl= {removefiles}></EJ.Uploadbox>` | **Property** : removeUrl<br/> <br/>`<UploaderComponent id='fileUpload' asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) {`<br/>`this.asyncSettings = {`<br/>`removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',`<br/>`};}`  |
| Automatically upload the file when files added in to upload queue | **Property:** autoUpload <br/> <br/>`<EJ.Uploadbox id="UploadDefault" autoUpload= {false}></EJ.Uploadbox>`  | **Property:** autoUpload<br/> <br/>`<UploaderComponent id='fileUpload' autoUpload= {false} />`  |
| Synchronous upload | **Property:** asyncUpload<br/> <br/>`<EJ.Uploadbox id="UploadDefault" ayncUpload= {false}></EJ.Uploadbox>`  | No Separate Property for enabling synchronous upload.  It can be enabling by using below configuration <br/><br/>`<UploaderComponent id='fileUpload' autoUpload= {false} />`  |
| Key to get the selected files in server side | **Property:**  uploadName<br/> <br/>`<EJ.Uploadbox id="UploadDefault" uploadName='Uploadkey'></EJ.Uploadbox>`  | Id of the element used as key value |
| Upload the files dynamically | **Not Applicable** | Method: upload()<br/> <br/>`<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) {`<br/>`this.asyncSettings = {`<br/>`saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',`<br/>`removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove', };`<br/>`this.uploadObj.upload = filesData;`<br/>`}`<br/> |
| Event triggers before start to upload the action | **Event:** beforeSend<br/> <br/>`<EJ.Uploadbox id="UploadDefault" onBeforeSend= {this.onBeforeSend}></EJ.Uploadbox>`<br/><br/>`onBeforeSend() { };`<br/> | **Event** : uploading<br/> <br/>`<UploaderComponent id='fileUpload' uploading= { this.beforeUploadStart.bind(this) } />`<br/> <br/>` private beforeUploadStart(): void  { }`<br/>  |
| Event triggers when the upload is in progress | **Event:** inProgress<br/> <br/>`<EJ.Uploadbox id="UploadDefault" inProgress= {this.uploadInprogress}></EJ.Uploadbox>`<br/><br/>`uploadInprogress() { };`<br/> | **Event** : progress<br/> <br/>`<UploaderComponent id='fileUpload' progress= { this.uploadInprogress.bind(this) } />`<br/> <br/>`private uploadInprogress(): void  { }`<br/>  |
| Event triggers when upload got success | **Event:** success<br/> <br/> `<EJ.Uploadbox id="UploadDefault" success= {this.uploadSuccess}></EJ.Uploadbox>`<br/><br/>`uploadSuccess() { };`<br/>  | **Event** : success<br/> <br/>`<UploaderComponent id='fileUpload' success= { this.uploadSuccess.bind(this) } />`<br/> <br/>`private uploadSuccess(): void  { }`<br/> |
| Event triggers when upload got failed | **Event:** error<br/> <br/>`<EJ.Uploadbox id="UploadDefault" error= {this.onUploadError}></EJ.Uploadbox>`<br/><br/>`onUploadError() { };`<br/>   | **Event** : failure<br/> <br/>`<UploaderComponent id='fileUpload' failure= { this.uploadFailure.bind(this) } />`<br/> <br/>`private uploadFailure(): void  { }`<br/> |
| Event triggers when the upload got started | **Event:** begin <br/><br/>`<EJ.Uploadbox id="UploadDefault" begin= {this.onUploadBegin}></EJ.Uploadbox>`<br/><br/>`onUploadBegin() { };`<br/> |   **Not Applicable** |
| Event triggers when cancel the upload | **Event:** cancel<br/><br/> `<EJ.Uploadbox id="UploadDefault" cancel= {this.onUploadCancel}></EJ.Uploadbox>`<br/><br/>`onUploadCancel() { };` <br/> | **Event** : canceling<br/> <br/>`<UploaderComponent id='fileUpload' canceling= { this.uploadingCancel.bind(this) } />`<br/> <br/>`private uploadingCancel(): void  { }`<br/>  |
| Event triggers when the upload completed | **Event:** complete<br/> <br/>`<EJ.Uploadbox id="UploadDefault" complete= {this.onUploadComplete}></EJ.Uploadbox>`<br/><br/>`onUploadComplete() { };`<br/> | **Not Applicable** |

## Chunk Upload

<!-- markdownlint-disable MD038 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Enabling the chunk upload | Not Applicable | **Property:** chunkSize<br/><br/>`<UploaderComponent id='fileUpload' asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) { this.asyncSettings = { saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',chunkSize: 500000 };}`<br/>  |
| Retry the upload automatically when it's get failed | Not Applicable | **Property:** retryCount, retryAfterDelay<br/> <br/>`<UploaderComponent id='fileUpload' asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) { this.asyncSettings = { saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save', removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove', chunkSize: 500000, retryCount: 3, retryAfterDelay: 1000 };}`<br/>  |
| Pause the uploading file | Not Applicable | **Method:** pause<br/><br/> `<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) { this.asyncSettings = { saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save', removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove', chunkSize: 500000  }; this.uploadObj.pause = filesData; }`<br/> |
| Event triggers when pausing the file | Not Applicable | **Event:** pausing<br/> <br/>`<UploaderComponent id='fileUpload' pausing= { this.pausingUpload.bind(this)} />`<br/> <br/>` pausingUpload(): void  { }`<br/> |
| Resuming the paused file | Not Applicable | **Method:** resume<br/> <br/>`<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) { this.asyncSettings = { saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save', removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove', chunkSize: 500000 }; this.uploadObj.resume = filesData; }`<br/> |
| Event triggers when resuming the file | Not Applicable | **Event:** resuming<br/> <br/>`<UploaderComponent id='fileUpload' resuming= { this.resumingUpload.bind(this)} />`<br/> <br/>` private resumingUpload(): void  { `<br/> |
| Retry the failed file | Not Applicable | **Method:** retry<br/> <br/>`<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) { this.asyncSettings = { saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save', removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove', chunkSize: 500000  }; this.uploadObj.retry = filesData; }`<br/> |
| Cancel the failed file | Not Applicable | **Method:** cancel<br/> <br/>`<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) { this.asyncSettings = { saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save', removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove', chunkSize: 500000  }; this.uploadObj.cancel = filesData; }`<br/> |
| Event triggers when cancel the file | Not Applicable | **Event:** canceling<br/> <br/>`<UploaderComponent id='fileUpload' canceling= { this.cancelingUpload.bind(this) } />`<br/> <br/>`private cancelingUpload(): void  { }`<br/> |
| Event triggers when chunk file fails | Not Applicable | **Event:** chunkFailure<br/> <br/>`<UploaderComponent id='fileUpload' chunkFailure= { this.onChunkFailure.bind(this) } />`<br/> <br/>` private onChunkFailure(): void  { }`<br/> |
| Event triggers when chunk file success | Not Applicable | **Event:** chunkSuccess<br/> <br/>`<UploaderComponent id='fileUpload' chunkSuccess= { this.onChunkSuccess.bind(this) } />`<br/> <br/>`private onChunkSuccess(): void  { }`<br/> |

## Remove action

<!-- markdownlint-disable MD038 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Remove the uploaded file | Not Applicable | **Method:** remove<br/> <br/>`<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} asyncSettings = {this.asyncSettings} />`<br/><br/>`constructor(props: {}) {`<br/>`this.asyncSettings = {`<br/>`saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',`<br/>`removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',`<br/>`this.uploadObj.remove = filesData;`<br/>`}`<br/> |
| Event triggers when the file removing succeed | **Event:** remove<br/> <br/>`<EJ.Uploadbox id="UploadDefault" remove= {this.onRemove}></EJ.Uploadbox>`<br/><br/>`onRemove() { };`<br/> | **Event:** success<br/> <br/>`<UploaderComponent id='fileUpload' success= { this.onSuccess.bind(this) } />`<br/> <br/>`private onSuccess(): void  { }`<br/> |
| Event triggers when the file removing fails | **Not Applicable** | **Event:** failure<br/> <br/>`<UploaderComponent id='fileUpload' failure= { this.onFailure.bind(this) } />`<br/> <br/>`private onFailure(): void  { }`<br/> |

## Buttons

<!-- markdownlint-disable MD038 -->
| **Behavior** | **Property in essential JS 1** | **Property in essential JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Customize button text | **Property** : buttonText<br/> <br/>`<EJ.Uploadbox buttonText.browse='browse' buttonText.upload='upload' buttonText.cancel='cancel'></EJ.Uploadbox>`<br/><br/>`let browse: string = 'Choose File'`<br/>`let upload: string= 'Upload File'`<br/>`let cancel: string= 'Cancel Upload'`<br/> | **Property** : buttons<br/> <br/>`<UploaderComponent buttons={this.dlgbuttons}></ejs-uploader>`<br/><br/>`constructor(props: {}) {`<br/>`this.dlgbuttons {`<br/>`browse: 'Choose File'`<br/>`clear: 'Clear Files'`<br/>`upload: 'upload Files'`<br/>`}`<br/> |

## Drag and Drop

<!-- markdownlint-disable MD038 -->
| **Behavior** | **Property in Essential JS  1** | **Property in Essential JS 2** |
| ------------ | --------------------------------| ------------------------------ |
| Enable drag and drop upload | **Property** : allowDragAndDrop<br/> <br/>`<EJ.Uploadbox id="UploadDefault" allowDragAndDrop= {true}></EJ.Uploadbox>` | No separate Property to disabling drag and drop |
| Set custom drop area | **Not Applicable** | **Property** :  dropArea<br/> <br/> `<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} />`<br/><br/>`rendereComplete(): void {`<br/>`this.uploadObj.dropArea = this.dropContainerEle;`<br/>`}`  |

## Common

<!-- markdownlint-disable MD038 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------------ | ------------------------------ |
| Adding custom class to wrapper element | **Property** : cssClass<br/> <br/>`<EJ.Uploadbox id="UploadDefault" cssClass= 'Custom-Class'></EJ.Uploadbox>` | Not Applicable |
| Enable/Disable the control | **Property** : enabled<br/> <br/>`<EJ.Uploadbox id="UploadDefault" enabled= {false}></EJ.Uploadbox>`  **Method** : enable(), disable()<br/> | **Property:** enabled<br/><br/> `<UploaderComponent id='fileUpload' enabled= {false} />` |
| Set height for uploader | **Property:** height<br/> <br/>`<EJ.Uploadbox id="UploadDefault" height= '100%'></EJ.Uploadbox>`  | **Not Applicable** |
| Set width for uploader | **Property:** width<br/> <br/>`<EJ.Uploadbox id="UploadDefault" width= '100%'></EJ.Uploadbox>`  | **Not Applicable** |
| Adding HTML attributes | **Property:** htmlAttributes<br/><br/> `<EJ.Uploadbox id="UploadDefault" htmlAttribute= {this.htmlAttribute}></EJ.Uploadbox>`<br/><br/>`htmlAttribute () {`<br/>`'aria-label': 'Uploadbox'`<br/>`}`<br/> | **Not Applicable** |
| Event triggers when control created successfully | **Event:** create<br/><br/> `<EJ.Uploadbox id="UploadDefault" create= {this.onCreate}></EJ.Uploadbox>`<br/><br/>`onCreate() { };`<br/>  | **Event:** created<br/><br/> `<UploaderComponent id='fileUpload' created= { this.onCreated.bind(this) } />`<br/> <br/>` onCreated(): void  { }`<br/> |
| Event triggers when destroy the control | **Event:** destroy<br/> <br/> `<EJ.Uploadbox id="UploadDefault" destroy= {this.onDestroy}></EJ.Uploadbox>`<br/><br/>`onDestroy() { };`<br/> | **Not Applicable** |
| Keeping the model values in cookies | **Property:** enablePersistence<br/> <br/>`<EJ.Uploadbox id="UploadDefault" enablePersistence= {true}></EJ.Uploadbox>`  | **Property:** enablePersistence<br/> <br/>`<UploaderComponent id='fileUpload' enablePersistence= {true} />` |
| Get the selected files data | **Not Applicable** | **Method:** getFilesData<br/> <br/>`<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} />`<br/><br/>`constructor(props: {}) {`<br/>`this.uploadObj.getFilesData();`<br/>`}`<br/> |
| Convert bytes in to MB, GB | **Not Applicable** | **Method:** bytesToSize<br/> <br/>`<UploaderComponent id='fileUpload' ref = {(scope) => {this.uploadObj = scope}} />`<br/><br/>`constructor(props: {}) {`<br/>`this.uploadObj.bytesToSize(5000);`<br/>`}`<br/> |

{% endraw %}