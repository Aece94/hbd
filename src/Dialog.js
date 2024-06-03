
import { Link } from "react-router-dom";
import { useState } from "react";

export const Dialog = () => {



    const rus = ":( are you sure?";
    const [opened, isOpened] = useState(false);


    const handleNoo = () => {

        alert("Glad to hear");
        isOpened(false);
    }
    const handleYes = () => {

        alert(":( try again when you do")
        isOpened(false);

    };

    const handleNo = (event) => {
        isOpened(true);
        event.preventDefault();
    }

    return <div>
        <dialog open className="d1"  >
            <p>Hello! this is Ece &hearts; </p>
            <p>Do you love me?</p>
            <form method="dialog">
                <button> <Link to={"/Me"}>Yes</Link></button>
                <button className="no" onClick={handleNo} >No</button>
            </form>
        </dialog>
        <div>
            <dialog open={opened} className="d2">
                <h4>{rus}</h4>
                <button onClick={handleYes}>Yes</button>
                <button onClick={handleNoo}>No</button>

            </dialog>
        </div>
        <br></br>

    </div>;

};

export default Dialog;
