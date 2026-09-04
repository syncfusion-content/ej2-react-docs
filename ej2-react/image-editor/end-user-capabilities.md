---
layout: post
title: End User Capabilities in React Image Editor | Syncfusion
description: Discover the end-user operations in the React Image Editor, including open, zoom, pan, crop, transform, annotate, filter, undo, redo, reset, and export.
platform: ej2-react
control: End user Capabilities
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# End User Capabilities in React Image Editor

The following operations are available for end-users and the same is explained briefly in these sections.

## Open an image

To open an image in the image editor, do the following steps.

* Click the Open icon from the left side of the toolbar.

* The file explorer lists only JPEG/JPG (.jpeg, .jpg), PNG (.png), SVG (.svg), WEBP (.webp), and BMP (.bmp) format files.

* Select the image from the list of the images from the file explorer window.

![Open an image](images/open.gif)

## Zooming 

Image zooming can be performed in the following ways. 

* Using toolbar

* Using pinch zoom in touch enabled devices

* Using mouse wheel

* Using keyboard

### Using toolbar 

To zoom in or out the image in the image editor, do the following steps. 

* The Zoom In/Out option is enabled only after opening an image. 

### Using pinch 

To zoom in or out the image in the image editor, do the following steps. 

* Touch with two fingers to perform zooming. 

* Zoom in and out controlled by touch gestures. 

### Using mouse wheel 

To zoom in or out the image in the image editor, do the following steps. 

* Press the Ctrl key and scroll the mouse wheel to perform zooming (use Cmd on macOS). 

* Zooming is controlled by the mouse wheel. 

### Using keyboard 

To zoom in or out the image in the image editor, do the following steps. 

* Press Ctrl + '+' to zoom in; Ctrl + '-' to zoom out. Use Cmd instead of Ctrl on macOS.

![Zoom an image](images/zoom.jpg)

## Panning 

To pan an image in the image editor, do the following steps.  

* Click and drag on the image to pan the image. 

* Panning is enabled in the following cases. 

    * If a selection is applied for cropping an image. 

    * If the image size exceeds the canvas size while zooming.

![Pan an image](images/pan.gif)

## Cropping and image transformation 

To crop an image in the image editor, do the following steps. 

* Cropping can be performed based on the selection in an image editor.

* To perform selection, click the crop button in the toolbar which opens the contextual toolbar that shows crop selection options, rotate options, flip options, and straightening options.

* Click the crop selection button and select the type of selection such as custom, circle, square, and ratio selection from the popup.

* Once selection is completed, do panning to move the image to get the cropped region.

* Utilize the rotate and flip buttons along with the straighten slider to perform image transformations, including any inserted annotations.

* Once the cropping region is finalized, click the tick (Apply) icon or the Apply/OK button at the top right of the toolbar to crop the image.

![Crop transform an image](images/crop.jpg)

## Annotations

To add annotations to an image in the image editor, do the following steps.

* To add an annotation, click the Annotation button in the toolbar and select a type (Line, Rectangle, Ellipse, Path, Arrow, Text, or Freehand).

* Once added, annotations can be repositioned by clicking and dragging, and resized using the selection handles.

* To rotate annotations, drag the rotation handle (usually shown below the annotation). Rotation applies to all annotations except text.

* Customize annotations (color, stroke width, font family, font size) via the contextual toolbar, which appears when an annotation is selected.

* To edit text annotations after insertion, double-click the text or use the quick access toolbar's edit-text action.

* When annotations are selected, the quick access toolbar becomes active, providing actions such as duplicate, delete, and edit text.

![Image annotation](images/annotation.jpg)

## Filtering and fine-tune 

To perform fine-tuning on an image in the React Image Editor, do the following steps. 

* Click the fine-tune button which displays the list of fine-tuning available in the React Image Editor. 

* Click one of the fine-tune options from the list of options which shows a slider to adjust the corresponding filter.  

* Click on the canvas or tick icon at the right corner of the toolbar in the React Image Editor to apply the modifications. 

![Filter and Finetune](images/finetune.jpg)

To apply filters on an image in the image editor, do the following steps. 

* Click the filter button which displays the list of filters available in the React Image Editor. 

* Click the filter from list of options to apply the corresponding filter to an image.  

* Click on the canvas or tick icon at the right corner of the toolbar in the React Image Editor to apply the modifications. 

![Filter and Finetune](images/filter.jpg)

## Undo and redo the operations 

To undo and redo the actions performed in an image editor, do the following steps. 

* The undo button will be enabled once the action is performed in an image editor. 

* The redo button will be enabled once the undo action is performed in an image editor. 

* Click the undo or redo button at the left side of the toolbar to perform undo and redo operation.

* Ctrl + Z and Ctrl + Y facilitates this process by allowing users to undo and redo actions, respectively.

![Undo and Redo](images/undo-redo.gif)

## Reset an image 

To revert all the changes done in an image editor, do the following steps. 

* Click the Reset button located on the right side of the toolbar. 

* This will revert all changes performed in the image editor.

## Export an image 

To save the modified image in the Image Editor, follow these steps:

* Click the Save button (right side of the toolbar) to open the Export dialog.

* In the Export dialog, select the file `Format` (PNG, JPEG, SVG, or WEBP).

* If saving as JPEG, adjust `Image Quality` (0–100) to balance quality and file size.

* Click `Download` to save the modified image to your device.

* Press `Ctrl + S` to save quickly in the same format as the loaded image (uses the original filename by default); use `Cmd + S` on macOS.

![Export an image](images/save.jpg)