---
layout: post
title: Styles and Appearance in React Carousel | Syncfusion
description: CSS class reference for customizing the Syncfusion React Carousel items, indicators, navigators, and play/pause button.
control: Styles and appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styles and Appearance in React Carousel

To modify the React Carousel appearance, you need to override the default CSS of React Carousel component. Please find the list of CSS classes and its corresponding section in React Carousel component. Also, you have an option to create your own custom theme for the controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

## CSS Structure in React Carousel Control

The following content provides the exact CSS structure that can be used to modify the control’s appearance based on user preference.

| CSS Class | Purpose of Class |
| ----- | ----- |
| `.e-carousel .e-carousel-item` | To customize the React Carousel item |
| `.e-carousel-item.e-active` | To customize the active React Carousel item |
| `.e-carousel .e-carousel-indicators` | To customize the indicators |
| `.e-carousel .e-carousel-indicators .e-indicator-bars .e-indicator-bar` | To customize the indicator bars |
| `.e-carousel .e-carousel-indicators .e-indicator-bars .e-indicator-bar .e-indicator` | To customize the individual indicator appearance |
| `.e-carousel .e-carousel-navigators` | To customize the navigators |
| `.e-carousel .e-carousel-navigators .e-previous` | To customize the previous button |
| `.e-carousel .e-carousel-navigators .e-next` | To customize the next button |
| `.e-carousel .e-carousel-navigators .e-play-pause` | To customize the play and pause button |
| `.e-carousel.e-partial .e-carousel-slide-container` | To customize the partial visible slides |

![React Carousel](./images/carousel.jpg)

## Customizing the indicators

Use the following CSS to customize the space between indicators by overriding the `.e-indicator-bar` CSS class.

```css

.e-carousel .e-carousel-indicators .e-indicator-bars .e-indicator-bar {
    padding: 8px;
}

```

![React Carousel](./images/indicators.jpg)

Use the following CSS to customize the indicators appearance by overriding the `.e-indicator` CSS class.

```css

.e-carousel .e-carousel-indicators .e-indicator-bars .e-indicator-bar .e-indicator {
    width: 20px;
    border-radius: 100%;
}

```

![React Carousel](./images/indicator-size.jpg)

Use the following CSS to render the indicators outside the React Carousel items by overriding the `.e-carousel-indicators` CSS class.

```css

.e-carousel .e-carousel-indicators {
    bottom: auto;
}

```

![React Carousel](./images/indicators-outside.jpg)

## Customizing the navigators

Use the following CSS to customize the previous and next icon size and colors.

```css

.e-carousel .e-carousel-navigators .e-next .e-btn:not(:disabled) .e-btn-icon,
.e-carousel .e-carousel-navigators .e-previous .e-btn:not(:disabled) .e-btn-icon
{
    color: greenyellow;
    font-size: 25px;
}

```

![React Carousel](./images/navigators-size-color.jpg)

Use the following CSS to customize the navigators position to bottom by overriding the `.e-carousel-navigators` CSS class.

```css

.e-carousel .e-carousel-navigators {
   top: 120px;
}

```

![React Carousel](./images/navigators-position.jpg)

Use the following CSS to render the previous and next icon to outside the carousel items by overriding the `.e-previous` and `.e-next` CSS class.

```css

.e-carousel .e-carousel-navigators .e-previous,
.e-carousel .e-carousel-navigators .e-next
{
    margin: -60px;
    background: black;
}

```

![React Carousel](./images/previous-next.jpg)

## Customizing partial slides size

You can customize the partial slide size by overriding the `.e-carousel-slide-container` CSS class.

```css

.e-carousel.e-partial .e-carousel-slide-container{
    padding: 0 150px;
}

```

![React Carousel](./images/partial-slide-size.jpg)
