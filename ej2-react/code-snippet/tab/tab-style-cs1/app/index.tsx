import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import {useRef} from 'react';
import * as ReactDOM from 'react-dom';

const ReactApp = () => {
  let tabObj = useRef<TabComponent>(null);
  let headerStyles = useRef<DropDownListComponent>(null)
  let headerText: any = [{ text: "Twitter" }, { text: "Facebook" }, { text: "WhatsApp" }];
  let fields: object = { text: 'text', value: 'value' };
  let headerData: any = [
    { 'value': 'default', 'text': 'Default' }, { 'value': 'fill', 'text': 'Fill' },
    { 'value': 'background', 'text': 'Background' }, { 'value': 'accent', 'text': 'Accent' }
  ];
  let hdrVal: string = 'default';

  const changeHeaderStyles = (e: ChangeEventArgs): void => {
    removeStyleClass();
    const name: string = headerStyles.current.value as string;
    if (name === 'fill') {
      tabObj.current.element.classList.add('e-fill');
    } else if (name === 'background') {
      tabObj.current.element.classList.add('e-background');
    } else if (name === 'accent') {
      tabObj.current.element.classList.add('e-background');
      tabObj.current.element.classList.add('e-accent');
    }
  }

  const removeStyleClass = (): void => {
    tabObj.current.element.classList.remove('e-fill');
    tabObj.current.element.classList.remove('e-background');
    tabObj.current.element.classList.remove('e-accent');
  }

  const content0 = () => {
    return <div>
      Twitter is an online social networking service that enables users to send and read short 140-character
      messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read
      them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San
      Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey,
      Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity,
      with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion
      search queries per day.
      </div>;
  }
  const content1 = () => {
    return <div>
      Facebook is an online social networking service headquartered in Menlo Park, California. Its website was
      launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo
      Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website
      membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford
      University. It gradually added support for students at various other universities and later to high-school students.
      </div>;
  }
  const content2 = () => {
    return <div>
      WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates
      under a subscription business model. It uses the Internet to send text messages, images, video, user location and
      audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user
      base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in
      Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.
      </div>;
  }
    return (
      <div>
        <DropDownListComponent ref={headerStyles} dataSource={headerData} fields={fields} value={hdrVal} width={'150'} change={changeHeaderStyles} />
        <br /><br />
        <TabComponent heightAdjustMode='Auto' height={320} ref={tabObj}>
          <TabItemsDirective>
            <TabItemDirective header={headerText[0]} content={content0} />
            <TabItemDirective header={headerText[1]} content={content1} />
            <TabItemDirective header={headerText[2]} content={content2} />
          </TabItemsDirective>
        </TabComponent>
      </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);