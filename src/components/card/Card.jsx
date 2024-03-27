import classes from './Card.module.css'
function Card(props) {
    return (
    <li className={classes.post}>
        <p className={classes.professional}>{props.professional}</p>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.tag}>{props.tag}</p>
    </li>
    )
}

export default Card