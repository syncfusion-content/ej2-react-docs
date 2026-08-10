---
layout: post
title: Template in React Timeline | Syncfusion
description: Customize the Syncfusion React Timeline item rendering with the template property for full control over dots, content, and layout.
control: Timeline
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Timeline

The Timeline component provides comprehensive template customization through the [template](https://ej2.syncfusion.com/react/documentation/api/timeline#template) property. Templates allow complete control over the rendered structure and appearance of timeline items, including dot indicators, content areas, styling, and layout, enabling designs that match application-specific UI requirements.

The `template` context exposes the following values for each timeline item:

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