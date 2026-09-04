---
layout: post
title: Style in React Toast | Syncfusion
description: Style React Toast title, content, icon, and background by targeting the e-toast CSS selectors in your stylesheet.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Toast

Customize the appearance of React Toast components using CSS to match your application's design system. The following CSS selectors target specific React Toast elements for theming and branding purposes.

## Customizing the toast title

Use the following CSS to customize the default React Toast's content properties like font-family, font-size and color.

```css
/* To change color, font family and font size */
.e-toast-container .e-toast .e-toast-message .e-toast-title {
    color: red;
    font-size: 18px;
    font-weight: bold;
}
```

## Customizing the toast content

Use the following CSS to customize the default React Toast's content properties like font-family, font-size and color.

```css
/* To change color, font family and font size */
.e-toast-container .e-toast .e-toast-message .e-toast-content {
    color: aqua;
    font-size: 13px;
    font-weight: normal;
}
```

## Customizing the toast icon

Use the following CSS to customize the default React Toast icon color.

```css
/* To change icon color */
.e-toast-container .e-toast .e-toast-icon {
    color: yellow;
}
```

## Customizing the toast background

Use the following CSS to customize the default React Toast's background color.

```css
/* To change background color */
.e-toast-container .e-toast {
    background-color: navy;
}
```