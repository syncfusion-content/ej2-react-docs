---
layout: post
title: State persistence in React Gantt component | Syncfusion
description: Learn here all about State persistence in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in React Gantt component

State persistence refers to the Gantt's state maintained in the browser's [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser. State persistence stores gantt’s model object in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/gantt/#enablepersistence) is defined as true.

## Get or set localStorage value

If the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/gantt/#enablepersistence) property is set to true, the gantt property value is saved in the `window.localStorage` for reference. You can get/set the localStorage value by using the `getItem`/`setItem` method in the `window.localStorage`.

```ts
//get the Gantt model.
let value: string = window.localStorage.getItem('ganttGantt'); //"ganttGantt" is component name + component id.
let model: Object = JSON.parse(model);

```

```ts
//set the Gantt model.
window.localStorage.setItem('ganttGantt', JSON.stringify(model)); //"ganttGantt" is component name + component id.

```

> You can refer to our [`React Gantt`](https://www.syncfusion.com/react-ui-components/react-gantt-chart) feature tour page for its groundbreaking feature representations. You can also explore our [`React Gantt example`](https://ej2.syncfusion.com/react/demos/#/material/gantt/default) to knows how to present and manipulate data.

## Prevent columns from persisting

When the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/gantt/#enablepersistence) property is set to true, the Gantt properties such as [Filtering](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowfiltering), [Sorting](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowsorting) , and [Columns](https://ej2.syncfusion.com/react/documentation/api/gantt/#columns) will persist. You can use the `addOnPersist` method to prevent these Gantt properties from persisting.

The following example demonstrates how to prevent Gantt columns from persisting. In the [dataBound](https://ej2.syncfusion.com/react/documentation/api/gantt/#databound) event of the Gantt, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

>Note: When the `enablePersistence` property is set to true, the Gantt features such as column template, column formatter, header text, and value accessor will not persist.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/column-prevent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/column-prevent-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/column-prevent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/column-prevent-cs1" %}

## Persist the header template and header Text

By default, the Gantt properties such as column template, header text, header template, column formatter, and value accessor will not persist when [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/gantt/#enablepersistence) is set to true. Because the column template and header text can be customized at the application level.

If you wish to restore all these column properties, then you can achieve it by cloning the gantt columns property using JavaScript Object’s assign method and storing this along with the persist data manually. While restoring the settings, this column object must be assigned to the gantt’s columns property to restore the column settings as demonstrated in the following sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/column-persist-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/column-persist-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/column-persist-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/column-persist-cs1" %}
