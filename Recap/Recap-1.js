class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button>Click me!</button>
      </div>
    );
  }
}