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

The following content provides the exact CSS structure that can be used to modify the component's appearance based on user preferences.

## Customizing the Chip text

Use the following CSS to customize the Chip text properties.

```css
.e-chip .e-chip-text {
    font-size: 20px;
    color: black;
    font-weight: normal;
}
```

## Customizing the Chip icon

Use the following CSS to customize the Chip icon properties.

```css
.e-chip .e-icon {
    background-image: url('https://ej2.syncfusion.com/demos/src/chips/images/laura.png');
    opacity: 0.8;
}
```

## Customizing the Chip delete button

Use the following CSS to customize the Chip delete button appearance.

```css
.e-chip-list .e-chip .e-chip-delete.e-dlt-btn {
    color: #e3165b;
    font-size: 12px;
}
```

## Customizing the Chip outline

Use the following CSS to customize the Chip outline.

```css
.e-chip-list .e-chip.e-outline {
    border-color: #e3165b;
    border-width: 3px;
}
```

## Customizing the Chip on selection

Use the following CSS to customize the Chip on selection.

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

## Customizing the Chip avatar text

Use the following CSS to customize the Chip avatar text properties.

```css
.e-chip-list .e-chip .e-chip-avatar {
    background-color: #d51a1a;
    color: #fafafa;
}
```