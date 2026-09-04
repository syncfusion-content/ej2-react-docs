---
layout: post
title: Navigation in React Breadcrumb | Syncfusion
description: Configure relative or absolute URLs on Syncfusion React Breadcrumb items, and enable click navigation on the active last item.
control: Breadcrumb 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Navigation in React Breadcrumb

The React Breadcrumb component enables navigation to specific paths when users click React Breadcrumb items. To enable navigation functionality, bind the [`url`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/breadcrumbItem#url) property to the React Breadcrumb items.

## URL

In the React Breadcrumb component, each item represents a URL destination. React Breadcrumb items can be configured with either relative or absolute URLs to define navigation paths.

### Relative URL

React Breadcrumb items with relative URLs contain only the path segment without specifying the complete location or server details. The following example demonstrates React Breadcrumb items configured with relative URLs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs7" %}

### Absolute URL

React Breadcrumb items with absolute URLs contain the complete path and navigate directly to the specified resource when the absolute URL is bound to the React Breadcrumb item. The following example demonstrates React Breadcrumb items configured with absolute URLs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs8" %}

## Enable navigation for last React Breadcrumb item

By default, the last React Breadcrumb item (active item) is not clickable. To enable navigation for the last item, set the [`enableActiveItemNavigation`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb#enableactiveitemnavigation) property to `true`. The following example demonstrates enabling navigation for the last React Breadcrumb item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs9" %}

## Open URL in new page or tab

To open the React Breadcrumb item in a new page or tab, set the target property of the required item url to blank in the React Breadcrumb component. In the following example, the target property of items url was set to blank by using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb#beforeitemrender) event which locates to the path in the new tab.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/getting-started-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/getting-started-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs10" %}