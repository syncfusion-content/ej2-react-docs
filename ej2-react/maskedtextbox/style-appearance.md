---
layout: post
title: Style and Appearance in React Input Mask | Syncfusion
description: Override React Input Mask CSS classes to customize the wrapper, input, and float label appearance for your design system.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in React Input Mask

The following content provides the CSS structure that can be used to modify the component's appearance based on your preferences.

## Customizing the appearance of React Input Mask wrapper element

Use the following CSS to customize the appearance of the wrapper element.

```css
/* To specify height, font size, and border */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input {
        font-size: 20px;
        border-color: red;
        height: 40px;
        border: 2px solid;
  }
```

## Customizing the React Input Mask element on hovering

Use the following CSS to customize the React Input Mask element on hover:

```css
/* To specify border */
.e-input-group input.e-input, .e-input-group input.e-input:hover:not(.e-success):not(.e-warning):not(.e-error):not([disabled]):not(:focus), .e-input-group.e-control-wrapper input.e-input,.e-input-group.e-control-wrapper input.e-input:hover:not(.e-success):not(.e-warning):not(.e-error):not([disabled]):no(:focus){
      border: 3px solid red;
}
```