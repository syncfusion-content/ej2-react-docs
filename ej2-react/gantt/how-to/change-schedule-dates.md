---
layout: post
title: Change Schedule Dates in React Gantt Chart Component | Syncfusion
description: Learn here all about Change schedule dates in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Change schedule dates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change Schedule Dates in React Gantt Chart Component

In the Gantt Chart component, you can change the schedule start and end dates by clicking the custom button programmatically using the [updateProjectDates](https://ej2.syncfusion.com/react/documentation/api/gantt#updateprojectdates) method. You can pass the start and end dates as method arguments to the [updateProjectDates](https://ej2.syncfusion.com/react/documentation/api/gantt#updateprojectdates) method. You can also pass the Boolean value as an additional parameter, which is used to round-off the schedule start and end dates displayed in Gantt timeline.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/how-to-changescheduledates-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/how-to-changescheduledates-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-changescheduledates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-changescheduledates-cs1" %}
