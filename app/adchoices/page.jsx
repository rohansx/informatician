import style from "@/styles/AdChoices.module.css";

export default function AdChoices() {
  return (
    <div className={style.adchoices}>
      <div className={style["adchoices-container"]}>
        <h2 className={style["adchoices-title"]}>AdChoices: Transparency and Control</h2>
        <div className={style["adchoices-section"]}>
          <h3 className={style["adchoices-section-title"]}>What is AdChoices?</h3>
          <div className={style["adchoices-content"]}>
            <p>
              AdChoices is an industry-standard program that allows users to have more control over the ads they see online. It gives you the option to learn more about the ads displayed to you and make choices regarding personalized advertising.
            </p>
            <p>
              At <strong> <i>Informatician</i></strong>, we are committed to providing transparency and control over the advertising displayed on our website.
            </p>
          </div>
        </div>
        <div className={style["adchoices-section"]}>
          <h3 className={style["adchoices-section-title"]}>How AdChoices Works?</h3>
          <div className={style["adchoices-content"]}>
            <p>
              AdChoices works by providing a symbol, typically represented as a small blue triangle, on or near the ads that are delivered based on your browsing behavior. By clicking on the AdChoices icon, you can access information about the data collection and use practices associated with that particular ad, as well as exercise control over personalized advertising.
            </p>
          </div>
        </div>
        <div className={style["adchoices-section"]}>
          <h3 className={style["adchoices-section-title"]}>Your AdChoices Options</h3>
          <div className={style["adchoices-content"]}>
            <p>
              Through AdChoices, you have several options regarding personalized advertising:
              <br />
              <br />
              <strong>Opt-Out:</strong> You can choose to opt-out of personalized advertising from participating companies by clicking on the AdChoices icon and following the instructions provided. This will prevent those companies from delivering tailored ads based on your interests.
              <br />
              <strong>Learn More:</strong> AdChoices provides you with the opportunity to learn more about the specific data practices and choices associated with each ad. By clicking on the AdChoices icon, you can access information about data collection, use, and opting out for that particular ad.
            </p>
          </div>
        </div>
        <div className={style["adchoices-section"]}>
          <h3 className={style["adchoices-section-title"]}>Third-Party Advertising Networks</h3>
          <div className={style["adchoices-content"]}>
            <p>
              We work with third-party advertising networks that participate in the AdChoices program to deliver relevant ads on our website. These networks may collect and use information about your browsing activity to display ads that are more likely to be of interest to you.
            </p>
          </div>
        </div>
        <div className={style["adchoices-section"]}>
          <h3 className={style["adchoices-section-title"]}>Our Commitment to Privacy</h3>
          <div className={style["adchoices-content"]}>
            <p>
              We are committed to protecting your privacy and safeguarding your personal information. Our Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to ensure the security of your data. You can review our Privacy Policy to learn more about our data practices.
            </p>
          </div>
        </div>
        <div className={style["adchoices-section"]}>
          <h3 className={style["adchoices-section-title"]}>Contact Us</h3>
          <div className={style["adchoices-content"]}>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:informaticianx@gmail.com" className={style["contact-email"]}>informaticianx@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
