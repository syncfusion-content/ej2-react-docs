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

Display SpeedDial action items in a circular pattern around the button by setting the [`mode`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/#mode) property to `Radial`. Customize the radial layout using the [`radialSettings`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#radialsettings) property to control `direction`, `startAngle`, `endAngle`, and `offset` values. This creates an elegant radial menu ideal for displaying multiple related actions.

## Radial menu direction

Control the direction in which items are arranged around the button by setting the [`direction`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#direction) property to either `Clockwise` or `AntiClockwise`. The default value is [`Auto`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialDirection/), which automatically determines the direction based on the SpeedDial's `position` property.

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

Control the angular span of the radial menu by setting the [`startAngle`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#startangle) and [`endAngle`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#endangle) properties. These angles determine where items begin and end around the circle (0-360 degrees). If angles are not defined, items automatically distribute based on the SpeedDial's `position` property. Use custom angles to create partial arcs or specific patterns.

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

Control the distance between action items and the SpeedDial button using the [`offset`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#offset) property. A larger offset pushes items further from the center button, while smaller values bring them closer. Adjust this to optimize layout spacing based on your design needs.

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
