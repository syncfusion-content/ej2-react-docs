---
layout: post
title: Rename images in server in React Rich text editor component | Syncfusion
description: Learn here all about Rename images in server in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Rename images in server 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Rename images in server in React Rich text editor component

By using the [`insertImageSettings`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSettings/#imageSettings) property, you can specify the server handler to upload the selected image. Then you can bind the [`imageUploadSuccess`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/imageSuccessEventArgs/#imageSuccessEventArgs) event, to receive the modified file name from the server and update it in the Rich Text Editor's insert image dialog.

`[Class-component]`

```ts

import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

export class App extends React.Component<{},{}> {
private toolbarSettings: object = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough','|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
};

private insertImageSettings: object = {
    saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/Rename",
    path: "../Images/"
};

public onImageUploadSuccess = (args: any) => {
    if (args.e.currentTarget.getResponseHeader('name') != null) {
        args.file.name = args.e.currentTarget.getResponseHeader('name');
        let filename: any = document.querySelectorAll(".e-file-name")[0];
        filename.innerHTML = args.file.name.replace(document.querySelectorAll(".e-file-type")[0].innerHTML, '');
        filename.title = args.file.name;
    }
}

public render() {
    return (
      <RichTextEditorComponent toolbarSettings={this.toolbarSettings} insertImageSettings={this.insertImageSettings} imageUploadSuccess={this.onImageUploadSuccess.bind(this)} >
        <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
          Users can format their content using standard toolbar commands.</p>
        <p><b>Key features:</b></p>
        <ul>
          <li>
            <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
          </li>
          <li>
            <p>Capable of handling markdown editing.</p>
          </li>
          <li>
            <p>Contains a modular library to load the necessary functionality on demand.</p>
          </li>
          <li>
            <p>Provides a fully customizable toolbar.</p>
          </li>
        </ul>
        <Inject services={[Toolbar, Count, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

```

`[Functional-component]`

```ts

import { Count, HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  const toolbarSettings: object = {
      items: ['Bold', 'Italic', 'Underline', 'StrikeThrough','|',
          'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
          'LowerCase', 'UpperCase', '|',
          'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
          'Outdent', 'Indent', '|',
          'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
          'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  };
  
  const insertImageSettings: object = {
      saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/Rename",
      path: "../Images/"
  };
  
  function  onImageUploadSuccess(args: any) {
      if (args.e.currentTarget.getResponseHeader('name') != null) {
          args.file.name = args.e.currentTarget.getResponseHeader('name');
          let filename: any = document.querySelectorAll(".e-file-name")[0];
          filename.innerHTML = args.file.name.replace(document.querySelectorAll(".e-file-type")[0].innerHTML, '');
          filename.title = args.file.name;
      }
  }
  
  return (
    <RichTextEditorComponent toolbarSettings={toolbarSettings} insertImageSettings={insertImageSettings} imageUploadSuccess={onImageUploadSuccess.bind(this)} >
      <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
        Users can format their content using standard toolbar commands.</p>
      <p><b>Key features:</b></p>
      <ul>
        <li>
          <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
        </li>
        <li>
          <p>Capable of handling markdown editing.</p>
        </li>
        <li>
          <p>Contains a modular library to load the necessary functionality on demand.</p>
        </li>
        <li>
          <p>Provides a fully customizable toolbar.</p>
        </li>
      </ul>
      <Inject services={[Toolbar, Count, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;

```

To configure the server-side handler, refer the below code.

```csharp
[AcceptVerbs("Post")]
public void Rename()
{
    try
    {
        var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
        imageFile = httpPostedFile.FileName;
        if (httpPostedFile != null)
        {
            var fileSave = System.Web.HttpContext.Current.Server.MapPath("~/Images");
            if (!Directory.Exists(fileSave))
            {
                Directory.CreateDirectory(fileSave);
            }
            var fileName = Path.GetFileName(httpPostedFile.FileName);
            var fileSavePath = Path.Combine(fileSave, fileName);
            while (System.IO.File.Exists(fileSavePath))
            {
                imageFile = "rteImage" + x + "-" + fileName;
                fileSavePath = Path.Combine(fileSave, imageFile);
                x++;
            }
            if (!System.IO.File.Exists(fileSavePath))
            {
                httpPostedFile.SaveAs(fileSavePath);
                HttpResponse Response = System.Web.HttpContext.Current.Response;
                Response.Clear();
                Response.Headers.Add("name", imageFile);
                Response.ContentType = "application/json; charset=utf-8";
                Response.StatusDescription = "File uploaded succesfully";
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
