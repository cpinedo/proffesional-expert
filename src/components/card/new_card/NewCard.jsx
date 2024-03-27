import classes from './NewCard.module.css';

function NewCard() {
    function changeBodyHandler(event) {
        console.log(event.target.value)
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required onChange={changeBodyHandler}/>
            </p>
            <p></p>
            <p>
                <label htmlFor="body">Description</label>
                <textarea id="body" required rows={3} />
            </p>
            <p>
                <label htmlFor="tag">Tag</label>
                <input type="text" id="tag" required />
            </p>
        </form>
    );
}

export default NewCard;