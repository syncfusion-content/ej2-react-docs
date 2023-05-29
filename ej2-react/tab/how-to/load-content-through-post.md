---
layout: post
title: Load content through post in React Tab component | Syncfusion
description: Learn here all about Load content through post in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Load content through post 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Load content through post in React Tab component

The Tab supports to load external contents through `AJAX` library. Refer to the following steps.

* Import the `Ajax` module from `ej2-base` and initialize with URL path.

* Get the data from Ajax `Success` event, then initialize the Tab with retrieved external path data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/tab-ajax-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/tab-ajax-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-ajax-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-ajax-cs1" %}
