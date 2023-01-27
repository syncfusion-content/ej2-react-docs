---
layout: post
title: Get or set local storage value in React Treegrid component | Syncfusion
description: Learn here all about Get or set local storage value in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Get or set local storage value 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Get or set local storage value in React Treegrid component

If the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablepersistence) property is set to true, the treegrid property value is saved in the **window.localStorage** for reference. You can get/set the localStorage value by using the **getItem/setItem** method in the **window.localStorage**.

```ts

        // get the TreeGrid model.
        const value: string = window.localStorage.getItem('treegridTreeGrid') as string;
        // "treegridTreeGrid" is component name + component id.
        const model: object = JSON.parse(value);

```

```ts

        // set the TreeGrid model.
        // "treegridTreeGrid" is component name + component id.
        window.localStorage.setItem('treegridTreeGrid', JSON.stringify(model));

```