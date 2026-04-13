---
layout: post
title: Set Default Values for React Schedule Event Fields | Syncfusion
description: Learn here all about Set default value for event fields in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set default values for event fields in React Schedule component

Event window default fields name like Title, Location, etc.. can be customized and default value can be set to Subject field using [`default`](https://ej2.syncfusion.com/react/documentation/api/schedule/fieldOptions#default) property which will be added if an appointment is created with empty subject.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs17" %}