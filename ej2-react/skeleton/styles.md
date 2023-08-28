---
layout: post
title: Styles in React Skeleton component | Syncfusion
description: Learn here all about Styles in Syncfusion React Skeleton component of Syncfusion Essential JS 2 and more.
control: Styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styles in React Skeleton component

You can customize skeleton control in the below ways.

## cssClass

You can customize the style of a Skeleton control by using [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/skeleton/#cssclass). The appearance of React Skeleton can be customized by changing the wave color, background color, width, and height. For detailed information, refer `index.css` file below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/skeleton/styles-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/skeleton/styles-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/skeleton/styles-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/skeleton/styles-cs1" %}

## Visible

You can use the [`visible`](https://ej2.syncfusion.com/react/documentation/api/skeleton/#visible) property which defines the visible state of Skeleton.

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {

  return (
    <SkeletonComponent shape= 'Circle' width= "60px" visible={false}></SkeletonComponent>);
}
export default App;
```