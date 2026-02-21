---
layout: post
title: Style in React Multi select component | Syncfusion
description: Learn here all about Style in Syncfusion React Multi select component of Syncfusion Essential JS 2 and more.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React MultiSelect component

The following CSS classes and structures enable customization of the MultiSelect appearance to match your design requirements.

## Customizing the background color of wrapper element

Apply custom styling to the wrapper element background color using the following CSS.

```css
.e-multiselect.e-input-group .e-multi-select-wrapper {
    background-color: red;
}
```

## Customizing the appearance of the delimiter wrapper element

Modify the delimiter wrapper element styling using the following CSS.

```css
.e-multiselect .e-delim-values {
    -webkit-text-fill-color: blue;
    font-size: 16px;
    font-family: cursive;
}
```

## Customizing the appearance of chips

Style selected chips using the following CSS rules.

```css
.e-multiselect .e-multi-select-wrapper .e-chips .e-chipcontent {
    font-family: cursive;
    font-size: 20px;
    -webkit-text-fill-color: blue;
}

.e-multi-select-wrapper .e-chips {
    background-color: aqua;
    height: 26px;
}
```

## Customizing the dropdown icon’s color

Change the dropdown icon color using the following CSS.

```css
.e-multiselect.e-input-group .e-input-group-icon, .e-multiselect.e-input-group.e-control-wrapper .e-input-group-icon:hover {
    color: red;
    font-size: 14px;
}
```

## Customizing the focus color

Customize the input element focus color using the following CSS.

```css
.e-multiselect.e-input-group.e-control-wrapper.e-input-focus::before, .e-multiselect.e-input-group.e-control-wrapper.e-input-focus::after {
    background: #c000ff;
}
```

## Customizing the disabled component’s text color

Style the text color of disabled components using the following CSS.

```css
.e-multiselect.e-disabled .e-multi-select-wrapper .e-delim-values {
    -webkit-text-fill-color: red;
}
```

## Customizing the color of the placeholder text

Modify the placeholder text color using the following CSS.

```css
.e-multiselect input.e-dropdownbase::placeholder {
        color: red;
}
```

## Customizing the placeholder to add mandatory indicator(*)

Add a mandatory indicator asterisk (*) to float label elements using the following CSS.

```css
.e-input-group.e-control-wrapper.e-float-input .e-float-text::after {
    content: "*";
    color: red;
}
```

## Customizing the float label element's focusing color

Style the float label focus color using the following CSS.

```css
.e-float-input.e-input-group:not(.e-float-icon-left) .e-float-line::before,.e-float-input.e-control-wrapper.e-input-group:not(.e-float-icon-left) .e-float-line::before,.e-float-input.e-input-group:not(.e-float-icon-left) .e-float-line::after,.e-float-input.e-control-wrapper.e-input-group:not(.e-float-icon-left) .e-float-line::after {
    background-color: #2319b8;
}

.e-multiselect.e-input-group.e-control-wrapper.e-float-input.e-input-focus .e-float-text.e-label-top, .e-float-input.e-control-wrapper:not(.e-error).e-input-focus input ~ label.e-float-text {
    color: #2319b8;
}

```

## Customizing the outline theme's focus color

Customize the outline theme focus color using the following CSS.

```css
.e-outline.e-input-group.e-input-focus:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled):not(.e-float-icon-left),.e-outline.e-input-group.e-input-focus.e-control-wrapper:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled):not(.e-float-icon-left),.e-outline.e-input-group.e-input-focus:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled),.e-outline.e-input-group.e-control-wrapper.e-input-focus:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled) {
    border-color: #b1bd15;
    box-shadow: inset 1px 1px #b1bd15, inset -1px 0 #b1bd15, inset 0 -1px #b1bd15;
}
```

## Customizing the background color of focus, hover, and active items

Modify the background color for focused, hovered, and active items using the following CSS.

```css
.e-dropdownbase .e-list-item.e-item-focus, .e-dropdownbase .e-list-item.e-active, .e-dropdownbase .e-list-item.e-active.e-hover, .e-dropdownbase .e-list-item.e-hover {
    background-color: #1f9c99;
    color: #2319b8;
}
```

## Customizing the appearance of pop-up element

Style the popup list appearance using the following CSS.

```css
.e-dropdownbase .e-list-item, .e-dropdownbase .e-list-item.e-item-focus {
    background-color: #29c2b8;
    color: #207cd9;
    font-family: emoji;
    min-height: 29px
}
```

## Customizing the color of the checkbox

Modify checkbox styling using the following CSS.

```css
.e-popup .e-checkbox-wrapper .e-frame.e-check, .e-popup .e-checkbox-wrapper:hover .e-frame.e-check {
    background-color: green;
    color: white;
}
```