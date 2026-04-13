---
layout: post
title: Enable Scroll in All-Day Section of React Schedule | Syncfusion
description: Learn here all about Enable scroll option on all day section in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enable scroll option all day section in React Schedule component

When you have a large number of appointments in the all-day row, it can be difficult to view them properly. In this case, you can enable an individual scroller for the all-day row by setting the [`enableAllDayScroll`](https://ej2.syncfusion.com/react/documentation/api/schedule#enablealldayscroll) property to `true`, whereas its default value is `false`. When set to `true`, the all-day row displays a scroller when expanded beyond its maximum height.

> Note: This property is not applicable for Scheduler with height `auto`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs15" %}