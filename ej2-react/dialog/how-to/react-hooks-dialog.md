---
layout: post
title: React hooks dialog in React Dialog component | Syncfusion
description: Open a React Dialog using the useState hook with the visible property to control dialog state from any React functional component.
control: React hooks dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React hooks dialog in React Dialog component

> React hooks require React 16.8 or later and can only be used in functional components.

The Dialog can be shown and hidden by using the React [`useState`](https://react.dev/reference/react/useState) hook with the [`visible`](https://ej2.syncfusion.com/react/documentation/api/dialog#visible) property. When the Dialog is closed (via the close icon or Esc key), the [`close`](https://ej2.syncfusion.com/react/documentation/api/dialog#close) event should update the state to keep `visible` in sync — otherwise the state and the Dialog's actual visibility can diverge.

The following example renders a React component as the content of the Dialog.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/react-hooks-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/react-hooks-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/react-hooks-cs1" %}