export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>
            Nos llena de felicidad y orgullo poder decir que, a 60 dias de
            abrir:
          </h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <img
                    src={d.icon}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "100%",
                    }}
                  />
                  <h3>{d.title}</h3>
                  {i === 2 ? <a href="#contact">{d.text}</a> : <p>{d.text}</p>}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
