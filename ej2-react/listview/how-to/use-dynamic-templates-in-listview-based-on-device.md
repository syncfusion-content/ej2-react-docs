---
layout: post
title: Templates based on device in React Listview component | Syncfusion
description: Learn here all about Use dynamic templates in listview based on device in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Use dynamic templates in listview based on device 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Use dynamic templates in listview based on device

The Syncfusion Essential JS2 components are desktop and mobile-friendly. So, you can use Syncfusion components in both modes. The component templates are not always fixed. Applications may need to load various templates depending upon the device.

## Integration

In the ListView component, [`template`](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) support is being used. In some cases, the component wrapper is always responsive across all devices, but the template contents are dynamically changed with unspecified (sample side) dimensions. CSS customization is also needed in sample-side to align template content responsively in both mobile and desktop modes. Here, two templates have been loaded for mobile and desktop modes. To check the device mode, a `browser module` has been imported from the `ej2-base` package.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/dynamic-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/dynamic-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/dynamic-template-cs1" %}
