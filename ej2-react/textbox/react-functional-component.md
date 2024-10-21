---
layout: post
title: React functional component in React TextBox component | Syncfusion
description: Learn here all about React functional component in Syncfusion React TextBox component of Syncfusion Essential JS 2 and more.
control: React functional component 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React functional component in React TextBox component

This section explains how to render the TextBox component in the functional component with react hooks methods. Please find the list of basic hook methods in the following table.

| Hooks | Description |
| ------------- | ------------- |
| `useState` | useState is a Hook that allows you to define the state in the functional components. If you pass the initial state to this function, then it will return a state variable with value and function to update this state value. Here, useState is used to store the value of description field. |
| `useEffect` | useEffect is a Hook that allows you to execute code after rendering and re-rendering the component. Here, defined the set of rules for the name and email fields and initiated the form validation to those fields. |
| `useRef` | useRef is a Hook function that allows to directly create a reference to the DOM element in the functional component. Here, assigned the name field reference for focusing the field on initial loading. |
| `useReducer` | useReducer is a Hook function that accepts a reducer function and an initial state as argument. It returns a state value and another function to dispatch an action. Here, dispatched the update action to update the name and email state values. |

The following example shows how to render a simple TextBox component with react hooks.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textbox/react-hooks-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textbox/react-hooks-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/react-hooks-cs1" %}