---
layout: post
title: Style in React Tooltip | Syncfusion
description: Override the React Tooltip CSS classes to customize the popup border, background, opacity, border-radius, and content typography.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Tooltip

The following content provides the CSS structure that can be used to modify the component's appearance according to user preferences.

## Customizing the React Tooltip

Use the following CSS to customize the React Tooltip.

```css
.e-tooltip-wrap {
    border-radius: 4px;
    opacity: 1;
}
```

## Customizing the React Tooltip popup

Use the following CSS to customize the React Tooltip popup properties.

```css
.e-tooltip-wrap.e-popup {
    background-color: #fff;
    border: 2px solid #000;
}
```

## Customizing the React Tooltip content

Use the following CSS to customize the React Tooltip content.

```css
.e-tooltip-wrap .e-tip-content {
    color: red;
    font-size: 12px;
    line-height: 20px;
}
```

## Customizing the React Tooltip arrow tip

Use the following CSS to customize the React Tooltip arrow tip.

```css
/* To customize the arrow tip at bottom */
.e-tooltip-wrap .e-arrow-tip.e-tip-bottom {
    height: 12px;
    left: 50%;
    top: 100%;
    width: 24px;
}

/* To customize the arrow tip at top */
.e-tooltip-wrap .e-arrow-tip.e-tip-top {
    height: 12px;
    left: 50%;
    top: -9px;
    width: 24px;
}

/* To customize the arrow tip at left */
.e-tooltip-wrap .e-arrow-tip.e-tip-left {
    height: 24px;
    left: -9px;
    top: 48%;
    width: 12px;
}

/* To customize the arrow tip at right */
.e-tooltip-wrap .e-arrow-tip.e-tip-right {
    height: 24px;
    left: 100%;
    top: 50%;
    width: 12px;
}
```

## Customizing the React Tooltip inner tip

Use the following CSS to customize the React Tooltip inner tip.

```css
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-right,
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-left,
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-bottom,
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-top {
    color: #fff;
    font-size: 25.9px;
}
```

## Customizing the React Tooltip outer tip

Use the following CSS to customize the React Tooltip outer tip.

```css
/* To customize the arrow tip at bottom */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-bottom {
    border-left: 12px solid transparent;
    border-right: 14px solid transparent;
    border-top: 12px solid #000;
}

/* To customize the arrow tip at top */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-top {
    border-bottom: 12px solid #000;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
}

/* To customize the arrow tip at left */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-left {
    border-bottom: 12px solid transparent;
    border-right: 12px solid #000;
    border-top: 12px solid transparent;
}

/* To customize the arrow tip at right */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-right {
    border-bottom: 12px solid transparent;
    border-left: 12px solid #000;
    border-top: 12px solid transparent;
}
```
