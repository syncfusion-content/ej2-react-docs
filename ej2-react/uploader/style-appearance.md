---
layout: post
title: Style appearance in React Uploader component | Syncfusion
description: Learn here all about Style appearance in Syncfusion React Uploader component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in React Uploader component

The following CSS selectors and classes enable customization of the Uploader component's visual appearance to match specific design requirements.

## Customizing the appearance of File Upload wrapper element

Control the overall Uploader component dimensions and layout using CSS on the wrapper element.

```css
/* Customize wrapper height and width */
.e-upload.e-control-wrapper, .e-bigger.e-small .e-upload.e-control-wrapper {
        height: 300px;
        width: 300px;
}
```

## Customizing the File Upload browse button

Apply custom styling to action buttons including font, colors, and dimensions.

```css
/* Customize button styling */
.e-upload .e-file-select-wrap .e-btn, .e-upload .e-upload-actions .e-btn, .e-bigger.e-small .e-upload .e-file-select-wrap .e-btn, .e-bigger.e-small .e-upload .e-upload-actions .e-btn {
        font-family: cursive;
        height: 40px;
        background-color: aquamarine;
        color: coral;
}
```

## Customizing the File Upload content

Customize the drop area text appearance using the file drop class.

```css
/* Customize drop area text styling */
.e-upload .e-file-select-wrap .e-file-drop, .e-bigger.e-small .e-upload .e-file-select-wrap .e-file-drop {
        font-size: 20px;
        color: aqua;
}
```

## Customizing the uploaded file container in File Upload

Use the following CSS to customize the uploaded file container in File Upload

```css
/* To specify background color */
.e-upload .e-upload-files .e-upload-file-list {
        background-color: beige;
}
```

## See Also

* [Customize the appearance of uploader using a template](https://ej2.syncfusion.com/react/documentation/uploader/template)
