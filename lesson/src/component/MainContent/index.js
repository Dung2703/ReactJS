import { FaBuffer, FaAccusoft } from "react-icons/fa";

function MainContent() {
    let name = "Dung";
    const css = {
        // color: "red",
        // backgroundColor: "blue"
    }
    return (
        <>
            <div className="box">
                <div className="test" style={css}>
                    <h1>Hello, {name}!</h1>
                </div>
                <div className="test" style={css}>
                    <h1>Hello, {name}!</h1>
                    <FaAccusoft style={{ fontSize: "50px" }} />
                </div>

                <FaBuffer style={{ fontSize: "50px" }} />
            </div>

        </>
    )
}

export default MainContent;