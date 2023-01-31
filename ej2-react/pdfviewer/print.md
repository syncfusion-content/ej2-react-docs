---
layout: post
title: Print in React Pdfviewer component | Syncfusion
description: Learn here all about Print in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Print 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Print in React Pdfviewer component

The PDF Viewer supports printing the loaded PDF file. You can enable/disable the print using the following code snippet.

{% raw %}

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
import { RouteComponentProps } from 'react-router';

export class App extends React.Component<{}, {}> {
  render() {
    return (
    <div>
      <div className='control-section'>
        {/* Render the PDF Viewer */}
        <PdfViewerComponent
          id="container"
          documentPath="PDF_Succinctly.pdf"
          enablePrint={true}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch]} />
        </PdfViewerComponent>
      </div>
    </div>);
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));

```
{% endraw %}

![Alt text](./images/print.png)

You can invoke print action using the following code snippet.,

{% raw %}

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { RouteComponentProps } from 'react-router';

export class App extends React.Component<{}, {}> {
  public viewer: PdfViewerComponent;
  render() {
    return (
    <div>
      <div className='control-section'>
        {/* Render the PDF Viewer */}
        <ButtonComponent id="printBtn" onClick={this.printClicked.bind(this)}>Print</ButtonComponent>
        <PdfViewerComponent ref={(scope) => { this.viewer = scope; }}
          id="container"
          documentPath="PDF_Succinctly.pdf"
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch]} />
        </PdfViewerComponent>
      </div>
    </div>);
  }
  printClicked() {
    this.viewer.print();
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));

```
{% endraw %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)