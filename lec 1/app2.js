const heading = React.createElement("div",{ id:"parent"},React.createElement("div",{ id:"child"},React.createElement("h1",{ id:"heading"},"hello world")));
        const root = ReactDOM.createRoot(document.getElementById("root1"));
        root.render(heading);