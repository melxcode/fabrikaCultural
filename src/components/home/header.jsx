import { BIG_LOGO } from "../../data/datos";
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img
                  src={BIG_LOGO}
                  alt="logo"
                  height="250"
                  style={{
                    zIndex: 99999,
                    marginTop: "-225px",
                  }}
                />
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Como Llegar
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
