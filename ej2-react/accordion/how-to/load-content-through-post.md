---
layout: post
title: How to load content through Ajax in React Accordion | Syncfusion
description: Load external content into a Syncfusion React Accordion pane from a remote URL using the Ajax module.
control: Load content through post 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to load content through Ajax in React Accordion

React Accordion supports to load external contents through `AJAX` library. Refer the below steps.

* Import the `Ajax` module from `ej2-base` and initialize with URL path.

* Get data from the Ajax Success event to initialize React Accordion with retrieved external path data.

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