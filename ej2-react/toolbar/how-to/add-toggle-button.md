---
layout: post
title: Add toggle button in React Toolbar component | Syncfusion
description: Learn here all about Add toggle button in Syncfusion React Toolbar component of Syncfusion Essential JS 2 and more.
control: Add toggle button 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add toggle button in React Toolbar component

Toolbar supports to add a toggle Button by using the [`template`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#template) property. Refer below steps

* By using Toolbar template property, pass required HTML String to render toggle button.

```ts
  <ItemDirective template='<button class="e-btn" id="media_btn"></button>' />
```

* Now render the toggle Button into the targeted element in Toolbar [`created`](https://ej2.syncfusion.com/react/documentation/api/toolbar#created) event handler and bind click event for it. On clicking the toggle Button, change the required icon and content based on current active state.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toggle-button-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toggle-button-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toggle-button-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toggle-button-cs1" %}