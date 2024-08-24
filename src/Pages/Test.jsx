import { useState } from "react";
import RecordButton from "../Components/RecordButton";
import Mic from "../Components/Mic";
import NavButton from "../Components/NavButton";

const Test = () => {
  let [letter, setLetter] = useState("A");
  let [attempts, setAttempts] = useState([]);
  let word = "vote";
  let pronounciation = "/vout/";
  let averageAccuracy = 0;
  let [image, setImage] = useState(
    "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg"
  );

  for (let i = 0; i < attempts.length; i++) {
    averageAccuracy += attempts[i];
  }

  return (
    <div className="md:px-[9rem] pb-[4rem]">
      <div className="text-md font-semibold mb-6">Letter : {letter}</div>

      <div className="flex justify-between text-md font-semibold mb-5">
        <span className="">
          Word to be spelled : {word.charAt(0).toUpperCase() + word.slice(1)}
        </span>
        <span className="me-[4rem]">
          Average Correct Percentage - {averageAccuracy} %
        </span>
      </div>

      <center className="text-2xl">
        <div className="mb-1">{word}</div>
        <div className="mb-8">{pronounciation}</div>
        {image.length != 0 ? (
          <img src={image} className="h-[12rem] my-8 rounded-xl" />
        ) : null}
        <Mic />
      </center>

      <div className="flex w-[75%] mx-auto justify-center mt-5">
        <RecordButton bgColor="#89D85D" text="Start Recording" />
        <RecordButton bgColor="#D86C5D" text="Stop Recording" />
        <RecordButton bgColor="#0984E3" text="Reset all tries" />
      </div>

      <div className="my-[5rem]">
        <div className="text-[#2D8CFF] font-medium">Attempts :</div>

        <div className="flex justify-center gap-x-[4rem] mt-5">
          <div
            className="h-[7rem] w-[14rem] rounded-lg flex flex-col justify-center items-center text-white font-semibold text-md gap-y-3 text-center drop-shadow-[3px_4px_2px_rgba(0,0,0,0.7)]"
            style={
              attempts[0]
                ? { backgroundColor: "#89D85D" }
                : { backgroundColor: "#E3E2E7", color: "black" }
            }
          >
            <div>Attemp 1</div>
            {attempts[0] && <div>Accuracy {attempts[0]}</div>}
          </div>

          <div
            className="h-[7rem] w-[14rem] rounded-lg flex flex-col justify-center items-center text-white font-semibold text-md gap-y-3 text-center drop-shadow-[3px_4px_2px_rgba(0,0,0,0.7)]"
            style={
              attempts[1]
                ? { backgroundColor: "#D86C5D" }
                : { backgroundColor: "#E3E2E7", color: "black" }
            }
          >
            <div>Attemp 2</div>
            {attempts[1] && <div>Accuracy {attempts[1]}</div>}
          </div>

          <div
            className="h-[7rem] w-[14rem] rounded-lg flex flex-col justify-center items-center text-white font-semibold text-md gap-y-3 text-center drop-shadow-[3px_4px_2px_rgba(0,0,0,0.7)]"
            style={
              attempts[2]
                ? { backgroundColor: "#0984E3" }
                : { backgroundColor: "#E3E2E7", color: "black" }
            }
          >
            <div>Attemp 3</div>
            {attempts[2] && <div>Accuracy {attempts[2]}</div>}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-x-[4rem] mt-[7rem]">
        <NavButton
          text="Previous"
          currLetter={letter}
          onClickHandler={() => {}}
        />
        <NavButton text="Next" currLetter={letter} onClickHandler={() => {}} />
      </div>
    </div>
  );
};

export default Test;
