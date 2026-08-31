---
layout: post
title: How to add a Toggle Button in Toolbar in React | Syncfusion
description: Insert a Toggle Button into the Syncfusion React Toolbar by setting the command type to Toggle and binding its isSelected state.
control: Add toggle button 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add a Toggle Button as a Toolbar item in React

The Toolbar supports adding a toggle Button by using the [`template`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#template) property. Refer to the steps below.

1. Using the Toolbar `template` property, pass the required HTML string to render the toggle button.

```ts
  <ItemDirective template='<button class="e-btn" id="media_btn"></button>' />
```

2. Now render the toggle Button into the targeted element in Toolbar [`created`](https://ej2.syncfusion.com/react/documentation/api/toolbar/index-default#created) event handler and bind click event for it. On clicking the toggle Button, change the required icon and content based on current active state.

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