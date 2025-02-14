import { WebApiAdaptor } from '@syncfusion/ej2-data';
export class CustomAdaptor extends WebApiAdaptor {
  beforeSend(dm, request, settings) {
    request.headers.set('Syncfusion', true);
    super.beforeSend(dm, request, settings);
  }
}