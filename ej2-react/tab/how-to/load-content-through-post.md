---
layout: post
title: How to load content through Ajax in React Tab | Syncfusion
description: Load Syncfusion React Tab content from a remote URL by importing the Ajax module from ej2-base and using the Success event.
control: Load content through post 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to load content through Ajax in React Tab

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
