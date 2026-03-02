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

Customize the SpeedDial component's appearance using various styling options and CSS classes. This section covers button customization, predefined styles, and advanced visual effects.

## SpeedDial button

Customize the SpeedDial button's appearance using the [`openIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#openiconcss), [`closeIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#closeiconcss), and [`content`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#content) properties. These properties control what the button displays when the menu is closed and when it's open.

### Icon only

Display only icons in the SpeedDial button using the [`openIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#openiconcss) and [`closeIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#closeiconcss) properties. These show different icons depending on whether the popup is open or closed. Add a `title` attribute to display a tooltip on hover, providing users with context about the button's purpose.

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

Display only text in the SpeedDial button by setting the [`content`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#content) property without specifying icon properties. This creates a text-based button suitable for clear, label-based interactions.

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

Display both icon and text in the SpeedDial button by using the [`openIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#openiconcss), [`closeIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#closeiconcss), and [`content`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#content) properties together. This combination provides clear visual and textual identification.

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

Prevent user interaction with the SpeedDial component by setting the [`disabled`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#disabled) property to `true`. When disabled, the button appears grayed out and cannot be clicked.

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

Apply predefined semantic styles to the SpeedDial button using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#cssclass) property. These styles provide visual indicators for different action types and priorities.

| cssClass | Description | Use Case |
| -------- | ----------- | -------- |
| e-primary | Primary action styling (default appearance). | Use for main user actions. |
| e-outline | Button with outline appearance instead of solid fill. | Use for secondary actions. |
| e-info | Informative action styling. | Use for help or information actions. |
| e-success | Positive action styling indicating completion. | Use for confirm or success actions. |
| e-warning | Cautionary action styling for warnings. | Use for warning or alert actions. |
| e-danger | Negative action styling for destructive actions. | Use for delete or destructive actions. |

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

Control the visibility of the SpeedDial button using the [`visible`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#visible) property. Set it to `true` to show the button or `false` to hide it. This is useful for conditionally displaying the SpeedDial based on user permissions or context.

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

Display a tooltip on hover over the SpeedDial button by setting the `title` attribute. Tooltips provide helpful context about the button's purpose without cluttering the UI, improving user experience.

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

Enable the [`opensOnHover`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#opensonhover) property to automatically open action items when the user hovers over the SpeedDial button. By default, items only display on click. Enabling hover opening creates a more fluid interaction pattern.

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

Create custom button appearances by using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#cssclass) property to apply custom CSS styles. Define your own CSS rules to customize colors, sizes, borders, and other visual properties. The following example demonstrates how to apply custom styling to the SpeedDial button.

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