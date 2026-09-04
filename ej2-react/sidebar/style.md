---
layout: post
title: Styles and Appearance in React Sidebar | Syncfusion
description: CSS reference for customizing the Syncfusion React Sidebar root, left and right positioned variants, and the open-state transition.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styles and Appearance in React Sidebar

The following content provides the exact CSS structure that can be used to modify the component's appearance based on the user's preference.

## Customizing the sidebar

Use the below CSS to customize the React Sidebar root element.

```css

.e-sidebar {
    background: #898b2b
}

```

## Customizing the React Sidebar based on the positions

Use the below CSS to customize the left positioned sidebar.

```css

.e-sidebar.e-left {
    border-right: 2px solid red;
}

```

Use the below CSS to customize the right positioned sidebar.

```css

.e-sidebar.e-right {
    border-left: 2px solid red;
}

```

## Customizing the React Sidebar based on the active state

Use the below CSS to customize the open state of the left positioned sidebar.

```css

.e-sidebar.e-left.e-open {
    transition: transform 2.5s ease;
}

```

Use the below CSS to customize the open state of the right positioned sidebar.

```css

.e-sidebar.e-right.e-open {
     transition: transform 2.5s ease;
}

```

Use the below CSS to customize the closed state of the left positioned sidebar.

```css

.e-sidebar.e-left.e-transition.e-close {
    transition: transform 2.5s ease, visibility 1200ms;
}

```

Use the below CSS to customize the closed state of the right positioned sidebar.

```css

.e-sidebar.e-right.e-transition.e-close {
    transition: transform 2.5s ease, visibility 1200ms;
}

```

## Customizing the React Sidebar with dock state

When you enable the Dock support, the "e-dock" class will be added to the root element. Based on that class, you can also customize all the above stated customization. Use the following CSS to customize the React Sidebar element with a dock state.

```css

.e-sidebar.e-dock {
    background: #2d323e;
}

```

## Customizing the different types of sidebar

Use the below CSS to customize the auto type sidebar.

```css

.e-sidebar.e-left.e-auto {
    background-color: pink;
}

```

Use the below CSS to customize the push type sidebar.

```css

.e-sidebar.e-left.e-push {
    background-color: beige;
}

```

Use the below CSS to customize the over type sidebar.

```css

.e-sidebar.e-left.e-over {
    background-color: aqua;
}

```

Use the below CSS to customize the slide type sidebar.

```css

.e-sidebar.e-left.e-slide {
    background-color: green;
}

```

## Customizing the backdrop of the sidebar

Use the below CSS to customize the backdrop of the sidebar.

```css

.e-sidebar-overlay {
    background-color: aqua;
}

```

## Customizing the React Sidebar in the RTL direction

When you enable the RTL (right to left direction) support, the "e-rtl" class will be added to the root element. Based on that class, you can also customize all the above stated customization. Use the following CSS to customize the React Sidebar element in the RTL (right to left direction) mode.

```css

.e-sidebar.e-left.e-rtl {
    background-color: antiquewhite;
}

```

## Prevent the animation transition for the React Sidebar component

Use the below CSS to prevent the animation transition for the React Sidebar component.

```css

.e-sidebar-context .e-content-animation {
    transition: none !important;
    transform: none !important;
}

```
