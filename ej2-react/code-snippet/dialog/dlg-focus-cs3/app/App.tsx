import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const [visible, setVisible] = React.useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div id="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
      <ButtonComponent onClick={handleOpen}>Open</ButtonComponent>
      <DialogComponent
        header="Delete Multiple Items"
        content="Are you sure you want to permanently delete all of these items?"
        showCloseIcon={true}
        visible={visible}
        width="300px"
        animationSettings={{ effect: 'Zoom' }}
        target="#container"
        beforeClose={(args) => {
          args.preventFocus = true;
        }}
        close={handleClose}
        buttons={[
          {
            buttonModel: { isPrimary: true, content: 'Yes' },
            click: handleClose,
          },
          {
            buttonModel: { content: 'NO' },
            click: handleClose,
          },
          
        ]}
      />
    </div>
  );
}

export default App;
