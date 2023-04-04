---
layout: post
title: Appearance of React Speed dial component | Syncfusion
description: Learn here all about Appearance of in Syncfusion React Speed dial component of Syncfusion Essential JS 2 and more.
control: Styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance of React Speed dial component

This section briefs different ways to Appearance of SpeedDial component.

## Disabled

You can enable or disable the SpeedDial component using [`disabled`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#disabled) property.

```ts
{/* Import the Speed Dial. */}
import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* To render Speed Dial.*/}
function App() {

  return (
      {/* Initialize the SpeedDial component in disabled state */}
      <SpeedDialComponent id='speeddial' content='Edit' disabled={true} target="#targetElement"></SpeedDialComponent>
  );
}
export default App;
```

## Visibility

You can set the Speed Dial button to visible/hidden state using [`visible`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#visible) property.

```ts
{/* Import the Speed Dial. */}
import { SpeedDialComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

{/* To render Speed Dial.*/}
function App() {

  return (
      {/* Initialize the SpeedDial component in hidden state */}
      <SpeedDialComponent id='speeddial' content='Edit' visible={false} target="#targetElement"></SpeedDialComponent>
  );
}
export default App;
```

# Modal

You can use the [`modal`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#modal) property to set the Speed Dial as modal which adds an overlay to prevent the background interaction.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/modal-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/modal-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speed-dial/modal-cs1" %}

## Tooltip

You can show tooltip on hover to show additional details to end-user by setting [`title`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#title) to Speed Dial button.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/styles-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/styles-cs5/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs5" %}

## cssClass

The React Speed Dial supports the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#cssclass) property. You can customize by setting the `cssClass` property with the below defined class.

| cssClass | Description |
| -------- | -------- |
| e-primary | Used to represent a primary action. |
| e-outline |  Used to represent an appearance of button with outline. |
| e-info |  Used to represent an informative action. |
| e-success | Used to represent a positive action. |
| e-warning | Used to represent an action with caution. |
| e-danger | Used to represent a negative action. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/styles-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/styles-cs4/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs4" %}
