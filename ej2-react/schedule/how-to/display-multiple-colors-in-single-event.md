---
layout: post
title: Multi-Color Events of React Schedule | Syncfusion
description: Learn here all about rendering an event with multiple colors in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Display multiple colors in the event
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display multiple colors in single event in React Schedule component

In Scheduler we can display the multiple colors within a single event. This can be achieved by using the [`eventTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule/views/#eventtemplate) option available within the views model. Here, we've used `SubCount` as an additional field. The SubCount field contains the background color and height values. Based on these values, events will be divided into different colors.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/multiple-color-event/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/multiple-color-event/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/multiple-color-event/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/multiple-color-event" %}