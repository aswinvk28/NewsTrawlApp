import $ from "jquery";

function ChooseFacebook() {
  $('.facebook_frame').removeClass("hide-frame");
  $('.facebook_frame').addClass("expand-frame");
  $('.twitter_frame').removeClass("expand-frame");
  $('.linkedin_frame').removeClass("expand-frame");
  $('.twitter_frame').addClass("hide-frame");
  $('.linkedin_frame').addClass("hide-frame");
}

function ChooseLinkedIn() {
  $('.linkedin_frame').removeClass("hide-frame");
  $('.linkedin_frame').addClass("expand-frame");
  $('.facebook_frame').removeClass("expand-frame");
  $('.twitter_frame').removeClass("expand-frame");
  $('.facebook_frame').addClass("hide-frame");
  $('.twitter_frame').addClass("hide-frame");
}

function ChooseTwitter() {
  $('.twitter_frame').removeClass("hide-frame");
  $('.twitter_frame').addClass("expand-frame");
  $('.facebook_frame').removeClass("expand-frame");
  $('.linkedin_frame').removeClass("expand-frame");
  $('.facebook_frame').addClass("hide-frame");
  $('.linkedin_frame').addClass("hide-frame");
}

function Slider() {
  return (
    <div className="App">
      <div className="row">
        <a className="facebook" onClick={ChooseFacebook}>
            <img width="80" height="80" src="icons/facebook.png" />
        </a>
      </div>
      <div className="row">
        <a className="linkedin" onClick={ChooseLinkedIn}>
            <img width="80" height="80" src="icons/linkedin.png" />
        </a>
      </div>
      <div className="row">
        <a className="twitter" onClick={ChooseTwitter}>
            <img width="80" height="80" src="icons/twitter.png" />
        </a>
      </div>
    </div>
  );
}

export default Slider;
