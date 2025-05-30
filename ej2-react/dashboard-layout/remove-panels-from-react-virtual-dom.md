---
layout: post
title: Dynamically Remove Panels in React Dashboard Layout Component | Syncfusion
description: Learn how to dynamically remove panels in the Syncfusion React Dashboard Layout by using React state.
control: Removing panels from DOM.
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dynamically remove a panel from the Dashboard Layout component using React state.

To remove a panel from the Dashboard Layout, store your panel details in a state variable using the **useState** hook. When you update the state (for example, by removing a panel from the array), React updates the virtual DOM, and the panel is removed from the DOM automatically.

The following sample demonstrates how to remove panels from the virtual DOM using React state in the Dashboard Layout component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/remove-panels/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/remove-panels/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/remove-panels/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/remove-panels/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/remove-panels/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/remove-panels/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/remove-panels" %}

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to learn how to present and manipulate data.