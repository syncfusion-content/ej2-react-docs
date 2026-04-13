---
layout: post
title: Prevent date navigation in React Schedule component | Syncfusion
description: Learn here all about Prevent date navigation in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent date navigation in React Schedule component

We can prevent navigation while clicking on the date header by simply removing `e-navigate` class from header cells which can be achieved in the [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event as shown in the below demo.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs16" %}