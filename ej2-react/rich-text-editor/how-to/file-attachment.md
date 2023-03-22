---
layout: post
title: File attachment in React Rich text editor component | Syncfusion
description: Learn here all about File attachment in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: File attachment 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# File attachment in React Rich text editor component

The Rich Text Editor allows you to attach a file based on the file upload. You can attach your files using the file upload or drag-and-drop from your local path. When the file upload gets success, the attachment link inserts into the content.

In the below sample, configure the saveUrl and path properties to achieve file attachments.

        1. saveUrl: Provides service URL to save the files.
        2. path: Specifies the location to store the image.

The following sample illustrates how to attach a file in the Rich Text Editor.

`[Class-component]`

```html

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RichTextEditorComponent, HtmlEditor, Inject, Toolbar, QuickToolbar, Image, Link, NodeSelection, IHtmlFormatterModel } from '@syncfusion/ej2-react-richtexteditor';
import { SampleBase } from '../common/sample-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs/src/uploader';
export class ImageSample extends SampleBase<{}, {}> {

    public rteObj: RichTextEditorComponent;
    public uploadObj: UploaderComponent;
    public selection: NodeSelection = new NodeSelection();
    public range: Range;
    public asyncSettings: object;
    public insertImageSetting: object;
    public saveSelection: NodeSelection;
    customHTMLModel: IHtmlFormatterModel;
    public dropElement;
    constructor(props: {}) {
        this.asyncSettings = {
            saveUrl: '[SERVICE_HOSTED_PATH]/api/uploadbox/Save'
        };
        this.insertImageSetting = {
            saveUrl: '[SERVICE_HOSTED_PATH]/api/uploadbox/Save',
            path: '../Files/'
        };
        this.dropElement = '.e-richtexteditor'
    }

    public onUploadSuccess(args: any): void {
        (this.rteObj.contentModule.getEditPanel() as HTMLElement).focus();
        this.range = this.selection.getRange(document);
        this.saveSelection = this.selection.save(this.range, document);
        var fileUrl = document.URL + this.rteObj.insertImageSettings.path + args.file.name;
        if (this.rteObj.formatter.getUndoRedoStack().length === 0) {
            this.rteObj.formatter.saveData();
        }
        saveSelection.restore();
        this.rteObj.executeCommand('createLink', { url: fileUrl, text: fileUrl, selection: saveSelection });
        this.rteObj.formatter.saveData();
        this.rteObj.formatter.enableUndo(rteObj);
        this.uploadObj.clearAll();
    }
    render() {
        return (
            <div className='control-pane'>
                <div className='control-section' id="rteTools">
                    <div className='rte-control-section'>
                        <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => { this.rteObj = richtexteditor; }} insertImageSettings={this.insertImageSetting}>
                            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
                        </RichTextEditorComponent>
                        <UploaderComponent id='fileUpload' type='file' ref={(scope) => { this.uploadObj = scope }}
                            asyncSettings={this.asyncSettings} dropArea={this.dropElement} success={this.onUploadSuccess.bind(this)}
                        ></UploaderComponent>
                    </div>
                </div>
            </div>
        );
    }
}

```

`[Functional-component]`

```html

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RichTextEditorComponent, HtmlEditor, Inject, Toolbar, QuickToolbar, Image, Link, NodeSelection, IHtmlFormatterModel } from '@syncfusion/ej2-react-richtexteditor';
import { SampleBase } from '../common/sample-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs/src/uploader';
function ImageSample(){
  let rteObj: RichTextEditorComponent;
  let uploadObj: UploaderComponent;
  let selection: NodeSelection = new NodeSelection();
  let range: Range;
  let asyncSettings: object;
  let insertImageSetting: object;
  let saveSelection: NodeSelection;
  customHTMLModel: IHtmlFormatterModel;
  let dropElement;
      asyncSettings = {
          saveUrl: '[SERVICE_HOSTED_PATH]/api/uploadbox/Save'
      };
      insertImageSetting = {
          saveUrl: '[SERVICE_HOSTED_PATH]/api/uploadbox/Save',
          path: '../Files/'
      };
      dropElement = '.e-richtexteditor'

  function onUploadSuccess(args: any): void {
      (rteObj.contentModule.getEditPanel() as HTMLElement).focus();
      range = selection.getRange(document);
      saveSelection = selection.save(range, document);
      var fileUrl = document.URL + rteObj.insertImageSettings.path + args.file.name;
      if (rteObj.formatter.getUndoRedoStack().length === 0) {
          rteObj.formatter.saveData();
      }
      saveSelection.restore();
      rteObj.executeCommand('createLink', { url: fileUrl, text: fileUrl, selection: saveSelection });
      rteObj.formatter.saveData();
      rteObj.formatter.enableUndo(rteObj);
      uploadObj.clearAll();
  }
  return (
      <div className='control-pane'>
          <div className='control-section' id="rteTools">
              <div className='rte-control-section'>
                  <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => { rteObj = richtexteditor; }} insertImageSettings={insertImageSetting}>
                      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
                  </RichTextEditorComponent>
                  <UploaderComponent id='fileUpload' type='file' ref={(scope) => { uploadObj = scope }}
                      asyncSettings={asyncSettings} dropArea={dropElement} success={onUploadSuccess.bind(this)}
                  ></UploaderComponent>
              </div>
          </div>
      </div>
  );
}

export default ImageSample;
```

To configure server-side handler, refer the below code.

``` csharp
int x = 0;
string file;
 [AcceptVerbs("Post")]
        public void Save()
        {
            try
            {
                var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
                file = httpPostedFile.FileName;
                if (httpPostedFile != null)
                {
                    Console.WriteLine(System.Web.HttpContext.Current.Server.MapPath("~/Files"));
                    var fileSave = System.Web.HttpContext.Current.Server.MapPath("~/Files");
                    if (!Directory.Exists(fileSave))
                    {
                        Directory.CreateDirectory(fileSave);
                    }
                    var fileName = Path.GetFileName(httpPostedFile.FileName);
                    var fileSavePath = Path.Combine(fileSave, fileName);
                    while (System.IO.File.Exists(fileSavePath))
                    {
                        file = "rte" + x + "-" + fileName;
                        fileSavePath = Path.Combine(fileSave, file);
                        x++;
                    }
                    if (!System.IO.File.Exists(fileSavePath))
                    {
                        httpPostedFile.SaveAs(fileSavePath);
                        HttpResponse Response = System.Web.HttpContext.Current.Response;
                        Response.Clear();
                        Response.Headers.Add("name", file);
                        Response.ContentType = "application/json; charset=utf-8";
                        Response.StatusDescription = "File uploaded succesfully";
                        Response.Headers.Add("url", fileSavePath);
                        Response.End();
                    }
                }
            }
            catch (Exception e)
            {
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusCode = 204;
                Response.Status = "204 No Content";
                Response.StatusDescription = e.Message;
                Response.End();
            }
    }
```