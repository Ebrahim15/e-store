import React, {Component} from "react";

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="social-media-container">
                    <a target={"_blank"} rel="noreferrer" href="https://www.youtube.com/"><img alt="youtube" className="social-media-logo" src={require('../images/youtube.png')}></img></a>
                    <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/"><img alt="instagram" className="social-media-logo" src={require('../images/instagram.png')}></img></a>
                    <a target={"_blank"} rel="noreferrer" href="https://www.twitter.com/"><img alt="twitter" className="social-media-logo" src={require('../images/twitter (1).png')}></img></a>
                    <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/"><img alt="facebook" className="social-media-logo" src={require('../images/facebook.png')}></img></a>
                </div>
                <div className="terms-privacy">
                    <a href="/"><div className="region"><img alt="country" id="country-logo" src={require('../images/egypt.png')}></img> Egypt</div> </a>
                    <a href="/"><div>Privacy</div></a>
                    <a href="/"><div>Terms of service</div></a>
                    <a href="/"><div>Sales Terms</div></a>
                </div>
            </div>
        )
    }
}

export default Footer