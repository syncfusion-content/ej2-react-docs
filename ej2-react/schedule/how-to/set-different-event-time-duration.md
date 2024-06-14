---
layout: post
title: Set Time duration | React Schedule Component | Syncfusion
description: Learn here all about how to set different event time duration in React Schedule component of Syncfusion Essential JS 2 and more.
control: Set different event time duration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set different event time duration in React Schedule component

In event window, start/end time duration will be processed based on the `interval` value within the `timeScale` property. By default, `interval` value is 30, therefore in event window start/end time duration will be in 30 mins duration. You can set custom interval range to the start/end time in event window using `popupOpen` event as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs18/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs18" %}