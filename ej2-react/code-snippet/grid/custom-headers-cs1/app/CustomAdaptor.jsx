import { WebApiAdaptor } from '@syncfusion/ej2-data';
export class CustomAdaptor extends WebApiAdaptor {
  beforeSend(args, xhr, settings) {
    xhr.withCredentials = true;
    super.beforeSend(args, xhr, settings);
    xhr.headers.set('Syncfusion', true); // Assign custom headers here.
  }
}