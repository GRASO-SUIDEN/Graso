import Header from "../../components/banner/header/header";
import Footer from "../../components/banner/footer/footer";
import "./launch.css";
const Launch = () => {
  return (
    <>
      <div className="launch-page">
        <div className="launch-banner">
          <Header />
          <div className="banner-text">
            <h1>Secure funds for your project with Graso</h1>
            <p>
              Leverage our extensive experience, gain investments and build a
              community in the process
            </p>
            <button className="banner-text-btn">Genesis</button>
            <ul>
              <li>
                <div className="amount">$400K</div>
                <small>AVERAGE RAISE</small>
              </li>
              <li>
                <div className="amount">1M+</div>
                <small>PROJECT LAUNCH</small>
              </li>
              <li>
                <div className="amount">$4.6M</div>
                <small>RAISED CAPITAL</small>
              </li>
              <li>
                <div className="amount">1M+</div>
                <small>UNIQUE INVESTORS</small>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Launch;
