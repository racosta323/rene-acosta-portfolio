function Features({ renderFeatures }){
    return(
        <div id="features">
            <div id='features-bg'>
                <h4>FEATURES</h4>
            </div>
            <div className="features-list">
                <ul>
                    {renderFeatures()}
                </ul>
            </div>
        </div>
    )
}

export default Features