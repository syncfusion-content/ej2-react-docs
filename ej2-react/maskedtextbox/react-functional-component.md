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

This section explains how to render the MaskedTextBox component in a functional component using React Hooks. The following table lists the basic Hook methods:

| Hooks | Description |
| ------------- | ------------- |
| `useState` | A Hook that allows you to define state in functional components. Returns a state variable and a function to update it. Used here to store the product key value. |
| `useEffect` | A Hook that executes code after the component renders and re-renders. Used here to focus the product key field on initial load. |
| `useRef` | A Hook that creates a direct reference to a DOM element in a functional component. Used here to reference the product key field for focusing. |
| `useReducer` | A Hook that accepts a reducer function and initial state, returning a state value and a dispatch function. Used here to update mobile number and postal code state values. |

The following example shows how to render a simple MaskedTextBox with React Hooks.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/masked-textbox/react-hooks-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/masked-textbox/react-hooks-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/masked-textbox/react-hooks-cs1" %}