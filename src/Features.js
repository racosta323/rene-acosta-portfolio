function Features({ renderFeatures }){
    return(
        <div id="features">
            <h4>FEATURES</h4>
            <ul className="features-list">
                {renderFeatures()}
            </ul>
        </div>
    )
}

export default Features