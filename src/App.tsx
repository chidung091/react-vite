import "./App.css";

function App() {
  const text = "あ";
  const answer = ["A", "B", "C"];
  const checkAnswer = (answer: string) => {
    const correct = "A";
    if (answer === correct) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <h1 className="bg-red-500">Hello</h1>
        <div className="flex justify-center">
          <a className="border-green-300 border-2 w-50 h-50 text-center text-9xl">
            {text}
          </a>
        </div>
        <div aria-label="choice" className="flex justify-center">
          <button
            onClick={() => checkAnswer(answer[0])}
            className="bg-green-500 hover:bg-green-200 text-white p-2 m-2 rounded w-20 h-20"
          >
            {answer[0]}
          </button>
          <button
            onClick={() => checkAnswer(answer[1])}
            className="bg-green-500 hover:bg-green-200 text-white p-2 m-2 rounded w-20 h-20"
          >
            {answer[1]}
          </button>
          <button
            onClick={() => checkAnswer(answer[2])}
            className="bg-green-500 hover:bg-green-200 text-white p-2 m-2 rounded w-20 h-20"
          >
            {answer[2]}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
