function Resume(){
    return(
        <section>
            <div id='resume'>
                <h3>Efficient problem-solver known for writing clean code and tackling challenges with hard work and precision</h3>
            </div>
            <div id="numbers">
                <div className="number">
                    <h3>10+</h3>
                    <p>Years of professional experience</p>
                </div>
                <div className="number">
                    <h3>2</h3>
                    <p>Number of cats that roam my apartment</p>
                </div>
                <div className="number">
                    <h3>2</h3>
                    <p>Number of tech startups I've helped reach 
                        <a 
                            href='https://www.investopedia.com/terms/u/unicorn.asp#:~:text=Unicorns%20are%20startups%20whose%20valuations,going%20public%20through%20an%20IPO.'
                            target="_blank" 
                        > unicorn status
                        </a>
                    </p>
                </div>
                
            </div>
            <div className="bg">
                <button>
                    <a href='Rene_Acosta_Resume.pdf' download target="_blank" rel="noopener noreferrer">Check out my resume here!</a>
                </button>
            </div>
        </section>
    )
}

export default Resume;