class Hello extends React.Component {
    render() {
      return (
          <div>
            <h1>Hello World</h1>
            <p>Made by Lv303-.NET</p>
          </div>
      );
    }
}
ReactDOM.render(
    <Hello></Hello>,
    document.getElementById("app")
)
