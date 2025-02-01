import React, { useState, useEffect } from 'react';
import mnewImg from '../assets/mnew.png';

const Hero = () => {
  const texts = ["Full Stack Developer", "MEA(R)N Stack"]; // Array of texts to display
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (isDeleting) {
      // Delete text
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex((prev) => prev - 1);
        }, 50); // Faster speed for deleting

        return () => clearTimeout(timeout);
      } else {
        // Switch to the next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      // Type text
      if (currentIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        }, 100); // Typing speed

        return () => clearTimeout(timeout);
      } else {
        // Start deleting after a delay
        setTimeout(() => setIsDeleting(true), 1000); // Wait 1 second before deleting
      }
    }
  }, [currentIndex, currentTextIndex, isDeleting, texts]);

  return (
    <>
      <div className='d-flex justify-content-center align-items-center w-100 min-vh-60 mt-5 p-4 rounded shadow' id='home'>
        <div className='container'>
          <div className='row align-items-center'>
            {/* Image Section */}
            <div className='col-lg-5 text-center mb-4 mb-lg-0'>
              <img
                className='img-fluid'
                src={mnewImg}
                style={{ maxWidth: '100%', width: '350px', borderRadius: '150px' }}
                alt='landing'
              />
            </div>

            {/* Text Section */}
            <div className='col-lg-7 text-center text-lg-start'>
              <p className='fw-medium fs-4 mb-1'>Hello,</p>
              <h1 className='display-4' style={{ fontFamily: 'Kaushan Script, serif' }}>
                <span style={{ fontFamily: 'initial' }}>I'm</span> <span style={{ color: '#083445' }}>Shamlu Mol A K</span>
              </h1>
              <p className='fw-bold fs-2' style={{ display: 'inline-block' }}>
                {displayText}
                <span style={{ animation: 'blink 1s infinite' }}>|</span> {/* Blinking cursor */}
              </p><br />
              <a style={{backgroundColor:'#083445'}} className="downloadBtn" href="./IMAGES/mariajoe Resume.pdf" download=""> Download CV</a>
              </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Hero;