---
layout: post
title: Globalization in React Splitter | Syncfusion
description: Enable right-to-left rendering in the Syncfusion React Splitter for Arabic and Hebrew languages by setting enableRtl to true.
control: Splitter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in React Splitter

The React Splitter component supports globalization features, including right-to-left (RTL) rendering needed for languages such as Arabic and Hebrew.

## Right-to-Left (RTL) support

Enable RTL layout by setting the [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/splitter#enablertl) property to `true`. This adjusts the direction of panes and split bars to match RTL writing systems.

The following code shows how to enable RTL behavior.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/rtl-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/rtl-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/rtl-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/rtl-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/rtl-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/rtl-cs2" %}

## See Also

* [Migration from Essential<sup style="font-size:70%">&reg;</sup> JS 1](./ej1-api-migration)