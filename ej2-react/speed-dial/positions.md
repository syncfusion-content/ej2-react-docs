---
layout: post
title: Positions in React Speed dial component | Syncfusion
description: Learn here all about Positions in Syncfusion React Speed dial component of Syncfusion Essential JS 2 and more.
control: Positions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Positions in React Speed dial component

This section explains the different positions of SpeedDial.

## Target

The [Target](https://helpej2.syncfusion.com/react/documentation/api/speed-dial#target) property defines the selector for the element in which the speed dial will be positioned. If the Target is not defined, then Speed Dial is positioned based on the browser viewport.

```ts
{/* Import the Speed Dial. */}
import { SpeedDialComponent, SpeedDialItemModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* To render Speed Dial.*/}
function App() {

   const items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
  ];

  return (
    {/* Initialize the SpeedDial component. */}
    <div>
      <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
      <SpeedDialComponent id='speeddial' content='Add' items={items} target="#targetElement"></SpeedDialComponent>
    </div>
  );
}
export default App;
```

## Built-in positions

The Speed dial control can be positioned anywhere on the [`target`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#target) using the [`position`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#position) property. If the `target` is not defined, then Speed Dial is positioned based on the browser viewport.

The position values of Speed Dial are as follows:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/position-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/position-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/position-cs1" %}

## Custom Positioning

You can define the custom position for the SpeedDial by overriding the `top`, `left`, `right`, and `bottom` CSS properties using [CssClass](https://helpej2.syncfusion.com/react/documentation/api/speed-dial#cssclass).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/position-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/position-cs4/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/position-cs4" %}
