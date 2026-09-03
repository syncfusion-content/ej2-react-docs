---
layout: post
title: Style in React Slider | Syncfusion
description: Override React Slider CSS classes like e-slider-track, e-handle, and e-tick to customize the track, thumb, and ticks appearance.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Slider

This content provides the exact CSS structure you can use to modify the component's appearance based on your preferences.

## Customizing the React Slider track

The following CSS customizes the React Slider track.

```css
.e-control-wrapper.e-slider-container.e-horizontal .e-slider-track {
    background: #007bff;
    height: 3px;
}
```

## Customizing the React Slider handle

The following CSS customizes the React Slider handle properties.

```css
.e-control-wrapper.e-slider-container .e-slider .e-handle {
    background-color: #f9920b;
    border-radius: 50%;
    border: 0;
}
```

## Customizing the React Slider limits

The following CSS customizes the React Slider limits.

```css
.e-control-wrapper.e-slider-container.e-horizontal .e-limits {
    background-color: rgba(69, 100, 233, 0.46);
}
```

## Customizing the React Slider ticks

The following CSS customizes the React Slider ticks.

```css
.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}
```

## Customizing the React Slider buttons

The following CSS customizes the React Slider buttons.

```css
.e-control-wrapper.e-slider-container .e-slider-button {
    background: #007bff;
    height: 25px;
    width: 25px;
}
```
