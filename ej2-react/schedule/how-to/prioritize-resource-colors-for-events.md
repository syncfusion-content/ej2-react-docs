---
layout: post
title: Prioritize resource colors for events in React Schedule component | Syncfusion
description: Learn here all about Prioritize resource colors for events in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Prioritize resource colors for events 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prioritize resource colors for events in React Schedule component

By default top level resource color will be applied for the events. If user wants to apply specific resource color to events irrespective of its parent resource color, it can be achieved by `resourceColorField` field within `eventSettings` property as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/resource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/resource-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/resource-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/resource-cs1" %}

> The `resourceColorField` field value should be as same as the `name` field value given with in `resources` property.