---
layout: post
title: Style appearance in React TextBox component | Syncfusion
description: Learn here all about Style appearance in Syncfusion React TextBox component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in React TextBox component

Customize the TextBox component's appearance using CSS to match your application's design system. The following CSS rules demonstrate common styling modifications for various TextBox scenarios.

## Customizing the appearance of TextBox wrapper element

Modify the TextBox dimensions and typography by applying the following CSS rules to input and textarea elements:

```css
/* Customize TextBox height and font size */
.e-input:not(:valid), 
.e-input:valid, 
.e-float-input.e-control-wrapper input:not(:valid), 
.e-float-input.e-control-wrapper input:valid, 
.e-float-input input:not(:valid), 
.e-float-input input:valid, 
.e-input-group input:not(:valid), 
.e-input-group input:valid, 
.e-input-group.e-control-wrapper input:not(:valid), 
.e-input-group.e-control-wrapper input:valid, 
.e-float-input.e-control-wrapper textarea:not(:valid), 
.e-float-input.e-control-wrapper textarea:valid, 
.e-float-input textarea:not(:valid), 
.e-float-input textarea:valid, 
.e-input-group.e-control-wrapper textarea:not(:valid), 
.e-input-group.e-control-wrapper textarea:valid, 
.e-input-group textarea:not(:valid), 
.e-input-group textarea:valid {
    font-size: 30px;
    height: 40px;
}
```

## Customizing the TextBox floating label

Customize the floating label's color and font size using the following CSS rules:

```css
/* Customize floating label color and font size */
.e-float-input.e-control-wrapper:not(.e-error) input:valid ~ label.e-float-text, 
.e-float-input.e-control-wrapper:not(.e-error) input ~ label.e-label-top.e-float-text {
    color: pink;
    font-size: 15px;
}
```
