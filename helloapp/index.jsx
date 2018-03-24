class Hello extends React.Component {
    render() {
      return (
        <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
            </ul>
        </div>
      );
    }
}
ReactDOM.render(
    <Hello></Hello>,
    document.getElementById("app")
)
