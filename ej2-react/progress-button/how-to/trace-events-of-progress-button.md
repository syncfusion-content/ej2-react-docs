---
layout: post
title: How to trace events in React Progress Button | Syncfusion
description: Hook into React Progress Button lifecycle events begin, progress, end, and fail. Update indicators, validate, or revert UI as progress advances.
control: Trace events of progress button 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to trace events in React Progress Button

Monitor ProgressButton lifecycle events to execute custom logic at different stages of operation. The ProgressButton emits events at key interaction points, allowing you to hook into the progress workflow and perform conditional actions, status updates, or error handling.

The following events are available in the ProgressButton component:

* [`begin`](https://ej2.syncfusion.com/react/documentation/api/progress-button/index-default#begin) - Triggers when progress starts; use to initialize progress parameters or update UI.
* [`progress`](https://ej2.syncfusion.com/react/documentation/api/progress-button/index-default#progress) - Triggers periodically as progress advances; use to update progress indicators or perform intermediate validations.
* [`end`](https://ej2.syncfusion.com/react/documentation/api/progress-button/index-default#end) - Triggers when progress completes; use to show completion states or enable follow-up actions.
* [`fail`](https://ej2.syncfusion.com/react/documentation/api/progress-button/index-default#fail) - Triggers when an operation fails; use to show error messages or revert UI changes.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs7/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs7/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs7" %}
