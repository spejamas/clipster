import React from 'react'

import Header from './header'
import SecondaryButton from './secondary-button'
import Footer from './footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="home-hero">
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="home-image"
        />
        <div className="home-container01">
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="home-image1"
          />
          <div className="home-container02">
            <div className="home-container03">
              <h1 className="home-text">
                <span className="home-text01">You run your business.</span>
                <br></br>
                <span className="home-text03">
                  We&apos;ve got your ad creative.
                </span>
              </h1>
              <span className="home-text04">
                From Facebook to TikTok, Clipster delivers user-generated
                content tailored to your brand, strategy, and platform.
              </span>
              <button type="button" className="home-button button">
                <span className="home-text05">Make your free ad</span>
              </button>
            </div>
            <div className="home-container04">
              <img
                alt="image"
                src="/playground_assets/influencerfinal.svg"
                className="home-image2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1">
        <div className="home-container05">
          <div className="home-container06">
            <h3 className="home-text06">Let us do the hard part for you.</h3>
            <span className="home-text07">
              <span className="home-text08">
                We know you don&apos;t want to pay a photographer, find an
                actor, rent a studio, edit reels for long hours, sell your soul
                to the spirits of the dead, and climb a treacherous mountain in
                the storm to find a legendary shaman and learn the secrets of
                the almighty algorithm every time you run a new ad on Instagram.
                The good news is you don&apos;t have to. In fact, all you have
                to do is send us your product and marketing strategy, and
                we&apos;ll do all that for you. That&apos;s gotta be the best
                news you&apos;ve heard all day,
              </span>
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-container07">
              <h1 className="home-text09">
                Top reasons to work with Clipster:
              </h1>
              <span className="home-text10">
                (besides how cool the crew is, obviously):
              </span>
            </div>
            <div className="home-container08">
              <div className="home-card1">
                <div className="home-container09">
                  <img
                    alt="image"
                    src="/playground_assets/dollarsvg.svg"
                    className="home-image3"
                  />
                </div>
                <h6 className="home-text11">Cost Efficient</h6>
                <span className="home-text12">
                  Save resources and reduce your production time getting your ad
                  creative from Clipster.
                </span>
              </div>
              <div className="home-card2">
                <div className="home-container10">
                  <img
                    alt="image"
                    src="/playground_assets/instagramlike.svg"
                    className="home-image4"
                  />
                </div>
                <h6 className="home-text13">Native Content</h6>
                <span className="home-text14">
                  <span className="home-text15">
                    Increase your ad performance with content that blends
                    seamlessly into the native content of your platform.
                  </span>
                  <span className="home-text16"></span>
                </span>
              </div>
              <div className="home-card3">
                <div className="home-container11">
                  <img
                    alt="image"
                    src="/playground_assets/voicebrand.svg"
                    className="home-image5"
                  />
                </div>
                <h6 className="home-text17">Build Your Brand</h6>
                <span className="home-text18">
                  Boost your ad engagement and increase brand loyalty with
                  organic user-generated content.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section3">
        <div className="home-container12">
          <div className="home-contact">
            <h1 className="home-text19">
              Oh, and did we mention the first ad is free?
            </h1>
            <span className="home-text20">
              We believe in doing work so good, you&apos;ll come back for
              seconds. So drop us a line with some details about your product,
              and we&apos;ll get in touch.
            </span>
            <div className="home-form">
              <h1 className="home-text21">Get in touch.</h1>
              <span className="home-text22">
                We&apos;ll get back to you within 24 hours.
              </span>
              <span className="home-text23 textXS">NAME</span>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="home-textinput textSM input"
              />
              <span className="home-text24 textXS">EMAIL</span>
              <input
                type="text"
                required
                placeholder="Email"
                className="home-textinput1 textSM input"
              />
              <span className="home-text25 textXS">WEBSITE</span>
              <input
                type="text"
                required
                placeholder="Website"
                className="home-textinput2 textSM input"
              />
              <span className="home-text26 textXS">
                DESCRIBE YOUR PRODUCT AND STRATEGY (WE&apos;LL TALK MORE ABOUT
                THIS)
              </span>
              <textarea
                cols="80"
                rows="4"
                placeholder="Type a message"
                className="home-textarea textSM textarea input"
              ></textarea>
              <div className="home-container13">
                <SecondaryButton
                  button="Send"
                  rootClassName="secondary-button-root-class-name"
                ></SecondaryButton>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="home-image6"
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
