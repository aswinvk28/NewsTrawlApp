export default function IFrame() {
    return (
        <div className="section">
            <div className="facebook_frame sidebar">
                <iframe id="facebook_iframe" src="https://www.facebook.com"></iframe>
            </div>
            <div className="linkedin_frame sidebar">
                <iframe id="linkedin_iframe" src="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"></iframe>
            </div>
            <div className="twitter_frame sidebar">
                <iframe id="twitter_iframe" src="https://www.twitter.com/login"></iframe>
            </div>
        </div>
    );
}