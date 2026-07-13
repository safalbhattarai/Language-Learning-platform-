import hero from "../assets/hero.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Master New Languages With Confidence</h1>

        <p>
          Learn English, Japanese, Korean and more through interactive lessons,
          quizzes and real-world practice.
        </p>

       <div className="hero-buttons">
  <button>Start Learning</button>

  <button className="secondary-btn">
    Watch Demo
  </button>
</div>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Language Learning" />
      </div>

      
    </section>
  );
}

export default Hero;