---
layout: post
title: React functional component in React Numerictextbox component | Syncfusion
description: Learn here all about React functional component in Syncfusion React Numerictextbox component of Syncfusion Essential JS 2 and more.
control: React functional component 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React functional component in React NumericTextBox component

Implement the NumericTextBox component using React functional components and hooks for a modern, state-management approach. The following table describes the essential React hooks used to manage NumericTextBox behavior and state:

| Hook | Purpose |
| ------------- | ------------- |
| `useState` | Manages local state in functional components. Returns a state variable and a setter function. Used here to track the total amount field value. |
| `useEffect` | Executes side effects after component rendering. Used here to initialize validation rules and form validation for price, quantity, and amount fields. |
| `useRef` | Creates direct DOM element references without triggering re-renders. Used here to focus or preset the price field on component load. |
| `useReducer` | Manages complex state logic by dispatching actions to a reducer function. Used here to centralize updates for price and quantity values. |

The following example demonstrates how to implement a NumericTextBox component using React hooks in a functional component:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/react-hooks-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/react-hooks-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/react-hooks-cs1" %}