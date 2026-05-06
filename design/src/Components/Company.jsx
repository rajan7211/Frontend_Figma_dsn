import "./company.css";

function Company() {
  return (
    <div className="fuLLContent">
      <div className="container">
        <div className="section-101">
          <div className="left-part">
            <h1 className="fnt">whitepace</h1>
            <p className="parra">
              whitepace was created <br />
              for the new ways we <br /> live and work.
            </p>
          </div>

          <div className="cardds">
            <div className="card-1">
              <h3>Product</h3>
              <ul>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
              </ul>
            </div>

            <div className="card-2">
              <h3>Resources</h3>
              <ul>
                <li>Blog</li>
                <li>Guides & tutorials</li>
                <li>Help center</li>
              </ul>
            </div>

            <div className="card-3">
              <h3>Company</h3>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Media kit</li>
              </ul>
            </div>

            <div className="lstHead">
              <h2 className="strt">Try it Today</h2>
              <p className="parahead">
                Get started for free. Add your <br /> whole team as your needs
                grow.
              </p>
              <button className="bbttn">Start today</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
