---
layout: post
title: How to customize the Pivot Table loading indicator | Syncfusion
description: Step-by-step example showing how to customize the loading indicator in the React Pivot Table using the spinnerTemplate property.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the Pivot Table loading indicator

The Pivot Table displays a loading indicator during data processing operations such as filtering, sorting, and aggregation calculations. The default loading spinner can be customized to match application design requirements using the [`spinnerTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview#spinnertemplate) property.

The [`spinnerTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview#spinnertemplate) property accepts an HTML string that defines the custom loading indicator appearance. This enables control over the visual presentation, including custom styling and animations.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs163/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs163/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs163" %}

## Disabling the loading indicator

The loading indicator can be completely disabled by setting the [`spinnerTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview#spinnertemplate) property to an empty string. The following is a complete `App.jsx` showing the required imports and component setup:

```js
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {
    const dataSourceSettings = { dataSource: pivotData };
    return (
        <PivotViewComponent
            id='PivotView'
            height={350}
            dataSourceSettings={dataSourceSettings}
            spinnerTemplate={''}
        />
    );
}
export default App;
```
