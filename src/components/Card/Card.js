import "./Card.css"

export default function Card({className, children}) {
    const classes = 'card ' + className; //take the css class this item have and add the card css on top of it
    return (<div className={classes}>{children}</div>);
}