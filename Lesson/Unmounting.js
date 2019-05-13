const IsShown = () => (
  <p>I'm shown when true ✅</p>
);

const IsNotShown = () => (
  <p>I'm shown when false ☑️</p>
);

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
  }

  toggle = () => {
    this.setState({ isShown: !this.state.isShown });
  };

  render() {
    return (
      <div>
        {this.state.isShown ? <IsShown /> : <IsNotShown />}
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}