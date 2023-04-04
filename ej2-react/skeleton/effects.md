---
layout: post
title: Effects in React Skeleton component | Syncfusion
description: Learn here all about Shimmer effect in Syncfusion React Skeleton component of Syncfusion Essential JS 2 and more.
control: Effects
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Shimmer effect in React Skeleton component

You can use the [`shimmerEffect`](https://ej2.syncfusion.com/react/documentation/api/skeleton#shimmereffect) property to change animation effect in the skeleton control. Skeleton supports `Wave`, `Pulse` and `Fade` effects and by default, the `shimmerEffect` is set to `Wave` effect.

```ts
import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";

function App() {

  return (
    <SkeletonComponent shape= 'Circle' width= "60px" shimmerEffect= 'Pulse'></SkeletonComponent>);
}
export default App;
```

Below example demonstrates a list with pulse effect skeleton.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/skeleton/effect-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/skeleton/effect-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/skeleton/effect-cs1" %}