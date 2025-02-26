import { WebApiAdaptor,DataManager,Fetch } from '@syncfusion/ej2-data';
export class CustomAdaptor extends WebApiAdaptor {
  beforeSend(dm: DataManager, request: Request, settings: Fetch) {
    request.headers.set('Syncfusion', 'true');
    super.beforeSend(dm, request, settings);
  }
}