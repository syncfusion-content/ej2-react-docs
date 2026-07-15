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

## Button styling

Customize the appearance of the SpeedDial button using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#cssclass) property to apply predefined semantic styles or custom CSS. Configure button icons using [`openIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#openiconcss) and [`closeIconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#closeiconcss) properties for different states.

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

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/styles-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/styles-cs9/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/styles-cs9/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/styles-cs9" %}

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