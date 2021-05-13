export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img
                  src="https://i.ibb.co/ZxrG2Qg/logocym.png"
                  alt="logo"
                  style={{ zIndex: 99999, marginBottom: "50px" }}
                />
                <h2>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Comenzar
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
