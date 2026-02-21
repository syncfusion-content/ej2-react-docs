---
layout: post
title: Add additional data on upload in React Uploader component | Syncfusion
description: Learn here all about Add additional data on upload in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Add additional data on upload 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add additional data on upload in React Uploader component

The Uploader component allows you to send additional metadata along with file uploads to the server. Use the [uploading](https://ej2.syncfusion.com/react/documentation/api/uploader/#uploading) event and its customFormData argument to attach custom key-value pairs to the upload request.

The following code snippet demonstrates how to add additional data during file upload.

```ts
import { UploaderComponent, UploadingEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public uploadObj: UploaderComponent;
  public path: object = {
      removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
      saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  private dropAreaRef: HTMLElement;
  public onCreated(): void {
      this.uploadObj.dropArea = this.dropAreaRef;
      this.uploadObj.dataBind();
  }
  public onFileUpload(args: UploadingEventArgs) {
    // add addition data as key-value pair.
    args.customFormData = [{'name': 'Syncfusion INC'}];
  }
    public render(): JSX.Element {
        return (
            <div className = 'control-pane' ref={dropAreaEle => this.dropAreaRef = dropAreaEle!}>
            <div className='control-section row uploadpreview'>
            <div className='col-lg-9'>
            <div className='upload_wrapper'>
                {/* Render Uploader */}
                <UploaderComponent id='fileUpload' type='file' ref = {upload => {this.uploadObj = upload !}}
                asyncSettings = {this.path}
                uploading={this.onFileUpload = this.onFileUpload.bind(this)} created={this.onCreated = this.onCreated.bind(this)} />
            </div>
            </div>
            </div>
  </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));
```

## Server side for adding additional data

```csharp
    // Get the additional data in server end by corresponding key.
    var data = HttpContext.Current.Request.Form["name"];
```

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
