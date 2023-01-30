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

## Opens items on hover

You can open the Speed Dial action items on mouse hover by setting the [`opensOnHover`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#opensonhover) property.

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
    <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' items={items} opensOnHover= {true} target="#targetElement"></SpeedDialComponent>
  );
}
export default App;
```

## Programmatically show/hide Speed Dial items

You can open/close the Speed Dial action items programmatically using [`show`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#show) and [`hide`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#hide) methods.

Below example demonstrates open/close action items on button click.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/position-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/position-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/position-cs2" %}

## Programmatically refresh the position

You can refresh the position of the Speed Dial using [`refreshPosition`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/#refreshposition) method when the `target`position is changed.

The following sample demonstrates the above functionalities of a Speed Dial to refresh the position of speed dial.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/position-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/position-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/position-cs3" %}
