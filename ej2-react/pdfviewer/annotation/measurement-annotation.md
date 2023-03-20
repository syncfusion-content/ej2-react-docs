---
layout: post
title: Measurement annotation in React Pdfviewer component | Syncfusion
description: Learn here all about Measurement annotation in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Measurement annotation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Measurement annotation in React Pdfviewer component

The PDF Viewer provides the options to add measurement annotations. You can measure the page annotations with the help of measurement annotation. The supported measurement annotations in the PDF Viewer control are:

* Distance
* Perimeter
* Area
* Radius
* Volume

![CalibrateAnnotation](../../pdfviewer/images/calibrate_annotation.png)

## Adding measurement annotations to the PDF document

The measurement annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Measurement Annotation** dropdown button. A dropdown pop-up will appear and shows the measurement annotations to be added.
* Select the measurement type to be added to the page in the dropdown pop-up. It enables the selected measurement annotation mode.
* You can measure and add the annotation over the pages of the PDF document.

In the pan mode, if the measurement annotation mode is entered, the PDF Viewer control will switch to text select mode.

  ![CalibrateTool](../../pdfviewer/images/calibrate_tool.png)

Refer to the following code snippet to switch to distance annotation mode.

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
    <button onClick={this.distanceMode.bind(this)}>Distance</button>
      <div className='control-section'>
        <PdfViewerComponent ref={(scope) => { this.viewer = scope; }}
          id="container" documentPath="PDF_Succinctly.pdf"
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                ThumbnailView,Print, TextSelection, TextSearch]}/>
        </PdfViewerComponent>
      </div>
    </div>);
  }
  distanceMode() {
    this.viewer.annotation.setAnnotationMode('Distance');
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```
{% endraw %}

## Editing the properties of measurement annotation

The fill color, stroke color, thickness, and opacity of the measurement annotation can be edited using the Edit Color tool, Edit Stroke Color tool, Edit Thickness tool, and Edit Opacity tool in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![CalibrateFillColor](../../pdfviewer/images/calibrate_fillcolor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![CalibrateStrokeColor](../../pdfviewer/images/calibrate_stroke.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit thickness tool.

![CalibrateThickness](../../pdfviewer/images/calibrate_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![CalibrateOpacity](../../pdfviewer/images/calibrate_opacity.png)

### Editing the line properties

The properties of the line shapes such as distance and perimeter annotations can be edited using the Line properties window. It can be opened by selecting the Properties option in the context menu that appears on right-clicking the distance and perimeter annotations.

![CalibrateProperty](../../pdfviewer/images/calibrate_lineprop.png)

## Setting default properties during control initialization

The properties of the shape annotations can be set before creating the control using distanceSettings, perimeterSettings, areaSettings, radiusSettings and volumeSettings.
Refer to the following code snippet to set the default annotation settings.

{% raw %}

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
export class App extends React.Component {
  render() {
    return (
    <div>
      <div className='control-section'>
        <PdfViewerComponent ref={(scope) => { this.viewer = scope; }}
          id="container"
          documentPath="PDF_Succinctly.pdf"
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          distanceSettings={{fillColor: 'blue', opacity: 0.6, strokeColor: 'green'}}
          perimeterSettings={{fillColor: 'green', opacity: 0.6, strokeColor: 'blue'}}
          areaSettings={{fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'}}
          radiusSettings={{fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'}}
          volumeSettings={{fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'}}
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

## Editing scale ratio and unit of the measurement annotation

The scale ratio and unit of measurement can be modified using the scale ratio option provided in the context menu of the PDF Viewer control.

  ![CalibrateScaleRatio](../../pdfviewer/images/calibrate_scaleratio.png)

The Units of measurements support for the measurement annotations in the PDF Viewer are

* Inch
* Millimeter
* Centimeter
* Point
* Pica
* Feet

![CalibrateScaleDialog](../../pdfviewer/images/calibrate_scaledialog.png)

## Setting default scale ratio settings during control initialization

The properties of scale ratio for measurement annotation can be set before creating the control using ScaleRatioSettings as shown in the following code snippet,

{% raw %}

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView,Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer';
export class App extends React.Component {
  render() {
    return (<div>
      <div className='control-section'>
        <PdfViewerComponent ref={(scope) => { this.viewer = scope; }}
          id="container"
          documentPath="PDF_Succinctly.pdf"
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          measurementSettings={{scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm'}}
          style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch]}/>
        </PdfViewerComponent>
      </div>
    </div>);
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```
{% endraw %}