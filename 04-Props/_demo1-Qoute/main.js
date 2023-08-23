const quotes = [
    {
        quote: 'The only sin is ignorance',
        source: 'Christopher Marlowe',
    },
    {
        quote: 'A man is his own easiest dupe, for what he wishes to be true he generally believes to be true',
        source: 'Demosthenes',
    },
    {
        quote: 'A lie can travel halfway around the world while the truth is putting on its shoes',
        source: 'Mark Twain',
    },
    {
        quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people',
        source: 'Eleanor Roosevelt',
    },
    {
        quote: 'If you have a garden and a library, you have everything you need',
        source: 'Marcus Tullius Cicero',
    },
    {
        quote: 'Truth comes out in wine',
        source: 'Pliny the Elder',
    },
    {
        quote: 'Everything in the universe is within you. Ask all from yourself',
        source: 'Rumi',
    },
    {
        quote: 'When I get a little money I buy books; and if any is left I buy food and clothes',
        source: 'Desiderius Erasmus',
    },
];
function MyComponent(p) {
    return <h4> {p.text}</h4>

}
//React : React.createElement("h1", {className: "red", role: "button"}, "Header")
//JSX : <h1 className="red" role="button"> Header < /h1>

// const proprs = {}
//React: React.createElement("h1", props, "Header") 

// ## ส่ง Attribute ให้ FunctionComponent 
//JSX : <MyComponent {text="React" className="red"}
//const props = { text: "React", className="red"}

/* 0 attr : <MyComponent/> ===MyComponent()
1 attr : <MyComponent text="react" /> == MyComponent(props)
2 attr : <



*/
function App() {
    return (
        <div>
            <h1 className>Header</h1>
            <MyComponent text="React" />
            <MyComponent text="CSS" />
            <MyComponent text="HTML" />
            <MyComponent text= "Javascript" />
        
        </div>
    )
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
