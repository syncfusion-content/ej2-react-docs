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

Position the Floating Action Button anywhere on the page using the [`position`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#position) property. When paired with the [`target`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#target) property, the FAB positions itself relative to the specified container. Without a target, the FAB positions itself relative to the browser viewport.

Use predefined positions to quickly deploy the FAB to common locations (corners and center points). The available position values are:
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

Define a custom position for the Floating Action Button by overriding the `top`, `left`, `right`, and `bottom` CSS properties using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#cssclass) property. This approach allows precise control over FAB placement for specialized layouts. Refer to the `index.css` file in the example below for implementation details.

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
