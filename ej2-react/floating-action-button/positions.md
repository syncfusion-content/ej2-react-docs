---
layout: post
title: Positions in React Floating action button component | Syncfusion
description: Learn here all about Positions in Syncfusion React Floating action button component of Syncfusion Essential JS 2 and more.
control: Positions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Positions in React Floating action button component

The floating action button can be positioned anywhere on the [`target`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#target) using the [`position`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#position) property. If the `target` is not defined, then FAB is positioned based on the browser viewport.

The position values of Floating Action Button are as follows:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {
    return (
            {/* To render Floating Action Button in BottomLeft Position. */}
            <FabComponent id='fab' content='Add' position='BottomLeft'></FabComponent>
    );
}
export default App;
```

Below example demonstrates different supported positions of FAB.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/position-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/position-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/position-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/position-cs1" %}

## Custom position

You can define the custom position of the Floating Action Button by override the `top`, `left`, `right`, and `bottom` CSS properties using [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#cssclass). For detailed information, refer `index.css` file below.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/position-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/position-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/position-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/position-cs2" %}
