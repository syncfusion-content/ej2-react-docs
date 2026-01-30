---
layout: post
title: Set different work hours in React Schedule component | Syncfusion
description: Learn here all about Set different work hours in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set different work hours in React Schedule component

By default, the work hours of the Scheduler are highlighted based on the start and end values provided in the [`workHours`](https://ej2.syncfusion.com/react/documentation/api/schedule#workhours) property, which remains the same for all days. To highlight different work hours range for specific days, use the[`setWorkHours`](https://ej2.syncfusion.com/react/documentation/api/schedule#setworkhours) method.

You can pass date object/ multiple date objects collection as first argument and start and end time need to be added as work hours should be passed as second and third arguments respectively. In the following code example, on button click 11:00 AM to 08:00 PM of 15th and 17th February has been added in work hours.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-open-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-open-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-open-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-open-cs3" %}