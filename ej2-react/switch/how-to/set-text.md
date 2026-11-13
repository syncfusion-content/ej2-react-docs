---
layout: post
title: How to set text in React Toggle Switch Button | Syncfusion
description: Set the React Toggle Switch Button on and off state labels via the onLabel and offLabel properties to clarify the toggle purpose and improve accessibility.
control: Set text 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set text in React Toggle Switch Button

Display custom text labels on React Toggle Switch Button states by setting the [`onLabel`](https://ej2.syncfusion.com/react/documentation/api/switch/#onlabel) and [`offLabel`](https://ej2.syncfusion.com/react/documentation/api/switch/#offlabel) properties. These labels clarify the React Toggle Switch Button function or state, improving accessibility and usability in interfaces where the toggle purpose is not immediately obvious.

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

> React Toggle Switch Button does not have text support for material themes, and does not support long custom text.
