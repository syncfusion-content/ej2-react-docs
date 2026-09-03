---
layout: post
title: Style and Appearance in React Numeric TextBox | Syncfusion
description: Customize the React Numeric TextBox wrapper, input, and spin button appearance with CSS to match your application design system.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in React Numeric TextBox

Customize the React Numeric TextBox component's appearance using CSS to match your application's design system. The following CSS rules demonstrate common styling modifications for various React Numeric TextBox scenarios.

## Customizing the appearance of React Numeric TextBox wrapper element

Modify the React Numeric TextBox dimensions and typography by applying the following CSS rules to the input element:

```css
/* Customize React Numeric TextBox height and font size */
.e-input-group input.e-input, 
.e-input-group.e-control-wrapper input.e-input, 
.e-input-group textarea.e-input, 
.e-input-group.e-control-wrapper textarea.e-input {
    height: 40px;
    font-size: 20px;
}
```

## Customizing the React Numeric TextBox spin buttons

Customize the appearance of the spin button icons (increment/decrement buttons) using the following CSS:

```css
/* Customize spin button icon font size and background color */
.e-numeric.e-control-wrapper.e-input-group .e-input-group-icon {
    font-size: 20px;
    background-color: beige;
}
```
