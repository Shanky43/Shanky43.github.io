import { HashLoader } from "react-spinners";
function Loading() {
    return (
        <div className="sweet-loading">
            <HashLoader
                color="#e4002b"
                size={40}
                speedMultiplier={1}
            />
        </div>
    );
}

export default Loading;