---
layout: post
title: State persistence in React Schedule component | Syncfusion
description: Learn here all about State persistence in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in React Schedule component

State persistence allowed Scheduler to retain the [`currentView`](https://ej2.syncfusion.com/react/documentation/api/schedule/#currentview), [`selectedDate`](https://ej2.syncfusion.com/react/documentation/api/schedule/#selecteddate) and Scroll position values in the [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) for state maintenance even if the browser is refreshed or if you move to the next page within the browser. This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/schedule/#enablepersistence) property which is set to false by default. When it is set to true, [`currentView`](https://ej2.syncfusion.com/react/documentation/api/schedule/#currentview), [`selectedDate`](https://ej2.syncfusion.com/react/documentation/api/schedule/#selecteddate) and Scroll position values of the scheduler component will be retained even after refreshing the page.

> **Note**: Scheduler `id` is Essential<sup style="font-size:70%">&reg;</sup> to set state persistence.

The following sample demonstrates how to set state persistence of the Scheduler component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs26/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs26/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs26" %}

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/material/schedule/overview) to knows how to present and manipulate data.
