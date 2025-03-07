import { WebApiAdaptor } from '@syncfusion/ej2-data';
export class CustomAdaptor extends WebApiAdaptor {
  beforeSend(dm, request, settings) {
    request.headers.set('Syncfusion', true); // Assign custom headers here.
    super.beforeSend(dm, request, settings);
  }
}