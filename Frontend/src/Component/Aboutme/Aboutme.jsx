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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              recusandae molestias qui illo perspiciatis accusantium sequi,
              autem assumenda doloribus dolorum sint maiores commodi velit a
              ducimus quis quod, alias nulla in harum. Nulla doloribus
              voluptatem consequuntur, rerum ducimus aliquid! Sit perspiciatis
              neque officia ex reprehenderit rem minima asperiores quaerat ullam
              dolorem quisquam optio voluptas accusantium earum, aspernatur
              officiis, dicta recusandae! Quos distinctio deserunt itaque aut.
              Consequatur laborum amet doloribus animi molestias nulla iure quos
              laudantium quidem placeat officiis ex vel voluptatem mollitia
              nihil, quis voluptatum temporibus magni optio perspiciatis commodi
              quaerat omnis. Eligendi iusto ab voluptate quasi! Vitae dolorum
              eligendi, eaque, exercitationem quaerat molestiae dolor quasi
              repudiandae repellat aliquam ab, cumque odit sequi porro.
              Officiis, consequatur cumque! Molestiae animi tempora earum,
              reiciendis tenetur necessitatibus recusandae hic repellat
              distinctio, quod ullam. Facere, hic facilis! Id, reiciendis
              cumque. Non, fugiat ipsum a error magni eius quisquam amet
              laboriosam consectetur soluta iure quas? Ab autem quia cum hic
              officiis optio voluptatem provident aliquam aliquid, quidem
              expedita vel odit, ea commodi reprehenderit veniam laudantium
              dolore maxime ratione voluptas! Cupiditate placeat libero
              laudantium quidem, nostrum ut eos voluptate, animi rem sit soluta
              consequatur tempore ab ipsam hic ad corrupti iure veritatis
              doloribus autem fugit minima?
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
