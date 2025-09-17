---
layout: post
title: State persistence in React Treegrid component | Syncfusion
description: Learn here all about State persistence in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in React Treegrid component

State persistence refers to the TreeGrid's state maintained in the browser's [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.

State persistence stores treegrid’s model object in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablepersistence) is defined as true.

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.

## Get or set local storage value

If the [enablePersistence](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablepersistence) property is set to true, the treegrid property value is saved in the **window.localStorage** for reference. You can get or set the localStorage value by using the **getItem** and **setItem** method in the **window.localStorage**.

```ts
        // Get the TreeGrid model.
        const value: string = window.localStorage.getItem('treegridTreeGrid') as string; //"treegridTreeGrid" is component name + component id.
        const model: object = JSON.parse(value);
```

```ts
        // Set the TreeGrid model.
        window.localStorage.setItem('treegridTreeGrid', JSON.stringify(model)); //"treegridTreeGrid" is component name + component id.
```