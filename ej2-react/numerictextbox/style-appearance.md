---
layout: post
title: Style appearance in React Numerictextbox component | Syncfusion
description: Learn here all about Style appearance in Syncfusion React Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in React NumericTextBox component

Customize the NumericTextBox component's appearance using CSS to match your application's design system. The following CSS rules demonstrate common styling modifications for various NumericTextBox scenarios.

## Customizing the appearance of NumericTextBox wrapper element

Modify the NumericTextBox dimensions and typography by applying the following CSS rules to the input element:

```css
/* Customize NumericTextBox height and font size */
.e-input-group input.e-input, 
.e-input-group.e-control-wrapper input.e-input, 
.e-input-group textarea.e-input, 
.e-input-group.e-control-wrapper textarea.e-input {
    height: 40px;
    font-size: 20px;
}
```

## Customizing the NumericTextBox spin buttons

Customize the appearance of the spin button icons (increment/decrement buttons) using the following CSS:

```css
/* Customize spin button icon font size and background color */
.e-numeric.e-control-wrapper.e-input-group .e-input-group-icon {
    font-size: 20px;
    background-color: beige;
}
```
