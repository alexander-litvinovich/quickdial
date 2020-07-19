import { h, Component } from "preact";
import DialButton from "../../components/dial-button";

const LINKS_LIST = "dialButtonList";

const LINKS_INITIAL = {};

const STATE_INITIAL = [
  {
    link: "https://yandex.ru/",
    label: "Yandex",
    icon: "https://yastatic.net/iconostasis/_/8lFaTHLDzmsEZz-5XaQg9iTWZGE.png",
  },
  {
    link: "https://meduza.io/",
    label: "Meduza",
    icon: "https://meduza.io/favicon-32.png",
  },
  {
    link: "https://youtube.com/",
    label: "YouTube",
    icon: "https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png",
  },
];

LINKS_INITIAL[LINKS_LIST] = STATE_INITIAL;

class DialButtonListContainer extends Component {
  constructor() {
    super();

    this.state = {
      fullfiled: false,
      links: [],
    };
  }

  initLinks() {
    return new Promise((resolve) => {
      chrome.storage.sync.set(LINKS_INITIAL, resolve);
    });
  }

  componentDidMount() {
    chrome.storage.sync.get(LINKS_LIST, (result) => {
      console.log("Storage", result);

      if (!result[LINKS_LIST]) {
        this.initLinks();
        this.setState({ links: STATE_INITIAL, fullfiled: true });
        console.log("Fallback");
      } else {
        this.setState({ links: result[LINKS_LIST], fullfiled: true });
        console.log("Loaded");
      }
    });
  }

  render() {
    console.log("State", this.state);

    if (!!this.state.fullfiled) {
      return (
        <div>
          {this.state.links.map((linkAsset) => (
            <DialButton {...linkAsset} />
          ))}
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default DialButtonListContainer;
