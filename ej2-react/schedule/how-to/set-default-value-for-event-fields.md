---
layout: post
title: Set Default Value for Event Fields in React Scheduler | Syncfusion
description: Learn how to set default values for event fields in the Syncfusion React Scheduler editor window to pre-fill data on new appointments.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set Default Value for Event Fields in React Scheduler

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