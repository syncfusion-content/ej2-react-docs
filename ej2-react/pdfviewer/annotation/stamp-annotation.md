---
layout: post
title: Stamp annotation in React Pdfviewer component | Syncfusion
description: Learn here all about Stamp annotation in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Stamp annotation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Stamp annotation in React Pdfviewer component

The PDF Viewer control provides options to add, edit, delete, and rotate the following stamp annotation in the PDF documents:

* Dynamic
* Sign Here
* Standard Business
* Custom Stamp

![StampAnnotation](../../pdfviewer/images/stamp_annot.png)

## Adding stamp annotations to the PDF document

The stamp annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Stamp Annotation** drop-down button. A drop-down pop-up will appear and shows the stamp annotations to be added.

     ![StampTool](../../pdfviewer/images/stamp_tool.png)

* Select the annotation type to be added to the page in the pop-up.

     ![StampPopup](../../pdfviewer/images/selectstamp_annot.png)

* You can add the annotation over the pages of the PDF document.

In the pan mode, if the stamp annotation mode is entered, the PDF Viewer control will switch to text select mode.

Refer to the following code sample to switch to the stamp annotation mode.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,Print, TextSelection, 
         TextSearch, Annotation, SignStampItem, StandardBusinessStampItem, DynamicStampItem, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function dynamicStamp() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.setAnnotationMode('Stamp', DynamicStampItem.NotApproved);
  }
  function signStamp() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.setAnnotationMode('Stamp', null, SignStampItem.Witness);
  }
  function standardBusinessStamp() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.setAnnotationMode('Stamp', null, null, StandardBusinessStampItem.Approved,);
  }
  return (<div>
    <button onClick={dynamicStamp}>Dynamic Stamp</button>
    <button onClick={signStamp}>Sign Stamp</button>
    <button onClick={standardBusinessStamp}>StandardBusiness Stamp</button>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                ThumbnailView, Print, TextSelection, TextSearch]}/>
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endhighlight %}

{% highlight js tabtitle="Server-Backed" %}

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,Print, TextSelection, 
         TextSearch, Annotation, SignStampItem, StandardBusinessStampItem, DynamicStampItem, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  function dynamicStamp() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.setAnnotationMode('Stamp', DynamicStampItem.NotApproved);
  }
  function signStamp() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.setAnnotationMode('Stamp', null, SignStampItem.Witness);
  }
  function standardBusinessStamp() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.annotation.setAnnotationMode('Stamp', null, null, StandardBusinessStampItem.Approved,);
  }
  return (<div>
    <button onClick={dynamicStamp}>Dynamic Stamp</button>
    <button onClick={signStamp}>Sign Stamp</button>
    <button onClick={standardBusinessStamp}>StandardBusiness Stamp</button>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
        style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                ThumbnailView, Print, TextSelection, TextSearch]}/>
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endhighlight %}
{% endtabs %}

## Adding custom stamp to the PDF document

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Stamp Annotation** drop-down button. A drop-down pop-up will appear and shows the stamp annotations to be added.
* Click the Custom Stamp button.

     ![CustomStamp](../../pdfviewer/images/customStamp.png)

* The file explorer dialog will appear, choose the image and then add the image to the PDF page.

>The JPG and JPEG image format is only supported in the custom stamp annotations.

## Setting default properties during control initialization

The properties of the stamp annotation can be set before creating the control using the StampSettings.

After editing the default opacity using the Edit Opacity tool, they will be changed to the selected values.
Refer to the following code sample to set the default sticky note annotation settings.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        stampSettings={{opacity: 0.3, author: 'Guest User'}}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch]}/>
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endhighlight %}

{% highlight js tabtitle="Server-Backed" %}

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
        stampSettings={{opacity: 0.3, author: 'Guest User'}}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch]}/>
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endhighlight %}
{% endtabs %}