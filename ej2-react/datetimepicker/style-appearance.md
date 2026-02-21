---
layout: post
title: Style appearance in React Datetimepicker component | Syncfusion
description: Learn here all about Style appearance in Syncfusion React Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in React Datetimepicker component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of DateTimePicker wrapper element

Use the following CSS selectors to customize the appearance of the wrapper element. Apply these styles with appropriate specificity to override default component styles.

```css
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input {
        font-size: 20px;
        height: 40px;
    }
```

## Customizing the DateTimePicker icon elements

Use the following CSS to customize the DateTimePicker icon appearance:

```css
/* To specify background color and font size */
.e-datetime-wrapper .e-input-group-icon.e-date-icon, .e-datetime-wrapper .e-input-group-icon.e-time-icon {
        font-size: 16px;
        background-color: blanchedalmond;
    }
```

## Customizing the time picker popup in the DateTimePicker

Use the following CSS to customize the time picker popup in the DateTimePicker

```css
/* To specify height */
.e-datetimepicker.e-popup {
        height: 100px;
}
```

## Customizing the Calendar popup of the DateTimePicker

Please check the below section, to customize the style and appearance of the Calendar component in the DateTimePicker

[Customizing Calendar's style and appearance](../calendar/style-appearance/)

## Full screen mode support in mobiles and tablets

The DateTimePicker's full-screen mode feature enhances visibility and usability on mobile and tablet devices by expanding the calendar and time picker popups to occupy the full screen in both landscape and portrait orientations. To enable full-screen mode, set the [fullScreenMode](https://ej2.syncfusion.com/react/documentation/api/datetimepicker#fullScreenMode) property to `true`. The calendar and time popup will then automatically expand to full-screen on mobile devices, providing a more immersive date and time selection experience.

```typescript
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    private mobileMode:boolean = true;
    public render() {
        return <DateTimePickerComponent id="datetimepicker" fullScreenMode={this.mobileMode}/>;
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
```

![DateTimePickerFullScreen](../images/DateTimePickerFullScreen.gif)