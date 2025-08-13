import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel, MessageModel, MessageSentEventArgs} from '@syncfusion/ej2-react-interactive-chat';
import { marked } from 'marked';
import * as React from 'react';
import * as ReactDOM from "react-dom";

declare var DOMPurify: any;
function App() {
  const currentUserModel: UserModel = {
    id: 'user1',
    user: 'Albert',
  };

  const michaleUserModel: UserModel = {
    id: 'user2',
    user: 'Michale Suyama',
  };

  const suggestions= [
    {
      displayText: 'Share quick link',
      markdownText: 'Check out our [project dashboard](https://dashboard.example.com) for updates!',
    },
    {
      displayText: 'Emphasize priority',
      markdownText: 'This is **high priority** and needs _immediate attention_.',
    }
  ];

  const [messages, setMessages] = React.useState<MessageModel[]>([
    {
      text: marked.parse('Hey Michale, did you review the _new API documentation_?'),
      author: currentUserModel,
      timestamp: new Date('2024-01-15T09:30:00'),
    },
    {
      text: marked.parse(
        'Yes! The **endpoint specifications** look great. Check the [integration guide](https://api.example.com/docs) when you get a chance.'
      ),
      author: michaleUserModel,
      timestamp: new Date('2024-01-15T09:32:00'),
    }
  ]);
  const messageSend = (args: MessageSentEventArgs) => {
    args.cancel = true;
    const suggestion = suggestions.find(
      (s) => s.displayText === args.message.text
    );
    const messageText = suggestion
      ? suggestion.markdownText
      : args.message.text;
    const parsedText = DOMPurify.sanitize(marked.parse(messageText));
    const newMessage: MessageModel = {
      text: parsedText,
      author: currentUserModel,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <ChatUIComponent
      headerText={'Chat UI with Markdown'}
      user={currentUserModel}
      suggestions={suggestions.map((s) => s.displayText)}
      messageSend={messageSend}
    >
      <MessagesDirective>
        {messages.map((msg, index) => (
          <MessageDirective
            key={index}
            text={msg.text}
            author={msg.author}
            timestamp={msg.timestamp}
          />
        ))}
      </MessagesDirective>
    </ChatUIComponent>
  );
}
 
ReactDOM.render(<App />, document.getElementById('container'));