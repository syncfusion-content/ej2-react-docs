---
layout: post
title: React TreeGrid Enable or Disable Actions | Syncfusion
description: Learn how to enable or disable the React TreeGrid and its actions using custom CSS to control user interaction.
control: Enable disable treegrid and its actions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enable or Disable TreeGrid Actions in React TreeGrid

Enable or disable the TreeGrid and its actions by applying or removing corresponding CSS styles.

To enable or disable the TreeGrid and its actions, follow these steps:

**Step 1**:

Create a CSS class with custom styles to override the default style of the TreeGrid.

```css
    .disabletreegrid {
        pointer-events: none;
        opacity: 0.4;
    }
    .wrapper {
        cursor: not-allowed;
    }
```

**Step 2**:

Add or remove the CSS class from the TreeGrid in the Button click event handler.

```ts

const btnClick = (): void => {
    if (treegrid && treegrid.element.classList.contains('disabletreegrid')) {
      treegrid.element.classList.remove('disabletreegrid');
      (document.getElementById("TreeGridParent") as HTMLElement).classList.remove('wrapper');
    }
    else if (treegrid) {
      treegrid.element.classList.add('disabletreegrid');
      (document.getElementById("TreeGridParent") as HTMLElement).classList.add('wrapper');
    }
  }

```

In the following demo, clicking the button enables or disables the TreeGrid and its actions.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/enable-disable-actions-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/enable-disable-actions-cs1" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.
