---
layout: post
title: Integrate paging with listview in React Listview component | Syncfusion
description: Learn here all about Integrate paging with listview in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Integrate paging with listview 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Integrate paging with listview in React Listview component

The first and foremost step is to obtain the `Pager` component from `Grid`. Install the ej2-react-grids package using the following command.

```
npm install @syncfusion/ej2-react-grids --save
```

Import the Pager to the ListView sample which has been created.

```
import { PagerComponent } from "@syncfusion/ej2-react-grids";
```

The [`totalRecordsCount`](https://ej2.syncfusion.com/documentation/api/pager/#totalrecordscount) property of Pager must be specified whenever using this particular component. By using [`pageSize`](https://ej2.syncfusion.com/documentation/api/pager/#pagesize) property, the number of list items to be displayed is made available. The [`pageCount`](https://ej2.syncfusion.com/documentation/api/pager/#pagecount) property allows the user to specify the visibility of the page numbers accordingly. Since the paging sample in the upcoming code snippet uses these three properties, the explanation provided here were minimal and to the point. For further API concerns in Pager component, [click here](https://ej2.syncfusion.com/documentation/api/pager/).

With the help of the [`query`](https://ej2.syncfusion.com/react/documentation/api/list-view/#query) property of ListView, the user can specify the number of records to be displayed in the current page.

The `query` property helps in splitting the entire datasource based on our convenience. In the sample provided below, when clicking the next button in pager, it fetches the datasource based on page size and current page of Pager component.

```ts
function click(args: any) {
  query = new Query().range((args.currentPage - 1) * pagesize, (args.currentPage * pagesize));
}
```

In the above code snippet, the event stores the [`currentPage`](https://ej2.syncfusion.com/documentation/api/pager/#currentpage) value, and the datasource which is to be displayed in the next page is obtained.

Note: When `pageize` isn't mentioned, it defaults to 12 records per page.
