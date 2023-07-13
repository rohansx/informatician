import "./Footer.css";
import NewsLetter from "./NewsLetter/NewsLetter";
import { Link } from "react-router-dom";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import darkLogo from "../../assets/logos/dark_logo.png";

const Footer = () => {
  let year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerItems = [
    [
      { itemName: "About Us", itemLinks: "/about" },
      { itemName: "Our Team", itemLinks: "/team" },
      { itemName: "Contact Us", itemLinks: "/contact" },
      { itemName: "Join our team!", itemLinks: "/join" },
    ],
    [
      { itemName: "Help/FAQ", itemLinks: "/faq" },
      { itemName: "Accessibility", itemLinks: "/accessibility" },
      { itemName: "Publishers", itemLinks: "/publishers" },
      { itemName: "AdChoices", itemLinks: "/adchoices" },
    ],
    [
      { itemName: "Privacy Policy", itemLinks: "/privacy" },
      { itemName: "Terms & Conditions", itemLinks: "/terms" },
      { itemName: "CopyRight", itemLinks: "/copyright" },
      { itemName: "Cookie Preference", itemLinks: "/cookie" },
    ],
  ];

  const columnNames = ["About", "Support", "Legal"];

  const footerComponents = footerItems.map((coulmnItems, index) => {
    return (
      <div key={index}>
        <h2 className={`mb-6 text-m font-bold`}>{columnNames[index]}</h2>
        <ul className="font-medium">
          {coulmnItems.map((item, index) => {
            return (
              <li key={index} className="mb-4">
                <Link to={item.itemLinks} onClick={scrollToTop}>{item.itemName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <>
      <NewsLetter />
      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="footer_body">
            <div className=" footer_main mb-6 md:mb-0">
              <Link to="/" onClick={scrollToTop} className="logo_img">
                <img
                  src={darkLogo}
                  className=" h-12 w-17 ml-1 mb-2.5  hover:shadow "
                  alt="Informatician logo"
                />
              </Link>
            </div>
            <div className="footer_inner_body">
              {footerComponents.map((item, index) => {
                return (
                  <div key={index} className="footer_inner_body_item">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="copyright_footer">
            <span className={`text-sm font-bold   sm:text-center `}>
              © {year}{" "}
              <a href="/" onClick={scrollToTop} className="hover:underline">
                Informatician™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-0 space-x-6 sm:justify-center sm:mt-0 mr-14 2xl:mr-0">
              <Link to="/develop" onClick={scrollToTop}>
                <BsTwitter className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110" />
              </Link>
              <Link
                to="https://github.com/rohansx/informatician"
                target="_blank"
              >
                <BsGithub className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110" />
              </Link>
              <Link to="/develop" onClick={scrollToTop}>
                <BsDiscord className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
