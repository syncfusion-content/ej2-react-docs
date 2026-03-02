---
layout: post
title: Style in React Chips component | Syncfusion
description: Learn here all about Style in Syncfusion React Chips component of Syncfusion Essential JS 2 and more.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Chips component

Customize the Chips component's appearance by overriding default CSS styles. The following examples demonstrate common styling patterns. Use these CSS structures as a foundation and adapt them according to your design requirements.

## Chip text styling

Use the following CSS to customize chip text properties such as font size, color, and weight:

```css
.e-chip .e-chip-text {
    font-size: 20px;
    color: black;
    font-weight: normal;
}
```

## Chip icon styling

Use the following CSS to customize chip icon properties such as background image and opacity:

```css
.e-chip .e-icon {
    background-image: url('https://ej2.syncfusion.com/demos/src/chips/images/laura.png');
    opacity: 0.8;
}
```

## Chip delete button styling

Use the following CSS to customize the delete button appearance, including color and font size:

```css
.e-chip-list .e-chip .e-chip-delete.e-dlt-btn {
    color: #e3165b;
    font-size: 12px;
}
```

## Outline chip styling

Use the following CSS to customize the outline chip border appearance:

```css
.e-chip-list .e-chip.e-outline {
    border-color: #e3165b;
    border-width: 3px;
}
```

## Chip selection styling

Use the following CSS to customize chip appearance when selected. Single and multiple selection styles can be defined separately:

```css
/* To customize single Chip on selection */
.e-chip-list.e-selection .e-chip.e-active {
    background-color: #ffca1c;
    color: #e3165b;
}

/* To customize multiple Chip on selection */
.e-chip-list .e-chip.e-active {
    background-color: #e3165b;
    color: white;
}
```

## Chip avatar text styling

Use the following CSS to customize avatar text properties such as background color and text color:

```css
.e-chip-list .e-chip .e-chip-avatar {
    background-color: #d51a1a;
    color: #fafafa;
}
```

## Chip height sizing

Use the following CSS to customize the height of chips in a ChipList:

```css
.e-chip-list.e-chip {
    height: 60px;
  }
```
