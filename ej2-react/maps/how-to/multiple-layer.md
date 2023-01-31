---
layout: post
title: Multiple layer in React Maps component | Syncfusion
description: Learn here all about Multiple layer in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Multiple layer 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Multiple layer in React Maps component

## Adding multiple layers in the Map

The multilayer support allows loading multiple shape files in a single container and enables Maps to display more information. The shape layer is the main layer of the Maps. Multiple layers can be added in a shape layer as **SubLayer** using the [`type`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#type) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs44/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs44/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs44" %}