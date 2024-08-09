function Carousel(){
    return(
        
        <div className="companies">
            <div className="company-image">
                <a href='https://www.guideline.com' target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cms-assets.guideline.com/GDL_logo_7316e48028/format=auto,quality=75,width=640"
                        alt="Guideline logo"
                        className="logo"
                        style={{width:"200px"}}
                    />
                </a>
            </div>
            <div className="company-image">
                <a href='https://www.qualia.com' target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://www.qualia.com/images/branding/qualia_logo_big.png"
                        alt="Qualia logo"
                        className="logo"
                    />
                </a>
            </div>
        </div>
        
       
    )
}

export default Carousel