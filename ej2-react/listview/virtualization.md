---
layout: post
title: Virtualization in React ListView component | Syncfusion
description: Learn here all about Virtualization in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in React ListView component

UI virtualization loads only the viewable list items in a viewport, which significantly improves ListView performance when loading a large number of data items.

## Module injection

To use UI Virtualization, we need to inject its `virtualization` service in the App. This modules should be injected into the ListView using the `Inject` directive as like the below code snippet.

```ts

import { ListViewComponent, Inject, Virtualization } from '@syncfusion/ej2-react-lists';

....
....

return (
    // specifies the tag to render the ListView component
    <ListViewComponent id='ui-list' dataSource={listData} enableVirtualization={true} >
        <Inject services={[Virtualization]} />
    </ListViewComponent>
);

```

```ts
return (
// specifies the tag to render the ListView component
<ListViewComponent id='ui-list' dataSource={listData} enableVirtualization={true}>
              <Inject services={[Virtualization]}/>
          </ListViewComponent>);
export {};
```

## Getting started

UI virtualization can be enabled in ListView by setting the [`enableVirtualization`](https://ej2.syncfusion.com/react/documentation/api/list-view/#enablevirtualization) property to true. There are two types of scrollers available:

**Window scroll** - This scroller is used in ListView by default.

**Container scroll** - This will be used, if the height property of ListView was set.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/virtualization/flat-list-cs1" %}

We can use [`template`](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) property to customize list items in UI virtualization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/virtualization/template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/virtualization/template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/virtualization/template-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/virtualization/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/virtualization/template-cs1" %}

## Conditional rendering

We have also provided following conditional rendering support for [`template`](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) and [`groupTemplate`](https://ej2.syncfusion.com/react/documentation/api/list-view/#grouptemplate).

| Name | Syntax |
|------|--------|
| Conditional class | `<div class="${ $id % 2 === 0 ? 'even-list' : 'odd-list'}"></div>` |
| Conditional attribute | `<div id="${ $id % 2 === 0 ? 'even-list' : 'odd-list'}"></div>` |
| Conditional text content | `<div>${ $id % 2 === 0 ? 'even-list' : 'odd-list'}</div>` |

In the below sample, we have applied light blue for even list and light coral for odd list based on the conditional class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/virtualization/conditional-ui-cs1" %}
