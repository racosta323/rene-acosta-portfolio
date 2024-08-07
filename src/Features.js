function Features({ renderFeatures }){
    return(
        <div id="features">
            <div id='features-bg'>
                <h4>FEATURES</h4>
            </div>
            <ul className="features-list">
                {renderFeatures()}
            </ul>
        </div>
    )
}

export default Features