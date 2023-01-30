---
layout: post
title: React functional component in React Maskedtextbox component | Syncfusion
description: Learn here all about React functional component in Syncfusion React Maskedtextbox component of Syncfusion Essential JS 2 and more.
control: React functional component 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React functional component in React Maskedtextbox component

This section explains how to render the masked textbox component in the functional component with react hooks methods. Please find the list of basic hook methods in the following table.

| Hooks | Description |
| ------------- | ------------- |
| `useState` | useState is a Hook that allows you to define the state in the functional components. If you pass the initial state to this function, then it will return a state variable with value and function to update this state value. Here, useState is used to store the value of product key field. |
| `useEffect` | useEffect is a Hook that allows you to execute code after rendering and re-rendering the component. Here, focusing the product key field on initial loading. |
| `useRef` | useRef is a Hook function that allows to directly create a reference to the DOM element in the functional component. Here, assigned the product key field reference for focusing the field on initial loading. |
| `useReducer` | useReducer is a Hook function that accepts a reducer function and an initial state as argument. It returns a state value and another function to dispatch an action. Here, dispatched the update action to update the mobile number and postal code state values. |

The following example shows how to render a simple masked textbox with react hooks.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/masked-textbox/react-hooks-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/masked-textbox/react-hooks-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/masked-textbox/react-hooks-cs1" %}