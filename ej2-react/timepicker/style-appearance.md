---
layout: post
title: Style appearance in React Timepicker component | Syncfusion
description: Learn here all about Style appearance in Syncfusion React Timepicker component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in React Timepicker component

The following CSS structure enables you to customize the TimePicker component's appearance. Apply these styles with appropriate specificity to override default styles for your use case.

## Customizing the appearance of TimePicker wrapper element

Use the following CSS to customize the appearance of wrapper element.

```css
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input {
        font-size: 20px;
        height: 40px;
}
```

## Customizing the TimePicker icon element

Use the following CSS to customize the TimePicker icon element

```css
/* To specify background color and font size */
.e-time-wrapper .e-time-icon.e-icons, *.e-control-wrapper.e-time-wrapper .e-time-icon.e-icons {
        font-size: 20px;
        background-color: beige;
}
```

## Customizing the TimePicker popup

Use the following CSS to customize the TimePicker popup

```css
/* To specify height */
.e-timepicker.e-popup {
        height: 100px;
}
```

## Customizing the TimePicker popup content

Use the following CSS to customize the TimePicker popup content

```css
/* To specify height */
.e-timepicker.e-popup .e-list-parent.e-ul li.e-list-item {
        background-color: beige;
        font-size: 20px;
}
```

## Full screen mode support in mobiles and tablets

The full-screen mode feature optimizes the TimePicker for mobile and tablet devices by expanding the popup to occupy the entire screen. This provides improved visibility and touch-friendliness in both landscape and portrait orientations.

To enable full-screen mode, set the [`fullScreenMode`](https://ej2.syncfusion.com/react/documentation/api/timepicker#fullScreenMode) property to `true`:

```typescript
// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
// enable ripple effect
enableRipple(true);

function App(){
    const mobileMode:boolean = true;

    return <TimePickerComponent id="timepicker" fullScreenMode={this.mobileMode} />
};
ReactDOM.render(<App />, document.getElementById('timer'));
```

![TimePickerFullScreen](../images/TimePickerFullScreen.gif)