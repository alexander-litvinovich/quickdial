import { h, Component } from "preact";
import "./options.css";

import { storage } from "./utils";

const LINKS_LIST = "dialButtonList";

const onSubmit = (e) => {
  console.log(e);

  e.preventDefault();
};

class Options extends Component {
  constructor() {
    super();

    this.state = {
      links: [],
      fullfiled: false,
      form: {
        label: "",
        link: "",
        icon: "",
      },
    };
  }

  componentDidMount() {
    chrome.storage.sync.get(LINKS_LIST, (result) => {
      this.setState({ links: result[LINKS_LIST], fullfiled: true });
    });
  }

  saveLinks(stateLinks) {
    const links = {};
    links[LINKS_LIST] = stateLinks;
    chrome.storage.sync.set(links);
  }

  addLink() {
    const link = {
      label: this.state.form.label,
      link: this.state.form.link,
      icon: this.state.form.icon,
    };

    this.setState({
      links: [...this.state.links, link],
      form: {
        label: "",
        link: "",
        icon: "",
      },
    });
  }

  render() {
    this.state.fullfiled &&
      this.state.links.map((el) => {
        console.log(el);
      });

    return (
      <div id="app-root">
        <h2>Hi, there 👋</h2>I am the Options page
        <div>
          {this.state.fullfiled ? (
            this.state.links.map((el) => <div>{el.label}</div>)
          ) : (
            <div>Loading</div>
          )}
        </div>
        <div className="add">
          <form onSubmit={onSubmit}>
            <input
              value={this.state.form.label}
              name="label"
              placeholder="label"
            />
            <input
              value={this.state.form.link}
              name="link"
              placeholder="link"
            />
            <input
              value={this.state.form.icon}
              name="icon"
              placeholder="icon"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Options;
