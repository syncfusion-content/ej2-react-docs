---
layout: post
title: Open and edit uploaded files in React Uploader Component | Syncfusion
description: Learn here all about open and edit the uploaded files in Syncfusion Essential React Uploader it's elements and more.
control: Open and edit the uploaded files 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open and edit uploaded files in React Uploader Component

The uploader component allows you to modify the file after uploading to the server, which can be achieved using success event of the uploader.

You can retrieve the saved file path in the uploader success event and assign it to custom attribute (data-file-name) value of the respective file list element to open the uploaded file. Click the respective file element to create a new request along with saved file path using http header. In the server-side, get the file path from the header and open the file using `process.start` method.

```ts
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
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
  public onUploadSuccess(args: any): void {
    // fetching the generated li elements
        const liElements: any = document.body.querySelectorAll('.e-upload-file-list');
        for (const i of liElements) {
            if (liElements[i].getAttribute('data-file-name') === args.file.name) {
                liElements[i].addEventListener('click', () => { this.openFile(args, event) })
                // File path have to update from server end in response status description.
                liElements[i].setAttribute('file-path', args.e.target.statusText);
            }
        }
    }
    public openFile(args: any, e: any) {
        if (!e.target.classList.contains('e-file-delete-btn') && !e.target.classList.contains('e-file-remove-btn'))
        {
            const ajax = new XMLHttpRequest();
            // create new request for open the selected file
            ajax.open("POST", '/Home/openFile');
            const liElements = document.getElementsByClassName('e-upload')[0].querySelectorAll('.e-upload-file-list') as any;
            for (const i of liElements as any) {
                if (liElements[i].getAttribute('data-file-name') === args.file.name) {
                    // Added the file path in header to get it in server side.
                ajax.setRequestHeader('filePath', liElements[i].getAttribute('file-path').toString());
                }
            }
            ajax.send();
        }
    }
    public render(): JSX.Element {
        return (
            <div className = 'control-pane'>
                <div className='control-section row uploadpreview'>
                <div className='col-lg-9'>
                <div className='upload_wrapper'>
                    {/* Render Uploader */}
                    <UploaderComponent id='fileUpload' type='file' ref = {upload => {this.uploadObj = upload !}}
                    asyncSettings = {this.path}
                    success={ this.onUploadSuccess = this.onUploadSuccess.bind(this)} created={this.onCreated = this.onCreated.bind(this)} />
                </div>
                </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
```

## Server side for open and edit the uploaded files

```csharp
public void Save() {
    if (!System.IO.File.Exists(fileSavePath))
    {
        httpPostedFile.SaveAs(fileSavePath);
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        <!-- Sending the file path to client side -->
        Response.StatusDescription = fileSavePath;
        Response.End();
    }
}

[AcceptVerbs("Post")]
public void openFile()
{
    // Check whether the file is available in the corresponding location
    if (System.IO.File.Exists(Request.Headers.GetValues("filePath").First()))
    {
        // This will open the selected file from server location in desktop
        Process.Start(Request.Headers.GetValues("filePath").First());
    }
}
```

>You can also explore [React File Upload](https://www.syncfusion.com/react-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
