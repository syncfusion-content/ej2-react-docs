---
layout: post
title: Set different event duration in React Schedule | Syncfusion
description: Learn here all about Set different event time duration in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set different event time duration in React Schedule component

In event window, start/end time duration will be processed based on the [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScaleModel#interval) value within the [`timeScale`](https://ej2.syncfusion.com/react/documentation/api/schedule#timescale) property. By default, [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScaleModel#interval) value is 30, therefore in event window start/end time duration will be in 30 minutes duration. You can set custom interval range to the start/end time in event window using `popupOpen` event as shown below.

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