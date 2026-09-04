---
layout: post
title: Style in React Accordion | Syncfusion
description: CSS class reference for customizing the Syncfusion React Accordion container, list items, header, and expand/collapse icons.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Accordion

The following content provides the exact CSS structure that can be used to modify the control's appearance based on user preference.

## Customizing React Accordion

Use the following CSS to customize the Accordion.

```css
.e-accordion {
    border: 5px solid rgb(173, 255, 47);
}
```

## Customizing the list items

The following CSS styles each React Accordion item. Because `.e-acrdn-item` wraps both the header and the content region, the `color` and `background-color` set here are inherited by both unless you override the header or content separately.

```css
.e-accordion .e-acrdn-item {
    text-align: center;
    color: pink;
    background-color: #2fa1ff;
}
```

## Customizing the React Accordion's header

Use the following CSS to customize the header of React Accordion control.

```css
.e-accordion .e-acrdn-item > .e-acrdn-header {
    background: #2fa1ff !important;
    justify-content: center;
}
```

## Customizing the React Accordion's expand and collapse icons

The following CSS changes the color of the expand and collapse toggle icons.

```css
.e-accordion .e-acrdn-item .e-acrdn-header .e-toggle-icon .e-icons {
     color: pink;
}
```

## Customizing the hover state of the React Accordion control

The following CSS adds a border to an item header when the pointer hovers over it.

```css
.e-accordion .e-acrdn-item .e-acrdn-header:hover {
    border: 2px solid gray;
}
```

## Customizing the selected item of the React Accordion control

### Customizing the selected item background

The following CSS changes the background color of an expanded (`e-active`) or focused (`e-item-focus`) item header.

```css
.e-accordion .e-acrdn-item.e-select.e-active > .e-acrdn-header,
.e-accordion .e-acrdn-item.e-select.e-item-focus > .e-acrdn-header {
    background-color: rgb(0, 15, 100) !important;
}
```

### Customizing the selected item text

The following CSS changes the text color of the expanded or focused item header.

```css
.e-accordion .e-acrdn-item.e-select.e-active > .e-acrdn-header .e-acrdn-header-content,
.e-accordion .e-acrdn-item.e-select.e-item-focus > .e-acrdn-header .e-acrdn-header-content {
    color: #2fa1ff !important;
}
```