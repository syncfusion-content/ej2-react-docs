---
layout: post
title: Styles in React Speed dial component | Syncfusion
description: Learn here all about Styles in Syncfusion React Speed dial component of Syncfusion Essential JS 2 and more.
control: Styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styles in React Speed dial component

This section briefs different ways to style SpeedDial component.

## SpeedDial button

You can customize the icon and text of React Speed Dial button using [`openIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#openiconcss), [`closeIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#closeiconcss) and [`content`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#content) properties.

### Icon only

You can use the [`openIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#openiconcss) and [`closeIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#closeiconcss) properties to show icons in speed dial button. You can also show tooltip on hover to show additional details to end-user by setting `title` attribute.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/styles-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/styles-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs1" %}

### Text only

You can show only text in Speed Dial button by setting [`content`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#content) property  without setting icon properties..

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/styles-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/styles-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs2" %}

### Icon with text

You show icon and text in SpeedDial button using [`openIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#openiconcss), [`closeIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#closeiconcss) and [`content`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#content) properties together.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/styles-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/styles-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs3" %}

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

## Visible

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

## Opens on hover

You can use [`opensOnHover`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#opensonhover) property to open actions items on hover itself. By default action items displayed only when clicking the speed dial button.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/styles-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/styles-cs6/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs6" %}

 ## Customized icon

You can use the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#cssclass) property to customize the appearance of the speedDial component in its default primary state. Below example demonstrates the `cssClass` property usage in speedDial.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/styles-cs7/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/styles-cs7/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/styles-cs7/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs7" %}