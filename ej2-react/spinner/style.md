---
layout: post
title: Style in React Spinner | Syncfusion
description: Override the React Spinner CSS classes to customize the stroke color, fill, and other visual properties of the Material, Fabric, Bootstrap, and Bootstrap4 themes.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Spinner

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the React Spinner

Use the following CSS to customize the React Spinner stroke color.

### Material theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-material {
  stroke: green;
}

```

### Fabric theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-fabric {
  stroke: green;
}

```

### Bootstrap theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-bootstrap {
    fill: green;
    stroke: green;
}

```

### Bootstrap4 theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-bootstrap4 {
    stroke: green;
}

```

### High Contrast theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-high-contrast .e-path-arc {
    stroke: green;
}

```