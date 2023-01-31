---
layout: post
title: Radial menu in React Speed dial component | Syncfusion
description: Learn here all about Radial menu in Syncfusion React Speed dial component of Syncfusion Essential JS 2 and more.
control: Radial menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Radial menu in React Speed dial component

The React Speed Dial action items can be displayed in a circular patter like a radial menu by setting [`mode`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/#mode) property. You can customize the `direction`, `startAngle`, `endAngle` and `offset` by setting [`radialSettings`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#radialsettings) property.

## Radial menu direction

You can open the action items in either clockwise or anticlockwise by setting [`direction`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#direction) property. The default value is [`Auto`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialDirection/) where the action items are displayed based on the `position` property of the Speed Dial.

```ts
{/* Import the Speed Dial. */}
import { SpeedDialComponent, SpeedDialItemModel, RadialSettingsModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* To render Speed Dial.*/}
function App() {

  const items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
  ];

  const radialSettings: RadialSettingsModel = { direction: 'AntiClockwise' };

  return (
    {/* Initialize the SpeedDial component. */}
    <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' items={items} mode= 'Radial' radialSettings= {radialSettings} target="#targetElement"></SpeedDialComponent>
  );
}
export default App;
```

## Radial menu start and end angle

You can modify the start and end angle of action items by setting [`startAngle`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#startangle) and [`endAngle`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#endangle) properties. If the angle is not defined, the action items are displayed based on the `position` property of the Speed Dial.

```ts
{/* Import the Speed Dial. */}
import { SpeedDialComponent, SpeedDialItemModel, RadialSettingsModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* To render Speed Dial.*/}
function App() {

  const items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
  ];

  const radialSettings: RadialSettingsModel = { direction: 'AntiClockwise', startAngle: 180, endAngle: 360 };

  return (
    {/* Initialize the SpeedDial component. */}
    <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' items={items} mode= 'Radial' radialSettings= {radialSettings} position='MiddleCenter' target="#targetElement"></SpeedDialComponent>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));
```

## Offset

You can modify the offset distance between action items and Speed Dial button using [`offset`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#offset) property.

```ts
{/* Import the Speed Dial. */}
import { SpeedDialComponent, SpeedDialItemModel, RadialSettingsModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* To render Speed Dial.*/}
function App() {

  const items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
  ];

  const radialSettings: RadialSettingsModel = { offset: '80px' };

  return (
    {/* Initialize the SpeedDial component. */}
    <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' items={items} mode= 'Radial' radialSettings= {radialSettings} target="#targetElement"></SpeedDialComponent>
  );
}
export default App;
```

Below example demonstrates the radial menu settings of the Speed Dial.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/radial-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/radial-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/radial-cs2" %}
