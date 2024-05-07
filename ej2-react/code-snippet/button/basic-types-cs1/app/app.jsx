import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
function App() {
    return (<form>
          {/* Submit.*/}
          <ButtonComponent type='submit'>Submit</ButtonComponent>

          {/* Reset.*/}
          <ButtonComponent type='reset'>Reset</ButtonComponent>
      </form>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
