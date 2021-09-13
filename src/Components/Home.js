import classes from './Home.module.css';

const Home = (props) => {

    return (
        <div className={classes.home}>
            <h1>Who are you looking for?</h1>
            <div className={classes.search}>
                <input type="text" placeholder="Search for health care providers..."/>
                <button onClick={props.onClick}>Search</button>
            </div>
        </div>
    );
}

export default Home;