---
layout: post
title: Moving panels in React Dashboard layout component | Syncfusion
description: Learn here all about Moving panels in Syncfusion React Dashboard layout component of Syncfusion Essential JS 2 and more.
control: Moving panels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Moving panels in React Dashboard layout component

Other than drag and drop, it is possible to move the panels in Dashboard Layout programmatically. This can be achieved using [movePanel](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#movepanel) method. The method is invoked as follows,

```js
movePanel(id, row, col)

```

Where,
* id - ID of the panel which needs to be moved.
* row - New row position for moving the panel.
* col - New column position for moving the panel.

Each time a panel's position is changed(Programmatically or through UI interaction), the Dashboard Layout's [change](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#change) event will be triggered.

The following sample demonstrates moving a panel programmatically to a new position in the Dashboard Layout's [created](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/#created) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/moving-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/moving-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/moving-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/moving-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/moving-cs1" %}

> You can refer to our [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/material/dashboard-layout/default) to knows how to present and manipulate data.