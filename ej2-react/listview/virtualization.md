---
layout: post
title: Virtualization in React Listview component | Syncfusion
description: Learn here all about Virtualization in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in React Listview component

UI virtualization loads only viewable list items in a view port which will increase ListView performance on loading large number of data.

## Module injection

In order to use UI Virtualization, we need to inject its `virtualization` service in the App. This modules should be injected into the ListView using the `Inject` directive as like the below code snippet.



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

UI virtualization can be enabled in ListView by setting [`enableVirtualization`](https://ej2.syncfusion.com/react/documentation/api/list-view/#enablevirtualization) property to true. It has two type of scroller

**Window scroll** - This scroller is used in ListView by default.

**Container scroll** - This will be used, if the height property of ListView was set.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/virtualization/flat-list-cs1" %}

We can use `template` property to customize list items in UI virtualization.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/virtualization/template-cs1" %}

## Conditional rendering

We have also provided following conditional rendering support for template and groupTemplate.

| Name | Syntax |
| --- | --- | --- |
| conditional class | `<div class="${ $id % 2 === 0 ? 'even-list' : 'odd-list'}"></div>`  |
| conditional attribute | `<div id="${ $id % 2 === 0 ? 'even-list' : 'odd-list'}"></div>`  |
| conditional text content | `<div>${ $id % 2 === 0 ? 'even-list' : 'odd-list'}</div>`  |

In the below sample, we have applied light blue for even list and light coral for odd list based on the conditional class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/virtualization/conditional-ui-cs1" %}
