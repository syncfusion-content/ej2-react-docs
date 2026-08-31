---
layout: post
title: Style and Appearance in React Calendar | Syncfusion
description: Apply CSS to the React Calendar to change background, borders, hover, focus, and selected-day styles with .e-calendar selectors.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in React Calendar

The following CSS examples show how to modify the Calendar control's appearance to match user preferences. Apply these rules with appropriate specificity to override default styles.

## Customizing the background color for the Calendar

Use the following CSS to set a custom background color and outer border for the Calendar container.

```css
/* Set background color and border */
.e-calendar {
        background-color: peachpuff;
        border: 3px solid red;
}
```

## Customizing the Calendar date elements on hovering

Use the following CSS to customize the date elements on hovering in the Calendar.

```css
/* To specify background color, color, and border */
.e-calendar .e-content td:hover span.e-day, .e-calendar .e-content td:focus span.e-day, .e-bigger.e-small .e-calendar .e-content td:hover span.e-day, .e-bigger.e-small .e-calendar .e-content td:focus span.e-day {
        background-color: red;
        border: 2px solid;
        color: #212529;
}
```

## Customizing the border of date cell grid

Use the following CSS to add the border to the date cell grid.

```css
/* To specify border */
.e-calendar .e-content span.e-day, .e-bigger.e-small .e-calendar .e-content span.e-day {
        border: 1px solid;
}
```

## Customizing the Calendar title

Use the following CSS to customize the Calendar title.

```css
/* To specify color and font size  */
.e-calendar .e-header .e-title, .e-bigger.e-small .e-calendar .e-header .e-title {
        color: black;
        font-size: 20px;
}
```

## Customizing the previous and next icons

Use the following CSS to customize the previous and next navigation icons in the Calendar header.

```css
/* Set color and border */
.e-calendar .e-header span, .e-bigger.e-small .e-calendar .e-header span {
        border: 1px solid;
        color: chocolate;
}
```

## Customizing the content header in Calendar

Use the following CSS to customize the background of the day-of-week header row inside the Calendar grid.

```css
/* Set background */
.e-calendar .e-content thead, .e-bigger.e-small .e-calendar .e-content thead {
    background: aquamarine;
}
```

## Customizing the Calendar date elements on hovering

Use the following CSS to customize how date cells appear on hover and focus.

```css
/* Set background color, color, and border */
.e-calendar .e-content td:hover span.e-day, .e-calendar .e-content td:focus span.e-day, .e-bigger.e-small .e-calendar .e-content td:hover span.e-day, .e-bigger.e-small .e-calendar .e-content td:focus span.e-day {
        background-color: red;
        border: 2px solid;
        color: #212529;
}
```

### Customizing the border of date cell grid

Use the following CSS to add a border to every day cell in the grid.

```css
/* Set border */
.e-calendar .e-content span.e-day, .e-bigger.e-small .e-calendar .e-content span.e-day {
        border: 1px solid;
}
```

## Customizing the selected date cell grid

Use the following CSS to customize the focused/today day cell inside the Calendar grid.

```css
/* Set background color and color */
.e-calendar .e-content td.e-focused-date.e-today span.e-day {
        background-color: maroon;
        color: #fff;
}
```

## Customizing the Today's button

Use the following CSS to customize the **Today** button rendered in the Calendar footer.

```css
/* Set background color, color, and border-color */
.e-calendar .e-btn.e-today.e-flat.e-primary {
        background-color: red;
        border-color: black;
        color: black;
}
```
