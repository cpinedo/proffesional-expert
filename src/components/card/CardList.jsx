import Card from "./Card.jsx";
import classes from './CardList.module.css'
import NewCard from "./new_card/NewCard.jsx";

function CardList(){
    return (
        <>
            <NewCard />
            <ul className={classes.cards}>
                <Card professional="Carlos Pinedo" description="Electricista experto profesional" tag="Electricista" />
                <Card professional="Irene Martin" description="Saxofonista experto profesional" tag="Saxofón" />
            </ul>
        </>
    )
}

export default CardList