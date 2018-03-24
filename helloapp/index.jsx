class Hello extends React.Component {
    render() {
        return (
            <h1>Hello, React</h1>
            <div style="color:blue;">Made by Lv303-.NET</div>
        );
    }
}
ReactDOM.render(
    <Hello></Hello>,
    document.getElementById("app")
)
