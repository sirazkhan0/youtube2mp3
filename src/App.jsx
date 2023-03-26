import axios from "axios";
import { useRef, useState } from "react";
import { youtube_parser } from "./utils";

function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeID,
      },
    };
    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";
  };

  return (
    <>
      <div className="app">
        <h2 className="logo">YouTube mp3 downloader</h2>

        <section className="content">
          <h1 className="content_title">YouTube to MP3 Converter</h1>

          <p className="content_description">
            Transform YouTube videos into MP3s in just a few clicks!
          </p>

          <form onSubmit={handleSubmit} className="form">
            <input
              ref={inputUrlRef}
              placeholder="Paste a Youtube video URL link..."
              className="form_input"
              type="text"
            />
            <button type="submit" className="form_button">
              Search
            </button>
          </form>

          {urlResult ? (
            <a
              target="_blank"
              rel="noreferrer"
              href={urlResult}
              className="download_btn "
            >
              Download MP3
            </a>
          ) : (
            ""
          )}
        </section>
      </div>
      <footer>
          <div className="footer-content">
            <div>
              <ul className="socials">
                <li>
                  <a href="https://www.youtube.com/channel/UC-TdxX8aFOL6XMfiacQEHIQ">
                    <i className="fa fa-youtube">YouTube</i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sirazkhan1/">
                    <i className="fa fa-linkedin-square">Linkedin</i>
                  </a>
                </li>
              </ul>
            </div>
            <h3>
              <span>T</span>
              <span>E</span>
              <span>C</span>
              <span>H</span>
              <br />
              <span>F</span>
              <span>L</span>
              <span>Y</span>
              <span>N</span>
              <span>I</span>
              <span>X</span>
            </h3>

            <div>
              <ul className="socials">
                <li>
                  <a href="https://www.youtube.com/channel/UC-TdxX8aFOL6XMfiacQEHIQ">
                    <i className="fa fa-youtube">-</i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sirazkhan1/">
                    <i className="fa fa-linkedin-square">-</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              copyright &copy;2023 TECH FLYNIX. designed by <span>Siraz</span>
            </p>
          </div>
        </footer>

      
    </>
  );
}

export default App;
