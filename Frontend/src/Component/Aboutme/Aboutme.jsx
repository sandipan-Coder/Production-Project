import React from "react";
import "./Aboutme.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutMe = () => {
  return (
    <>
      <div className="hader-container">
        <Header/>
      </div>
      <div className="hide"></div>
      <div className="xyz">
      <div className="about-page">
        <div className="about-banner">
          <h1>Welcome to AMBHIKA JEWELLERS</h1>
          <p>Where Timeless Beauty Meets Craftsmanship</p>
        </div>

        <div className="about-content">
          <section className="about-story">
            <h2>Our Story</h2>
            <p>
            In the quaint town of Jahalda, Belda, Paschim Medinipur, there’s a name that has been synonymous with quality and trust since 2015—Ambika Jewellers. Owned by Chandan Pal, this family-run jewelry store has become a beloved destination for those seeking timeless beauty and impeccable craftsmanship.<br/>

            What began as a humble endeavor has grown into a beacon of artistry and reliability. At Ambika Jewellers, gold and silver ornaments are not just created; they’re crafted with precision and care, reflecting the dreams and emotions of every customer. From exquisite new designs to the careful repair of cherished heirlooms, every piece tells a story of elegance and heritage.<br/>
            <br/>
            Stepping into the beautifully decorated air-conditioned showroom, customers are greeted with a warm ambiance and a promise of premium quality. It’s not just the shimmering ornaments that draw people in—it’s the unwavering commitment to trust and excellence that keeps them coming back.<br/>

            For nearly a decade, Ambika Jewellers has stood as a testament to Chandan Pal’s vision: creating jewelry that lasts a lifetime and building relationships rooted in integrity.
            </p>
          </section>
          <section className="about-values">
            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Quality:</strong> We use only the finest gold to create
                stunning pieces that last a lifetime.
              </li>
              <li>
                <strong>Craftsmanship:</strong> Every piece is handcrafted by
                skilled artisans with precision and care.
              </li>
              <li>
                <strong>Trust:</strong> Transparency and customer satisfaction
                are at the heart of our business.
              </li>
            </ul>
          </section>

          <section className="about-offerings">
            <h2>What We Offer</h2>
            <p>
              From traditional bridal sets to modern minimalist designs, Golden
              Elegance offers a wide range of gold jewelry to suit every style
              and occasion.
            </p>
            <ul className="offerings-list">
              <li>Bridal Jewelry</li>
              <li>Necklaces & Pendants</li>
              <li>Earrings & Rings</li>
              <li>Custom Gold Creations</li>
            </ul>
          </section>
        </div>
      </div>
      </div>

      <div className="footer-container">
          <Footer />
        </div>
    </>
  );
};

export default AboutMe;
