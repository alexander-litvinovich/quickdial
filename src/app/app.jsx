import { h, Component } from "preact";
import "./app.css";

import DialButton from "./components/dial-button";
import DialButtonListContainer from "./containers/dial-button-list";

class App extends Component {
  render() {
    return (
      <div id="app-root">
          <a href="options.html" target="_blank">settings</a>
        <DialButtonListContainer />
        {/* <DialButton label="Yandex" link="https://yandex.ru" icon="https://yastatic.net/iconostasis/_/8lFaTHLDzmsEZz-5XaQg9iTWZGE.png" /> */}
      </div>
    );
  }
}

export default App;
