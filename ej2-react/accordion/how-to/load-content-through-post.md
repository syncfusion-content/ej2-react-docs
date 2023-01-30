---
layout: post
title: Load content through post in React Accordion component | Syncfusion
description: Learn here all about Load content through post in Syncfusion React Accordion component of Syncfusion Essential JS 2 and more.
control: Load content through post 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Load content through post in React Accordion component

Accordion supports to load external contents through `AJAX` library. Refer the below steps.

* Import the `Ajax` module from `ej2-base` and initialize with URL path.

* Get data from the Ajax Success event to initialize Accordion with retrieved external path data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/accordion-ajax-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/accordion-ajax-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-ajax-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-ajax-cs1" %}