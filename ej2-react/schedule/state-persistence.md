---
layout: post
title: State Persistence in React Scheduler | Syncfusion
description: Learn how to enable state persistence in the Syncfusion React Scheduler to retain current view, selected date, and scroll position.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State Persistence in React Scheduler

State persistence allows the Scheduler to retain the [`currentView`](https://ej2.syncfusion.com/react/documentation/api/schedule#currentview), [`selectedDate`](https://ej2.syncfusion.com/react/documentation/api/schedule#selecteddate), and scroll position values in [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) so the state remains available after a browser refresh or navigation to another page. This behavior is enabled through the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/schedule#enablepersistence) property, which is disabled by default. When set to `true`, the Scheduler preserves the `currentView`, `selectedDate`, and scroll position values after a page refresh.

> **Note:** The Scheduler `id` is required to enable state persistence.

> **Tip:** Use persistence when you want users to return to the same view and date after reloading the page.

The following sample demonstrates how to enable state persistence in the Scheduler component.

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

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) - Component homepage
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule) - Complete API documentation
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) - Interactive Scheduler demos
