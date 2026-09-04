---
layout: post
title: Content Render Modes in React Tab | Syncfusion
description: Render Syncfusion React Tab content on demand with Init, Demand, or Hibernation modes to optimize load time and memory use.
control: Content render modes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Content Render Modes in React Tab

Tabs support rendering content based on different scenarios. The content of the React tabs can be rendered in three different ways, as outlined below.

* [On Demand rendering or lazy loading](#on-demand-rendering-or-lazy-loading)
* [Dynamic rendering](#dynamic-rendering)
* [On initial rendering](#on-initial-rendering)

## On Demand rendering or lazy loading

This mode is the default, where only the content of the currently selected React tab is initially loaded and available in the DOM, with subsequent React tab content rendered upon selection. Once a React tab's content is loaded, it remains in the DOM. This ensures that the state of the React tabs, such as scroller positions, form values, etc., is preserved.

In the following code example, the Calendar and Scheduler are rendered in the first and second React tabs, respectively. Initially, the Scheduler is not available, but it will be rendered once the second React tab is selected. Both the Calendar and Scheduler are then maintained in the DOM.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/load-on-demand-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/load-on-demand-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/load-on-demand-cs1" %}

## Dynamic rendering

This mode can be applied to React Tabs by setting the [`loadOn`](https://ej2.syncfusion.com/react/documentation/api/tab#loadon) property to `Dynamic` using `loadOn`. In this mode, only the content of the currently selected React tab is loaded and available in the DOM initially. When a different React tab is selected, its content replaces the current content. Since this mode ensures the DOM maintains only the content of the active React tab, page loading performance is improved. However, the React Tabs do not retain their state, as each time a React tab is selected, it loads its content again.

In the following code example, there are two React tabs. The first tab contains a login page, and the second React tab contains a Grid component. The Grid component in the second React tab will only be rendered in the DOM after the login is completed. Upon successful login, the second React tab will replace the first React tab in the DOM.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/load-on-dynamic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/load-on-dynamic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/load-on-dynamic-cs1" %}



## On initial rendering

This mode can be applied to React Tabs by setting the [`loadOn`](https://ej2.syncfusion.com/react/documentation/api/tab#loadon) property to `Init` using `loadOn`. In this mode, the content of all the React tabs is rendered on initial load and maintained in the DOM. This mode is ideal when you have a small number of React tabs and need to preserve the state of each React tab. It also allows you to access the references of components rendered in other React tabs.

In the following example, all three React tabs are rendered on the initial load, and the data entered in the first React tab will be maintained, even when the second or third React tab is active. In Init mode, every child component is rendered into the DOM, so you can access component references for any React tab using the `ref` attribute.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/load-on-init-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/load-on-init-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/load-on-init-cs1/app" %}