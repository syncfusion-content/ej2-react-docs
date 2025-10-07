---
layout: post
title: Template in React Timeline component | Syncfusion
description:  Checkout and learn about Template with Syncfusion React Timeline component of Syncfusion Essential JS 2 and more.
control: Timeline
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Timeline component

The Timeline component provides comprehensive template customization capabilities through the [template](https://ej2.syncfusion.com/react/documentation/api/timeline/#template) property. This feature allows you to customize the complete appearance and content structure of timeline items, including dot indicators, content areas, styling, and layout arrangements to match your application's design requirements.

The `template` context provides access to the following data and properties for each timeline item:

| Type | Purpose |
| --- | --- |
| `item` | Indicates the current data of the Timeline item. |
| `itemIndex` | Indicates the current index of the Timeline item. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/template/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/template" %}