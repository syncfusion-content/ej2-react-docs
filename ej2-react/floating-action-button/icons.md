---
layout: post
title: Icons in React Floating action button component | Syncfusion
description: Learn here all about Icons in Syncfusion React Floating action button component of Syncfusion Essential JS 2 and more.
control: Icons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons in React Floating action button component

You can customize the icon and text of React Floating Action Button(FAB) using [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#iconcss) and [`content`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#content) properties.

## FAB with icon

You can show icon only in Floating Action Button by setting [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#iconcss) property. You can show tooltip on hover to show additional details to end-user by setting `title` attribute.

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {
    return (
        {/* To render Floating Action Button with icon only */}
        <FabComponent id='fab' iconCss='fab-icons fab-icon-people'></FabComponent>
    );
}
export default App;
```

## FAB with icon and text

You can show icon along with text in Floating Action Button by setting [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#iconcss) and [`content`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#content) properties.

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {
    return (
        {/* To render Floating Action Button with icon and text */ }
        < FabComponent id = 'fab' iconCss = 'fab-icons fab-icon-people' content = 'Contacts' ></FabComponent >
    );
}
export default App;
```

### Icon position

You can change the position of icon when showing along with content by setting [`iconPosition`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#iconposition) property. By default, the icon is positioned on the left side together with text.

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {
    return (
        {/* To render Floating Action Button with icon position. */}
        <FabComponent id='fab' iconCss='fab-icons fab-icon-people' content='Contacts' iconPosition='Right'></FabComponent>
    );
}
export default App;
```

Below example demonstrates a FAB with icon and text.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/icons-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/icons-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/icons-cs1" %}
