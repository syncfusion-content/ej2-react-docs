---
layout: post
title: How to toggle in React Toggle Switch Button | Syncfusion
description: Programmatically Toggle Switch Button the React Switch state with the toggle method. Useful for keyboard shortcuts, remote commands, and external sync.
control: Change switch state using toggle method 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to toggle in React Toggle Switch Button

Programmatically React Toggle Switch Button between on and off states using the [`toggle`](https://ej2.syncfusion.com/react/documentation/api/switch/#toggle) method. This approach enables external controls to change Switch state without direct user interaction, supporting workflows like keyboard shortcuts, remote commands, or state synchronization with external data.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/getting-started-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/getting-started-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/getting-started-cs2" %}

> React Toggle Switch Button triggers [`change`](https://ej2.syncfusion.com/react/documentation/api/switch/#change) event on every state stage to perform custom operations.