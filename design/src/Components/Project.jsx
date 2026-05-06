import "./Project.css";

function Project() {
  return (
    <div className="upper-section">
      <div className="container">
        <div className="project-content">
          <div className="left">
            <h1 className="head11">Project Management</h1>

            <p className="head-22">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>

            <button className="btn">Get Started</button>
          </div>

          <div className="right">
            <img src="/photo1.png" alt="Project" />
          </div>
        </div>

        <div className="project-lower">
          <div className="left">
            <img src="/photo3.png" alt="Work together" />
          </div>

          <div className="right">
            <h1 className="head11">Work together</h1>

            <p className="head-22">
              With whitespace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>

            <button className="btn">Try it now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
