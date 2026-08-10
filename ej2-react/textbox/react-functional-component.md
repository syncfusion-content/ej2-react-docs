---
layout: post
title: Functional Component in React TextBox | Syncfusion
description: Render the React TextBox in a functional component using React Hooks like useState, useEffect, useRef, and useReducer.
control: React functional component 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Functional Component in React TextBox

Implement the TextBox component using React functional components and hooks for a modern, state-management approach. The following table describes the essential React hooks used to manage TextBox behavior and state:

| Hook | Purpose |
| ------------- | ------------- |
| `useState` | Manages local state in functional components. Returns a state variable and a setter function. Used here to track the TextBox description value. |
| `useEffect` | Executes side effects after component rendering. Used here to initialize validation rules for name and email fields. |
| `useRef` | Creates a direct reference to DOM elements without triggering re-renders. Used here to focus the name field on component load. |
| `useReducer` | Manages complex state logic by dispatching actions to a reducer function. Used here to centralize updates for name and email field values. |

The following example demonstrates how to implement a TextBox component using React hooks in a functional component:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textbox/react-hooks-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textbox/react-hooks-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/react-hooks-cs1" %}