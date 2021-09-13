import { Fragment, useState } from "react";
import AvailableDoctors from "./AvailableDoctors";
import Home from "./Home";

const Profile = () => {

    const [search, setSearch] = useState(false);

    const onSearchHandler = () => {
        setSearch(true);
    }

    return (
        <Fragment>
            <Home onClick={onSearchHandler}/>
            {search && <AvailableDoctors />}
        </Fragment>
    )
}

export default Profile;