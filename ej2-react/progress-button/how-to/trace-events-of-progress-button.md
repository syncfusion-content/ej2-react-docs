---
layout: post
title: Trace events of progress button in React Progress button component | Syncfusion
description: Learn here all about Trace events of progress button in Syncfusion React Progress button component of Syncfusion Essential JS 2 and more.
control: Trace events of progress button 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Trace events of progress button in React Progress button component

Monitor ProgressButton lifecycle events to execute custom logic at different stages of operation. The ProgressButton emits events at key interaction points, allowing you to hook into the progress workflow and perform conditional actions, status updates, or error handling.

The following events are available in the ProgressButton component:

* [`begin`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#begin) - Triggers when progress starts; use to initialize progress parameters or update UI.
* [`progress`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#progress) - Triggers periodically as progress advances; use to update progress indicators or perform intermediate validations.
* [`end`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#end) - Triggers when progress completes; use to show completion states or enable follow-up actions.
* [`fail`](https://ej2.syncfusion.com/react/documentation/api/progress-button/#fail) - Triggers when an operation fails; use to show error messages or revert UI changes.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/progress-button/getting-started-cs7/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/progress-button/getting-started-cs7/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs7" %}
