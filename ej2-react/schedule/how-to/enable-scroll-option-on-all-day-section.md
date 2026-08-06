---
layout: post
title: Enable Scroll on All-Day Section in React Scheduler | Syncfusion
description: Learn how to enable the scroll option on the all-day section in the Syncfusion React Scheduler when many appointments overflow the row.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enable Scroll Option on All-Day Section in React Scheduler

When you have many appointments in the all-day row, they can be difficult to view properly. You can enable an individual scroller for the all-day row by setting the [`enableAllDayScroll`](https://ej2.syncfusion.com/react/documentation/api/schedule#enablealldayscroll) property to `true`.

When set to `true`, the all-day row displays a scroller when it expands beyond its maximum height. The default value is `false`.

> **Note:** This property is not applicable when the Scheduler height is set to `auto`.

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