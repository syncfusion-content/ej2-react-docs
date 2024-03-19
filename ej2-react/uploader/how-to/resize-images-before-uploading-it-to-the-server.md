---
layout: post
title: Resize images before upload in React Uploader component | Syncfusion
description: Learn here all about Resize images before uploading it to the server in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Resize images before uploading it to the server 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resize images before uploading it to the server in Uploader component

You can customize the dimension of the images before uploading it to the server.
By using selected event, you can get the selected file information as type of an object. From the obtained image file information, create a new canvas and render an image with the custom dimensions. Refer the corresponding code snippet as follows.

```ts
import { Browser, createElement, detach, EventHandler, isNullOrUndefined } from '@syncfusion/ej2-base';
import { createSpinner, hideSpinner, showSpinner } from '@syncfusion/ej2-popups';
import { FileInfo, RemovingEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';

export default class App extends React.Component<{}, {}> {
  public uploadObj: UploaderComponent;
  public newImage: any;
  public parentElement: HTMLElement;
  public proxy: any;
  public progressbarContainer: HTMLElement;
  public filesDetails: FileInfo[] = [];
  public filesList: HTMLElement[] = [];
  public path: object = {
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  constructor(props: any) {
    super(props);
    this.onSuccess= this.onSuccess.bind(this);
    this.onRemoveFile= this.onRemoveFile.bind(this);
    this.onFileSelect= this.onFileSelect.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.onUploadFailed= this.onUploadFailed.bind(this);
  }
  public onSuccess(args: any): void {
    const spinnerElement: HTMLElement = document.getElementById("dropArea") as HTMLElement;
    const li: HTMLElement = (document.getElementById("dropArea") as HTMLElement).querySelector('[data-file-name="' + args.file.name + '"]') as HTMLElement;
    if (args.operation === "upload") {
      (li.querySelector(".close-icon-container") as HTMLElement).classList.add("delete-icon");
      detach(li.getElementsByTagName("progress")[0]);
      (li.querySelector(".file-size") as HTMLElement).style.display =
        "inline-block";
      (li.querySelector(".file-name") as HTMLElement).style.color = "green";
      (li.querySelector(".e-icons") as HTMLElement).onclick = () => {
        createSpinner({ target: spinnerElement, width: "25px" });
        showSpinner(spinnerElement);
      };
      (li.querySelector(".close-icon-container") as HTMLElement).onkeydown = (
        e: any
      ) => {
        if (e.keyCode === 13) {
          createSpinner({ target: spinnerElement, width: "25px" });
          showSpinner(spinnerElement);
        }
      };
    } else {
      this.filesDetails.splice(this.filesList.indexOf(li), 1);
      this.filesList.splice(this.filesList.indexOf(li), 1);
      this.uploadObj.element.value = "";
      detach(li);
      hideSpinner(spinnerElement);
      detach(spinnerElement.querySelector(".e-spinner-pane") as HTMLElement);
    }
    EventHandler.add(li.querySelector(".close-icon-container") as HTMLElement, "click", this.removeFiles, this);
  }

  public onFileSelect(args: any): void {
    args.cancel = true;
    const proxy = this;
    if (
      isNullOrUndefined(
        (document.getElementById("dropArea") as HTMLElement).querySelector(".upload-list-root") as HTMLElement
      )
    ) {
      this.parentElement = createElement("div", {
        className: "upload-list-root"
      });
      this.parentElement.appendChild(
        createElement("ul", { className: "ul-element" })
      );
      (document.getElementById("dropArea") as HTMLElement).appendChild(this.parentElement);
    }
    for (const fileData of args.filesData) {
      this.formSelectedData(fileData, this); // create the LI element for each file Data
    }
    // for (let i: number = 0; i < args.filesData.length; i++) {
    //   this.formSelectedData(args.filesData[i], this); // create the LI element for each file Data
    // }
    this.filesDetails = this.filesDetails.concat(args.filesData);
    const file: FileInfo = args.filesData[0].rawFile;
    let width: number;
    let height: number;
    const img: any = document.createElement("img");
    const reader: any = new FileReader();
    reader.onload = (e: any) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
    const imgs = new Image();
    img.onload = function() {
      width = this.width;
      height = this.height;
      proxy.onNewImg(height, width, img, args.filesData[0]);
    };
    imgs.src = img.src;
  }

  // to create canvas and update our custom dimensions
  public onNewImg(height: number, width: number, img: any, file: any) {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx: any = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const MAX_WIDTH: any = 1000;
    const MAX_HEIGHT: any = 600;
    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    canvas.width = width;
    canvas.height = height;
    const ctx1 = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx1.drawImage(img, 0, 0, width, height);
    this.newImage = canvas.toDataURL("image/png");
    const blobBin = atob(this.newImage.split(",")[1]);
    const array = [];
    for (let i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    const newBlob = new Blob([new Uint8Array(array)], { type: "image/png" });
    const newFile: any = this.createFile(newBlob, file);
    this.uploadObj.upload(newFile, true);
  }
  // To create File object to upload
  public createFile(image: any, file: any) {
    const newFile = {
      name: file.name,
      rawFile: image,
      size: image.size,
      status: "Ready to Upload",
      statusCode: "1",
      type: file.type,
      validationMessage: ""
    };
    return newFile;
  }

  public formSelectedData(selectedFiles: FileInfo, proxy: any): void {
    const liEle: HTMLElement = createElement("li", {
      attrs: { "data-file-name": selectedFiles.name },
      className: "file-lists"
    });
    liEle.appendChild(
      createElement("span", {
        className: "file-name ",
        innerHTML: selectedFiles.name
      })
    );
    liEle.appendChild(
      createElement("span", {
        className: "file-size ",
        innerHTML: this.uploadObj.bytesToSize(selectedFiles.size)
      })
    );
    if (selectedFiles.statusCode === "1") {
      this.progressbarContainer = createElement("span", {
        className: "progress-bar-container"
      });
      this.progressbarContainer.appendChild(
        createElement("progress", {
          attrs: { value: "0", max: "100" },
          className: "progress"
        })
      );
      liEle.appendChild(this.progressbarContainer);
    } else {
      (liEle.querySelector(".file-name") as HTMLElement).classList.add("upload-fails");
    }
    const closeIconContainer: HTMLElement = createElement("span", {
      className: "e-icons close-icon-container"
    });
    EventHandler.add(closeIconContainer, "click", this.removeFiles, proxy);
    liEle.appendChild(closeIconContainer);
    (document.querySelector(".ul-element") as HTMLElement).appendChild(liEle);
    this.filesList.push(liEle);
  }

  public onFileUpload(args: any): void {
    const li: Element = (document.getElementById("dropArea") as HTMLElement).querySelector('[data-file-name="' + args.file.name + '"]') as HTMLElement;
    EventHandler.remove(li.querySelector(".close-icon-container") as HTMLElement, "click", this.removeFiles );
    const progressValue: number = Math.round(
      (args.e.loaded / args.e.total) * 100
    );
    if (!isNaN(progressValue)) {
      li.getElementsByTagName("progress")[0].value = progressValue; // Updating the progress bar value
    }
  }

  public onUploadFailed(args: any): void {
    const li: Element = (document.getElementById("dropArea") as HTMLElement).querySelector('[data-file-name="' + args.file.name + '"]') as HTMLElement;
    EventHandler.add(li.querySelector(".close-icon-container") as HTMLElement, "click", this.removeFiles, this);
    (li.querySelector(".file-name ") as HTMLElement).classList.add("upload-fails");
    if (args.operation === "upload") {
      detach(li.querySelector(".progress-bar-container") as HTMLElement);
    }
  }
  public removeFiles(args: any): void {
    const status: string = this.filesDetails[
      this.filesList.indexOf(args.currentTarget.parentElement)
    ].statusCode;
    if (status === "2") {
      this.uploadObj.remove(
        this.filesDetails[
          this.filesList.indexOf(args.currentTarget.parentElement)
        ]
      );
    } else {
      detach(args.currentTarget.parentElement);
    }
  }
  public onRemoveFile(args: RemovingEventArgs): void {
    args.postRawFile = false;
  }

  public componentDidMount() {
    setTimeout(() => {
  (document.getElementById("browse") as HTMLElement).onclick = () => {
      ((document.getElementsByClassName("e-file-select-wrap")[0] as HTMLElement).querySelector("button") as HTMLElement).click();
      return false;
    };
    this.uploadObj.element.setAttribute("name", "UploadFiles");
    this.uploadObj.dropArea = document.getElementsByClassName(
      "template_wrapper"
    )[0] as HTMLElement;
    this.uploadObj.dataBind();
    if (Browser.isDevice) {
      (this.uploadObj.dropArea.querySelector(
        "drop"
      ) as HTMLElement).style.padding = "4% 13%";
    };
  })
}
public render() {
    return (
            <div className="template_wrapper">
              {/* Render Uploader */}
              <div id="dropArea" className="dropArea">
                <span id="drop" className="file-name-span drop">
                  {" "}
                  Drop files here or <a href="" id="browse">
                    <u>Browse</u>
                  </a>{" "}
                </span>
                <UploaderComponent id="fileUpload" type="file" ref={upload => { this.uploadObj = upload! }}
                  success={this.onSuccess}
                  removing={this.onRemoveFile}
                  selected={this.onFileSelect}
                  progress={this.onFileUpload} // Triggres when upload is in progress
                  failure={this.onUploadFailed} // Triggres when upload got failed
                  dropArea={
                    document.getElementsByClassName("template_wrapper")[0] as HTMLElement
                  }
                  asyncSettings = {this.path}
                  multiple = {false}
                  allowedExtensions={"image/*"}
                />
              </div>
            </div>)
  }
}
ReactDOM.render(<App />, document.getElementById("fileupload"));
```

```
<style>
.dropArea {
    min-height: 50px;
    padding-top: 15px;
    position: relative;
}

.drop {
    padding: 3% 30% 3%;
    display: inherit;
    border: 1px dashed #c3c3cc;
}

.template_wrapper {
    max-width: 400px;
    margin: auto;
}

.template_wrapper .file-name-span {
    font-size:  14px;
}

.template_wrapper .e-file-select-wrap {
    display: none;
}

.template_wrapper .e-upload {
    float: none;
    border: none;
}

.template_wrapper .ul-element {
    list-style: none;
    width: 100%;
    padding-left: 0;
}

.template_wrapper .file-name {
    padding: 8px 6px 8px 0;
    font-size: 13px;
    width: 46%;
    display: inline-block;
    position: relative;
    top: 4px;
}

.template_wrapper .file-size {
    padding: 4px;
    font-size: 13px;
    width: 18%;
    display: inline-block;
    position: relative;
}

.template_wrapper .file-lists {
    border: 1px solid lightgray;
    padding: 0 6px 0 14px;
    margin-top: 15px;
    position: relative;
    background: rgba(0, 0, 0, 0.04);
}

.template_wrapper .file-size,.template_wrapper .file-name {
    font-family: "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}
.template_wrapper span.progress-bar-container {
    display: block;
    float: right;
    height: 20px;
    right: 13%;
    top: 14px;
    position: relative;
    width: 20%;
}

.template_wrapper .progress{
    width: 100%;
    height: 15px;
    -webkit-appearance: none;
}

.template_wrapper .close-icon-container
{
    cursor: pointer;
    font-size: 11px;
    height: 26px;
    margin: 0 12px 0 22px;
    padding: 0;
    position: absolute;
    right: 0;
    width: 26px;
    top: 6px;
}

.template_wrapper .close-icon-container.e-icons::before {
    left: 7px;
    position: inherit;
    top: 7px;
    content: '\e932';
}

.template_wrapper .close-icon-container.delete-icon::before {
    content: '\e94a';
}

.template_wrapper .close-icon-container:hover {
    background-color: rgba(0, 0, 0, 0.12);
    border-color: transparent;
    border-radius: 50%;
    box-shadow: 0 0 0 transparent;
}

.template_wrapper .upload-success {
    color: #2bc700;
}

.template_wrapper .upload-fails {
    color: #f44336;
}

.template_wrapper progress::-webkit-progress-bar {
    border: 1px solid lightgrey;
    background-color: #ffffff;
    border-radius: 2px;
}
#dropArea progress {
    border: 1px solid lightgrey;
    background-color: #ffffff;
    border-radius: 2px;
}
.template_wrapper span a {
    color:#ff4081;
}
</style>
```

>You can also explore [React File Upload](https://www.syncfusion.com/react-ui-components/react-file-upload) feature tour page for its groundbreaking features. You can also explore our [React File Upload example](https://ej2.syncfusion.com/react/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.