---
layout: post
title: Style in React Inplace editor component | Syncfusion
description: Learn here all about Style in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Inplace editor component

Use the following CSS classes and selectors to customize the In-place Editor's appearance based on specific requirements.

## Customizing the In-place Editor text

Customize the In-place Editor's text appearance, including font family, font size, text color, and border styling, using the following CSS:

```css
/* To change color, font family and font size */
.e-inplaceeditor .e-editable-value-wrapper .e-editable-value {
    border-bottom: 2px dotted green;
    color: red;
    font-size: 12px;
    font-family: Segoe UI
}
```

## Customizing the In-place Editor action buttons

Customize the save and cancel button styling, including icon colors and background colors, using the following CSS:

```css
/* To change icon color for save button */
.e-inplaceeditor .e-editable-action-buttons .e-btn-save.e-icon-btn .e-btn-icon.e-icons,
.e-inplaceeditor-tip .e-editable-action-buttons .e-btn-save.e-icon-btn .e-btn-icon.e-icons{
    color: green;
}

/* To change icon color for cancel button */
.e-inplaceeditor .e-editable-action-buttons .e-btn-cancel.e-icon-btn .e-btn-icon.e-icons,  .e-inplaceeditor-tip .e-editable-action-buttons .e-btn-cancel.e-icon-btn .e-btn-icon.e-icons {
    color: red;
}

/* To change background color for save button */
.e-inplaceeditor .e-editable-action-buttons .e-btn-save.e-icon-btn,
.e-inplaceeditor-tip .e-editable-action-buttons .e-btn-save.e-icon-btn {
    background-color: antiquewhite;
}

/* To change background color for cancel button */
.e-inplaceeditor .e-editable-action-buttons .e-btn-cancel.e-icon-btn,
.e-inplaceeditor-tip .e-editable-action-buttons .e-btn-cancel.e-icon-btn {
    background-color: antiquewhite;
}
```