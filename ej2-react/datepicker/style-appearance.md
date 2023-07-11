---
layout: post
title: Style appearance in React Datepicker component | Syncfusion
description: Learn here all about Style appearance in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in React Datepicker component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of DatePicker wrapper element

Use the following CSS to customize the appearance of wrapper element.

```css
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input {
        height: 40px;
        font-size: 20px;
}
```

## Customizing the DatePicker icon element

Use the following CSS to customize the DatePicker icon element

```css
/* To specify background color and font size */
.e-input-group .e-input-group-icon:last-child, .e-input-group.e-control-wrapper .e-input-group-icon:last-child {
        font-size: 12px;
        background-color: darkgray;
}
```

## Customizing the Calendar popup of the DatePicker

Please check the below section, to customize the style and appearance of the Calendar component.

[Customizing Calendar's style and appearance](../calendar/style-appearance/)

## Full Screen Mode: Enhancing the DatePicker Component (Mobile Support Only)

We have introduced the full screen mode functionality in our DatePicker component, enabling users to see the DatePicker calendar element in full-screen mode for better visibility and an upgraded user experience. It is important to mention that this feature is exclusively available for mobile devices in both landscape and portrait orientations. To activate the full screen mode within the DatePicker component, simply set the [fullScreenMode](https://ej2.syncfusion.com/react/documentation/api/datepicker#fullScreenMode) API value to `true`. This action will extend the calendar element to occupy the entire screen on mobile devices.

```typescript
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

    private mobileMode:boolean = true;

    public render() {
        return <DatePickerComponent id="datepicker"  fullScreenMode={this.mobileMode} placeholder='Enter date' />
    }
};

ReactDOM.render(<App />, document.getElementById('element'));
```

![DatePickerFullScreen](../images/DatePickerFullScreen.gif)