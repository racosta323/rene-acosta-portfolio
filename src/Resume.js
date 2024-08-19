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
                    <h3>3.1K+</h3>
                    <p> views on my&nbsp;
                        <a 
                            href='https://medium.com/@racosta323/create-a-simple-footer-using-react-bootstrap-58c4371a4ade'
                            target="_blank"
                        >
                            <b>blog post discussing React</b>
                        </a>
                    </p>
                </div>
                <div className="number">
                    <h3>2</h3>
                    <p>Number of tech startups I've helped reach&nbsp;
                        <a 
                            href='https://www.investopedia.com/terms/u/unicorn.asp#:~:text=Unicorns%20are%20startups%20whose%20valuations,going%20public%20through%20an%20IPO.'
                            target="_blank" 
                        >
                            <b>unicorn status</b>
                        </a>
                    </p>
                </div>
                
            </div>
            <div className="bg">
                <a href='Rene_Acosta_Resume.pdf' download >
                    <button>
                        Check out my resume here!
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Resume;