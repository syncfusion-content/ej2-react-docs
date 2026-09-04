---
layout: post
title: Style and Appearance in React Tab | Syncfusion
description: CSS class reference for customizing the Syncfusion React Tab wrapper, header, active item, close icon, and content area.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in React Tab

The following content provides the exact CSS structure that can be used to modify the control's appearance based on user preference.

The React Tab component renders the following CSS class hierarchy. Use these selectors to override or extend the default appearance:

* `.e-tab` — Root container of the React Tab component.
* `.e-tab .e-tab-header` — Outer wrapper of the React Tab header section.
* `.e-tab .e-tab-header .e-toolbar-items` — Container of all header items.
* `.e-tab .e-tab-header .e-toolbar-item` — Individual header item; the active item additionally has the `.e-active` class.
* `.e-tab .e-content` — Container of the React Tab content panels.
* `.e-tab .e-content .e-item` — Individual content panel.

## Customizing React Tab

Use the following CSS to customize the React Tab.

```css

.e-tab {
    border: 5px solid rgb(173, 255, 47);
}

```

## Customizing the React Tab items

Use the following CSS to customize the header items of React Tab.

```css

.e-tab .e-tab-header .e-toolbar-items {
    background: #9faed8;
    border: 2px solid blue;
}

```

Use the following CSS to customize the content items of React Tab.

```css

.e-tab .e-content .e-item {
    color: #a78515;
    font-size: 14px;
}

```

## Customizing React Tab's header

Use the following CSS to customize the header of React Tab control.

```css

.e-tab .e-tab-header {
    background: #badfba !important;
}

```

## Customizing React Tab's header icon

Use the following CSS to customize the header item icon of React Tab control.

```css

.e-tab .e-tab-header .e-toolbar-item .e-tab-icon {
    color: #badfba !important;
}

```

## Customizing React Tab's content

Use the following CSS to customize the content of React Tab control.

```css

.e-tab .e-content {
    background: #d1f6d1 !important;
}

```

## Customizing the hover state of React Tab control

Use the following CSS to customize the tab item when hovering.

```css

.e-tab .e-tab-header .e-toolbar-item .e-tab-wrap:hover {
    background: #d1f6d1 !important;
}

```

Use the following CSS to customize the React tab item popup icon when hovering.

```css

.e-tab .e-tab-header .e-hor-nav .e-popup-up-icon:hover,
.e-tab .e-tab-header .e-hor-nav .e-popup-down-icon:hover {
    background: #d1f6d1 !important;
}

```

## Customizing selected item of React Tab control

Use the following CSS to customize the selected React tab item.

```css

.e-tab .e-tab-header .e-toolbar-item.e-active {
    background: #d1f4d1;
}

```

Use the following CSS to customize the selected React tab item text and icon.

```css

.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-text,
.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-icon {
    color: green !important;
}

```