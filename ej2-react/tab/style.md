---
layout: post
title: Style in React Tab component | Syncfusion
description: Learn here all about Style in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Tab component

The following content provides the exact CSS structure that can be used to modify the control’s appearance based on user preference.

## Customizing Tab

Use the following CSS to customize the Tab.

```css

.e-tab {
    border: 5px solid rgb(173, 255, 47);
}

```

## Customizing the Tab items

Use the following CSS to customize the header items of Tab.

```css

.e-tab .e-tab-header .e-toolbar-items {
    background: #9faed8;
    border: 2px solid blue;
}

```

Use the following CSS to customize the content items of Tab.

```css

.e-tab .e-content .e-item {
    color: #a78515;
    font-size: 14px;
}

```

## Customizing Tab's header

Use the following CSS to customize the header of Tab control.

```css

.e-tab .e-tab-header {
    background: #badfba !important;
}

```

## Customizing Tab's header icon

Use the following CSS to customize the header item icon of Tab control.

```css

.e-tab .e-tab-header .e-toolbar-item .e-tab-icon {
    color: #badfba !important;
}

```

## Customizing Tab's content

Use the following CSS to customize the content of Tab control.

```css

.e-tab .e-content {
    background: #d1f6d1 !important;
}

```

## Customizing the hover state of Tab control

Use the following CSS to customize the tab item when hovering.

```css

.e-tab .e-tab-header .e-toolbar-item .e-tab-wrap:hover {
    background: #d1f6d1 !important;
}

```

Use the following CSS to customize the tab item popup icon when hovering.

```css

.e-tab .e-tab-header .e-hor-nav .e-popup-up-icon:hover,
.e-tab .e-tab-header .e-hor-nav .e-popup-down-icon:hover {
    background: #d1f6d1 !important;
}

```

## Customizing selected item of Tab control

Use the following CSS to customize the selected tab item.

```css

.e-tab .e-tab-header .e-toolbar-item.e-active {
    background: #d1f4d1;
}

```

Use the following CSS to customize the selected tab item text and icon.

```css

.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-text,
.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-icon {
    color: green !important;
}

```