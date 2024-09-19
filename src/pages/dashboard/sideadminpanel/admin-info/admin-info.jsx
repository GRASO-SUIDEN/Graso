import { useState } from "react";
import "./admin-info.css";
import MobilePanel from "../../mobile-admin-panel/mobilepanel";

const AdminInfo = () => {
  const [showBalances, setShowBalances] = useState(true);

  const toggleBalances = () => {
    setShowBalances(!showBalances);
  };

  return (
    <div className="admin-info">
      <MobilePanel />
      <div className="main-info">
        <div className="admin-header">
          <h3>Dashboard</h3>{" "}
          <div className="profile-pic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="32"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </div>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle name-card"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="name">
                <p>Katherine Emeka</p>
                <small>Investor</small>
              </div>
              <div className="image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </div>
            </button>
            <ul className="dropdown-menu">
              <li>Profile</li>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>

        <div className="greeting">
          <p>Good Morning, Katherine</p>
        </div>

        <div className="stats">
          <ul className="summary">
            <li>
              <p>Summary</p>
              <small>June 2, 2024 - July 3, 2024</small>
            </li>
            <div className="btn-group">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USD
              </button>
              <ul className="dropdown-menu">
                <li>EUR</li>
              </ul>
            </div>
          </ul>

          <ul className="balances">
            <li>
              <p>{showBalances ? "USD 102,000" : "******"}</p>
              <small>Current Portfolio Value</small>
            </li>
            <li>
              <p>{showBalances ? "USD 16,000" : "******"}</p>
              <small>Realized return</small>
            </li>
            <li>
              <p>{showBalances ? "USD 30,000" : "******"}</p>
              <small>Avg, Investment value</small>
            </li>
            <li>
              <p>{showBalances ? "USD 35,000" : "******"}</p>
              <small>New customer, sign up</small>
            </li>
            <li className="hidebalance" onClick={toggleBalances}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="black"
                className="bi bi-eye-slash"
                viewBox="0 0 16 16"
              >
                {showBalances ? (
                  <>
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </>
                ) : (
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5-8 5.5-8 5.5 3 5.5 8 5.5a7 7 0 0 0 2.79-.588l-.77-.771A6 6 0 0 1 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8q.086-.13.195-.288c.335-.48.83-1.12 1.465-1.755q.247-.248.517-.486l.77-.771a7 7 0 0 0 2.79-.588z" />
                )}
              </svg>
            </li>
          </ul>
        </div>

        <div className="quick-access">
          <h3>Quick Access</h3>
          <ul>
            <li>
              <span>Trade</span>
            </li>
            <li>
              <span>Wallet</span>
            </li>
            <li>
              <span>Deposit</span>
            </li>
            <li>
              <span>Withdraw</span>
            </li>
            <li>
              <span>Stake</span>{" "}
            </li>
            <li>
              <span>Convert</span>
            </li>
          </ul>
        </div>

        <div className="double-holder">
          <div className="portfolio">
            <ul>
              <h2>Portfolio</h2>
              <li>
                <p>Parcific Bonva</p>
                <p>$10,000</p>
                <p>
                  <span>+128%</span>
                </p>
              </li>
              <li>
                <p>Parcific Bonva</p>
                <p>$10,000</p>
                <p>
                  <span>+128%</span>
                </p>
              </li>
              <li>
                <p>Parcific Bonva</p>
                <p>$10,000</p>
                <p>
                  <span>+128%</span>
                </p>
              </li>
              <li>
                <p>Parcific Bonva</p>
                <p>$10,000</p>
                <p>
                  <span>+128%</span>
                </p>
              </li>
              <li>
                <p>Parcific Bonva</p>
                <p>$10,000</p>
                <p>
                  <span>+128%</span>
                </p>
              </li>
              <h4>See all</h4>
            </ul>
          </div>

          <div
            className="card values"
            style={{ width: "30.12rem", height: "22.56rem" }}
          >
            <div className="card-body">
              <div className="card-title">
                <h5>Value</h5>
                <ul>
                  <li>7d</li>
                  <li>30d</li>
                  <li>90d</li>
                  <li>180d</li>
                </ul>
              </div>
              <p className="card-text">
                USD 102,000 <small>+128%</small> PnL
              </p>
            </div>
            <img
              src="https://github.com/chiscookeke11/My_Portfolio/blob/main/graph%20(1).png?raw=true"
              className="card-img-top"
              alt="graph"
            />
          </div>
        </div>

        <div className="recent_transactions">
          <h4>Recent Transactions</h4>
        </div>
      </div>
    </div>
  );
};

export default AdminInfo;
