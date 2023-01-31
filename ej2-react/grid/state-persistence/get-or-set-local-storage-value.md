---
layout: post
title: Get or set local storage value in React Grid component | Syncfusion
description: Learn here all about Get or set local storage value in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Get or set local storage value 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Get or set local storage value in React Grid component

If the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to **true**, the grid property value is saved in the **window.localStorage** for reference.
You can get/set the localStorage value by using the **getItem/setItem** method in the **window.localStorage**.

```ts
    /** get the Grid model
     * "gridGrid" is component name + component id
     */
    const value: string = window.localStorage.getItem('gridGrid');
    const model: object = JSON.parse(value);
```

```ts
  /** set the Grid model
   * "gridGrid" is component name + component id
   */
  window.localStorage.setItem('gridGrid', JSON.stringify(model));
```