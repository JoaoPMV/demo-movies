import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./index.css";

const Movies = () => {
  const [showLyrics, setShowLyrics] = useState(false);
  const [showVocabulary, setShowVocabulary] = useState(false);

  const lyricsText = `
So, how was the {first} day of {school}? It was fine, I {guess}. I don't know. Do you {ever} look at {someone} and {wonder}, what is going on {inside} {their} head? Did you guys {pick} up on {that}? Sure did. Something's wrong. We're {going} to find out what's {happening}, but we'll need {support}. Signal the {husband}. With a nice pass over the reach, comes across center line. Uh oh, she's {looking} at us. What {did} she say? Oh, sorry sir, no one was {listening}. Is it {garbage} night? We {left} the {toilet} seat up. What? What is it, {woman}? What? Signal {him} again. Ah, so, Riley, how was {school}? You gotta be {kidding} me. For this, we {gave} up that {Brazilian} helicopter {pilot}. School was {great}, all right? What was that? I {thought} you said we {were} going to act {casual}. Riley, is everything okay? Sir, she {just} rolled her eyes at us. All right, {make} a show of force. I don't want to {have} to put the foot {down}. No, not the foot. Riley, I do not like this new {attitude}. Oh, I'll show you {attitude}, old man. No, no, no, no, {breathe}. What is {your} problem? Just {leave} me alone. Sir, reporting high {levels} of SAS. Take it to DEFCON 2. DEFCON 2. I don't know where this {disrespectful} attitude came {from}. You {want} a piece of this, pops? Yeah, well, look. {Prepare} the foot. {Keys} to safety position. {Ready} to launch on your {command}, sir. Just {shut} up. Fire. That's it. Go to your {room}. The foot is down. The foot is down. Good {job}, gentlemen. That could have {been} a disaster. Well, that {was} a disaster. Come, {fly} with me, gachinha. Yeah.
  `;

  const renderLyrics = (lyrics) => {
    return (
      <div className="lyrics-line">
        {lyrics.split(" ").map((word, index) => {
          // remove pontuação para checar se é palavra entre {}
          const cleanWord = word.replace(/[.,!?]/g, "");
          if (cleanWord.startsWith("{") && cleanWord.endsWith("}")) {
            const actualWord = cleanWord.slice(1, -1); // remove {}
            return (
              <input
                key={index}
                className="lyrics-input"
                onChange={(e) => {
                  const value = e.target.value.trim().toLowerCase();
                  const correct = actualWord.toLowerCase();
                  if (value === correct) {
                    e.target.classList.add("correct-word");
                  } else {
                    e.target.classList.remove("correct-word");
                  }
                }}
              />
            );
          }

          return (
            <span key={index} className="lyrics-word">
              {word + " "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="grid-container-music">
        <header className="header-music">
          <p>Projeto demonstrativo (Frontend Only)</p>
        </header>
        <div className="content-music">
          <div className="section-music">
            <iframe
              className="iframe-movies"
              src="https://www.youtube.com/embed/seMwpP0yeu4"
              width="600"
              height="400"
              title="Descrição do iframe"
              style={{ border: "none" }}
            ></iframe>
            <div className="buttons-music">
              <button
                onClick={() => {
                  setShowVocabulary(!showVocabulary);
                  setShowLyrics(false);
                }}
                className="button-movies-synopsis"
              >
                Synopsis
              </button>
              <button
                className="button-movies-subtitle"
                onClick={() => {
                  setShowLyrics(!showLyrics);
                  setShowVocabulary(false);
                }}
              >
                Subtitles
              </button>
            </div>
          </div>
          <div className="main-music">
            {showLyrics && (
              <div className="lyrics-box">{renderLyrics(lyricsText)}</div>
            )}

            {showVocabulary && (
              <div className="vocabulary-box">
                <p>
                  Riley's world turns upside-down when she moves. The stress of
                  the move brings Sadness to the forefront. When Joy and Sadness
                  are swept into the far reaches of her mind, the only emotions
                  left in Headquarters are Anger, Fear and Disgust.
                </p>
              </div>
            )}
          </div>
        </div>

        <footer className="footer-music">
          <div className="">
            <a href="https://github.com/JoaoPMV" className="dev-info">
              <p>
                <FaGithub className="git-icon" />
              </p>
              <p className="">JoãoP Dev</p>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Movies;
