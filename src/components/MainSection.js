import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import campImage from '../assets/camp-image.jpg';
import flyerImage from '../assets/flyer-image.jpg';
import aboutUsImage from '../assets/about-us-image.jpg';
import gamesImage from '../assets/games-image.jpg';
import prayerImage from '../assets/prayer-image.jpg';
import flagpoleImage from '../assets/flagpole-image.jpg';
import bibleReadingImage from '../assets/bible-reading-image.jpg';
import Bonfire from '../assets/Bon-fire.jpeg';
import Competition from '../assets/Winners.jpeg';
import campHighlightImage from '../assets/camp-highlight-image.jpg';

const MainSection = () => {
  const campDate = new Date('August 19, 2025 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const images = [campImage, flyerImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(sliderTimer);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = campDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [campDate]);

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: highlightRef, inView: highlightInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: registerRef, inView: registerInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main className="main-section">
      <section
        className={`hero ${heroInView ? 'fade-in' : ''}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ref={heroRef}
        id="home"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              <span className="teens-camp">TOMS CAMP</span> <span>2025</span>
            </h1>
            <h2>
              theme: <span className="cast">
                <span className="c">C</span>
                <span className="r">R</span>
                <span className="u">U</span>
                <span className="i">I</span>
                <span className="s">S</span>
                <span className="e">E</span>
              </span>
            </h2>
            <h3 className="welcome-heading">Welcome to TOMS Camp 2025</h3>
            <p className="welcome-text">
              Welcome to TOMS Camp, your premier destination for an exceptional spiritual and personal growth experience. 
              Our mission is to bridge the gap between talented teens and transformative opportunities, dedicated to providing 
              a supportive and enriching camp environment.
            </p>
           <a href="https://tom-registration-uwakmfon-ibanga-19bef74e.vercel.app/" className="get-started-button" target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>
        </div>
      </section>

      <section
        className={`about-section ${aboutInView ? 'slide-in' : ''}`}
        id="about"
        ref={aboutRef}
      >
        <div className="about-content">
          <div className="about-text">
            <h3>Transforming today’s teenager into tomorrow’s Christ-centered & fulfilled adults</h3>
            <p>
              It is generally acknowledged that the adolescent period of life is the stage of character and personality formation.
              A sure way to raise a godly generation is to build their character and personality around Christ, the Solid Rock during adolescent years. Where our parents and even the church are “too busy” and ignorant to do this, the devil is always pleased to lend a hand.
              <br></br>
              <br></br>
              Teenagers’ Outreach Ministries (TOM) Inc., is an interdenominational, non sectarian, faith-based organization (FBO). 
              <br></br>
              Toms Camp is a yearly event organized to inspire and empower teenagers through faith-based activities, 
              skill-building workshops, and community engagement. We aim to create a safe space for growth and connection.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutUsImage} alt="About Us" className="about-img" />
          </div>
        </div>
      </section>

      <section
        className={`features-section ${featuresInView ? 'fade-in' : ''}`}
        ref={featuresRef}
      >
        <h2>Features of the Camp</h2>
        <p className="section-intro">
          Explore the exciting activities and programs that make TOMS Camp a unique and enriching experience.
        </p>
        <div className="features-content">
          <div className="activity">
            <img src={gamesImage} alt="Games" className="activity-img" />
            <p>Enjoy fun games that bring campers together, fostering teamwork and excitement.</p>
          </div>
          <div className="activity">
            <img src={prayerImage} alt="Prayer" className="activity-img" />
            <p>Join us for spiritual prayer sessions to strengthen your faith and community.</p>
          </div>
          <div className="activity">
            <img src={bibleReadingImage} alt="Bible Reading" className="activity-img" />
            <p>Engage in daily Bible reading to deepen your understanding and connection.</p>
          </div>
          <div className="activity">
            <img src={flagpoleImage} alt="Flagpole" className="activity-img" />
            <p>Participate in breakout sections for all ages, open your mind to a heartfelt discussion with teachers</p>
          </div>
          <div className="activity">
            <img src={Bonfire} alt="Bonfire" className="activity-img" />
            <p>Participate in the bonfire ceremony, a symbol of unity and camp spirit.</p>
          </div>
          <div className="activity">
            <img src={Competition} alt="Competition" className="activity-img" />
            <p>Compete with your platoon against other platoons for a chance to win amazing rewards</p>
          </div>
        </div>
      </section>

      <section
        className={`highlight-section ${highlightInView ? 'slide-in' : ''}`}
        ref={highlightRef}
      >
        <div className="highlight-content">
          <div className="highlight-text">
            <h3>Why Choose TOMS Camp?</h3>
            <p>
              At TOMS Camp, we’re more than just a summer getaway—we’re a life-changing experience! 
              Through faith-based activities like Bible study, worship, and prayer, we help teens build a strong spiritual foundation. 
              Our skill-building workshops and team competitions foster personal growth, leadership, and lasting friendships. 
              Join us to create memories that will inspire and empower you for years to come.
            </p>
          </div>
          <div className="highlight-image">
            <img src={campHighlightImage} alt="Camp Highlight" className="highlight-img" />
          </div>
        </div>
      </section>

      <section
        className={`register-section ${registerInView ? 'fade-in' : ''}`}
        id="register"
        ref={registerRef}
      >
        <h2>Registrations for TOMS Camp 2025 are ongoing! 🥳</h2>
        <div className="register-content">
          <div className="register-details">
            <p className="date">August 19th – 24th, 2025</p>
            <div className="countdown">
              <div><span>{timeLeft.days}</span> Days</div>
              <div><span>{timeLeft.hours}</span> Hours</div>
              <div><span>{timeLeft.minutes}</span> Minutes</div>
              <div><span>{timeLeft.seconds}</span> Seconds</div>
            </div>
            <p className="activities">
              Engage in: Discussions, Bible Study, Operation Tell, Bonfire, Skill Acquisition, Worship, Prayer, & More
            </p>
          </div>
          <div className="register-info">
            <div className="info-box">
              <h3>Camp Fee</h3>
              <p className="amount">₦5,000</p>
              <p className="early">Early Registration Recommended</p>
              <p className="late">Payment via Remita</p>
            </div>
            <div className="info-box">
              <h3>Venue</h3>
              <p>Lutheran High School, Obot Idim, Akwa Ibom State</p>
            </div>
           
            <div className="register-button">
            <div className="register-button">
               <a href="https://tom-registration-uwakmfon-ibanga-19bef74e.vercel.app/" className="register-button" target="_blank" rel="noopener noreferrer">Register Now</a>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;