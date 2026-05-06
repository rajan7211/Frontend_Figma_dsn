import "./Extension.css";

function Extension() {
  return (
    <div className="uper-Section">
      <div className="container">
        <div className="Extension-Content">
          <div className="left">
            <h1 className="head">Use as Extension</h1>
            <p className="head-2">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <button className="btnn">Let's Go</button>
          </div>
          <div className="right">
            <img src="/photo2.png" alt="Image" />
          </div>
        </div>

        <div className="Lower-Section">
          <div className="left">
            <img src="/photo1.png" alt="image" />
          </div>
          <div className="right">
            <h1 className="headd">Customise it to your needs</h1>
            <p className="head-22">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
            <button className="btnn2">Let's Go</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extension;
