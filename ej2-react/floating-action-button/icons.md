---
layout: post
title: Icons in React Floating Action Button | Syncfusion
description: Set icons and text on the React Floating Action Button using iconCss and content. Show icon-only buttons with title attributes for tooltips.
control: Icons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons in React Floating Action Button

You can customize the icon and text of React Floating Action Button(FAB) using [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#iconcss) and [`content`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#content) properties.

## React Floating Action Button with icon

Display an icon-only React Floating Action Button by setting the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#iconcss) property. Add the `title` attribute to show a tooltip on hover, providing users with additional context about the button's purpose.

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

## React Floating Action Button with icon and text

You can show icon along with text in React Floating Action Button by setting [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#iconcss) and [`content`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#content) properties.

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

Control the placement of the icon relative to text by setting the [`iconPosition`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#iconposition) property. By default, the icon displays on the left side of the text. Use the `Right` position to place the icon on the right side for alternative visual layouts.

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
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/icons-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/icons-cs1" %}
