---
layout: post
title: Ink annotation in React Pdfviewer component | Syncfusion
description: Learn here all about Ink annotation in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Ink annotation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ink annotation in React Pdfviewer component

The PDF Viewer control provides the options to add, edit, and delete the ink annotations.

![InkAnnotation](../../pdfviewer/images/ink_annotation.png)

## Adding an ink annotation to the PDF document

The ink annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Select the **Draw Ink** button in the annotation toolbar. It enables the ink annotation mode.
* You can draw anything over the pages of the PDF document.

  ![InkTool](../../pdfviewer/images/ink_tool.png)

Refer to the following code sample to switch to the ink annotation mode.

{% raw %}

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView,Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
export class App extends React.Component {
  render() {
    return (
      <div>
      <button onClick={this.inkMode.bind(this)}>Draw Ink</button>
        <div className='control-section'>
            <PdfViewerComponent ref={(scope) => { this.viewer = scope; }}
            id="container" documentPath="PDF_Succinctly.pdf"
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
            style={{ 'height': '640px' }}>

                <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                    Print,TextSelection, TextSearch]}/>
          </PdfViewerComponent>
      </div>
    </div>);
  }
  inkMode() {
    this.viewer.annotation.setAnnotationMode('Ink');
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```
{% endraw %}

## Editing the properties of the ink annotation

The stroke color, thickness, and opacity of the ink annotation can be edited using the Edit stroke color tool, Edit thickness tool, and Edit opacity tool in the annotation toolbar.

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![InkStrokeColor](../../pdfviewer/images/ink_strokecolor.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit Thickness tool.

![InkThickness](../../pdfviewer/images/ink_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![InkOpacity](../../pdfviewer/images/ink_opacity.png)

## Setting default properties during the control initialization

The properties of the ink annotation can be set before creating the control using the InkAnnotationSettings.

After editing the default values, they will be changed to the selected values. Refer to the following code sample to set the default ink annotation settings.

{% raw %}

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
export class App extends React.Component {
  render() {
    return (
      <div>
        <div className='control-section'>
          <PdfViewerComponent ref={(scope) => { this.viewer = scope; }}
            id="container"
            documentPath="PDF_Succinctly.pdf"
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
            inkAnnotationSettings={{author: 'Syncfusion', strokeColor: 'green', thickness: 3, opacity: 0.6}}
            style={{ 'height': '640px' }}>

                <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                    ThumbnailView, Print, TextSelection, TextSearch]}/>
          </PdfViewerComponent>
      </div>
    </div>);
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```
{% endraw %}