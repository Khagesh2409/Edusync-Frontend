import { button } from "@material-tailwind/react";

const RecordButton = ({ bgColor, text }) => {
  return (
    <button
      className="text-white rounded-lg w-[9.5rem] h-[2.3rem] drop-shadow-[1px_2px_1px_rgba(0,0,0,0.7)] hover:opacity-80 mx-4"
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default RecordButton;
