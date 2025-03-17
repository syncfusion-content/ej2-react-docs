---
layout: post
title: Templates based on device in React ListView component | Syncfusion
description: Learn here all about Use dynamic templates in ListView based on device in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Use dynamic templates in ListView based on device 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Use dynamic templates in ListView based on device

The Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS2 components are designed to be both desktop and mobile-friendly. Therefore, Syncfusion<sup style="font-size:70%">&reg;</sup> components can be used effectively in both desktop and mobile modes. However, component templates may need to be dynamic to accommodate different devices. Applications may need to load various templates depending upon the device.

## Integration

The ListView component utilizes [`template`](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) support for this purpose. While the component wrapper is responsive across all devices, the template contents may need to change dynamically based on the device, with dimensions specified in the sample code. Additional CSS customization is required in the sample code to ensure responsive alignment of template content in both mobile and desktop modes.

In this example, we've implemented two separate templates: one for mobile mode and another for desktop mode. To detect the device mode, we've imported the `browser module` from the `ej2-base` package.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/dynamic-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/dynamic-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/dynamic-template-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/dynamic-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/dynamic-template-cs1" %}
