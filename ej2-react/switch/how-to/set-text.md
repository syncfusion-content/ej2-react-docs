---
layout: post
title: Set text in React Switch component | Syncfusion
description: Learn here all about Set text in Syncfusion React Switch component of Syncfusion Essential JS 2 and more.
control: Set text 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set text in React Switch component

Display custom text labels on Switch states by setting the [`onLabel`](https://ej2.syncfusion.com/react/documentation/api/switch/#onlabel) and [`offLabel`](https://ej2.syncfusion.com/react/documentation/api/switch/#offlabel) properties. These labels clarify the Switch function or state, improving accessibility and usability in interfaces where the toggle purpose is not immediately obvious.

In the following example, `onLabel` displays "ON" and `offLabel` displays "OFF".

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/text-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/text-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/text-cs1" %}

> Switch does not have text support for material themes, and does not support long custom text.
