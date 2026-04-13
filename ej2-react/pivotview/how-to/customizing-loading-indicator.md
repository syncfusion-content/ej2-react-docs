---
layout: post
title: Customizing loading indicator in React | Syncfusion
description: Learn here all about Customizing loading indicator in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Customizing loading indicator 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customizing the loading indicator in the React Pivot Table component

The Pivot Table displays a loading indicator during data processing operations such as filtering, sorting, and aggregation calculations. The default loading spinner can be customized to match application design requirements using the [`spinnerTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#spinnertemplate) property.

The [`spinnerTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#spinnertemplate) property accepts an HTML string that defines the custom loading indicator appearance. This enables control over the visual presentation, including custom styling and animations.

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

The loading indicator can be completely disabled by setting the [`spinnerTemplate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#spinnertemplate) property to an empty string.

```js
function App() {
    return (<PivotViewComponent id='PivotView' height={350} spinnerTemplate={''}></PivotViewComponent>);
};
export default App;
```
