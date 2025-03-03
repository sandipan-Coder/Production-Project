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
            অম্বিকা জুয়েলার্স: বিশ্বাস ও গুণগত মানের এক পরিচিত নাম <br />

            ২০১৫ সালে চন্দন পালের হাতে প্রতিষ্ঠিত অম্বিকা জুয়েলার্স, আজও তার গুণগত মান ও বিশ্বাসের জন্য সুপরিচিত। পশ্চিম মেদিনীপুরের জাহালদা, বেলদায় অবস্থিত এই গহনার দোকান শুধু সোনার ও রুপার অলংকার তৈরি করেই থেমে থাকেনি, পুরনো গয়না মেরামতের ক্ষেত্রেও করেছে এক নতুন দৃষ্টান্ত স্থাপন।<br />

            অম্বিকা জুয়েলার্সে প্রবেশ করলেই অনুভব করা যায় এক অনন্য পরিবেশ—সুন্দরভাবে সাজানো শোরুম, শীতাতপ নিয়ন্ত্রিত আরামদায়ক ঘর এবং সর্বোপরি, নিখুঁত কারিগরির অলংকার। এখানে প্রতিটি গয়না শুধু ধাতু নয়, বরং স্বপ্ন আর আবেগের এক অপূর্ব মিশ্রণ।<br />

            প্রতিষ্ঠার পর থেকেই "গুণগত মান ও বিশ্বাস" আমাদের প্রধান লক্ষ্য। আমাদের প্রতিটি সৃষ্টির পেছনে রয়েছে ভালোবাসা ও যত্ন, যা আমাদের ক্রেতাদের মুখে হাসি ফোটায়।<br />

            অম্বিকা জুয়েলার্স—এখানে গয়নার শুধু দাম নেই, আছে অনুভূতি! <br />
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
