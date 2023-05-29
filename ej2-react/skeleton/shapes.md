---
layout: post
title: Shapes in React Skeleton component | Syncfusion
description: Learn here all about Shapes in Syncfusion React Skeleton component of Syncfusion Essential JS 2 and more.
control: Shapes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Shapes in React Skeleton component

The Skeleton control support various built-in shape variants to design layout of the page. You can use the [`shape`](https://ej2.syncfusion.com/react/documentation/api/skeleton#shape) property to create a preview of any layout.

The Skeleton component supports the following content shapes:

## Circle skeleton shape

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {
    return (
      <SkeletonComponent shape= 'Circle' width= "48px"></SkeletonComponent>
      );
}
export default App;
```

## Square skeleton shape

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {

  return (
    <SkeletonComponent shape= 'Square' width= "48px"></SkeletonComponent>);
}
export default App;
```

## Rectangle skeleton shape

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {

  return (
    <SkeletonComponent shape= 'Rectangle' width= "50px" height='32px'></SkeletonComponent>);
}
export default App;
```

## Text skeleton shape

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {

  return (
    <SkeletonComponent shape= 'Text' width= "15px"></SkeletonComponent>);
}
export default App;
```

Below example demonstrates the above functionalities of a Skeleton component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/skeleton/shapes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/skeleton/shapes-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/skeleton/shapes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/skeleton/shapes-cs1" %}