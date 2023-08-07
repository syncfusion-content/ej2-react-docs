---
layout: post
title: Change caret icon in React Drop down button component | Syncfusion
description: Learn here all about Change caret icon in Syncfusion React Drop down button component of Syncfusion Essential JS 2 and more.
control: Change caret icon 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change caret icon in React Drop down button component

Dropdown arrow can be customized on popup open and close. It can be handled in [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#beforeopen) and [`beforeClose`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#beforeclose) event.

In the following example, the up arrow is updated on popup close and down arrow is updated on popup open using `beforeOpen` and `beforeClose` event by adding and removing `e-caret-up` class.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/updown-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/updown-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/updown-cs1" %}