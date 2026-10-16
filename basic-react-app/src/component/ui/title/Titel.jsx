import { useEffect } from "react";

function Title({ count }) {

    useEffect(() => {
    console.log("render");

        document.title = `Clicked ${count} times`;

        return () => {};
    }, []);

    return <h1>{count}</h1>;
}

export default Title;