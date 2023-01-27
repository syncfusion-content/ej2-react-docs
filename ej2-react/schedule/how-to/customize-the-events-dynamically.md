---
layout: post
title: Customize the events dynamically in React Schedule component | Syncfusion
description: Learn here all about Customize the events dynamically in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Customize the events dynamically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the events dynamically in React Schedule component

The `eventRendered` event will be triggered before rendering the appointments on Schedule where it can be customized. In the below demo, custom field `CategoryColor` is added to the appointment collection and based on certain condition, appointment background color is changed with `CategoryColor` field value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs14" %}