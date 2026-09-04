---
layout: post
title: Style in React Dialog | Syncfusion
description: Override the React Dialog CSS classes to customize the header, content, and modal overlay colors, fonts, opacity, and other visual properties.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Dialog

The following content provides the CSS classes you can override to customize the React Dialog's appearance.

## Customizing the React Dialog header

The React Dialog header is the top bar of the React Dialog that displays the title. Use the following CSS to customize the React Dialog header properties.

```css
.e-dialog .e-dlg-header {
    color: green;
    font-size: 20px;
    font-weight: normal;
}
```

## Customizing the React Dialog content

The React Dialog content is the main body area that displays the message or template. Use the following CSS to customize the React Dialog content properties.

```css
.e-dialog .e-dlg-content {
    color: red;
    font-size: 10px;
    font-weight: normal;
    line-height: normal;
}
```

## Customizing modal dialog overlay

The modal overlay is the semi-transparent layer that covers the rest of the page behind the dialog. Use the following CSS to customize the modal dialog overlay.

> The overlay renders only when the [`isModal`](https://ej2.syncfusion.com/react/documentation/api/dialog#ismodal) property is set to `true`.

```css
.e-dlg-overlay {
    background-color: slategray;
    opacity: 0.6;
}
```

## Customizing the dialog resize handle and icon

The resize handle appears at the bottom corners of a resizable React Dialog. Use the following CSS to customize the resize handle icon.

> Resize must be enabled by setting the [`enableResize`](https://ej2.syncfusion.com/react/documentation/api/dialog#enableresize) property to `true` for these classes to exist in the DOM.

```css
/* To change the icon content */
.e-dialog .e-south-east::before, .e-dialog .e-south-west::before {
    content: '\f047';
}

/* To set the icon pack */
.e-dialog .e-resize-handle {
    font: normal normal normal 14px/1 FontAwesome;
}
```

The above CSS uses a Font Awesome icon. To use this icon pack, install and import Font Awesome in your application before applying the above styles.

## Customizing the dialog footer button

The footer buttons are the action buttons (such as OK/Cancel) rendered at the bottom of the dialog. Use the following CSS to customize the dialog footer button.

```css
/* To specify font color, background color, and border color */
.e-btn.e-flat.e-primary, .e-css.e-btn.e-flat.e-primary {
    background-color: transparent;
    border-color: transparent;
    color: blue;
}
```

> The selector above is generic and will apply to all flat primary buttons in the application. To scope the styles to the React Dialog footer only, wrap the React Dialog in a custom class (for example, `.custom-dialog`) and prefix the selector, e.g., `.custom-dialog .e-btn.e-flat.e-primary`.

## Customizing the dialog close button

The close button is the small icon displayed at the top-right corner of the dialog header. Use the following CSS to customize the dialog close button.

```css
/* To specify font size and color */
.e-dialog .e-btn .e-btn-icon.e-icon-dlg-close {
    font-size: 12px;
    color: red;
}
```