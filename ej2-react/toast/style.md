---
layout: post
title: Style in React Toast component | Syncfusion
description: Learn here all about Style in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toast styling

Customize the appearance of Toast components using CSS to match your application's design system. The following CSS selectors target specific Toast elements for theming and branding purposes.

## Customizing the toast title

Use the following CSS to customize the default toast's content properties like font-family, font-size and color.

```css
/* To change color, font family and font size */
.e-toast-container .e-toast .e-toast-message .e-toast-title {
    color: red;
    font-size: 18px;
    font-weight: bold;
}
```

## Customizing the toast content

Use the following CSS to customize the default toast's content properties like font-family, font-size and color.

```css
/* To change color, font family and font size */
.e-toast-container .e-toast .e-toast-message .e-toast-content {
    color: aqua;
    font-size: 13px;
    font-weight: normal;
}
```

## Customizing the toast icon

Use the following CSS to customize the default toast icon color.

```css
/* To change icon color */
.e-toast-container .e-toast .e-toast-icon {
    color: yellow;
}
```

## Customizing the toast background

Use the following CSS to customize the default toast's background color.

```css
/* To change background color */
.e-toast-container .e-toast {
    background-color: navy;
}
```