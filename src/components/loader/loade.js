import "./loader.css"

export const Loader = () => {
    return(
        <div className="loader-wrapper">
            <h2 className="loading-title">Loading, please wait...</h2>
            <div className="loader">
                <svg viewBox="0 0 80 80">
                    <circle id="test" cx="40" cy="40" r="32"></circle>
                </svg>
            </div>
        </div>
    )
}