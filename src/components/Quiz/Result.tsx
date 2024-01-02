import resultImg from "../../assets/img/quizz.png"

type ResultProps = {
  questions: any[]
  correct: number
}

export const Result: React.FC<ResultProps> = ({ correct, questions }) => {
  return (
    <div className="result">
      <img src={resultImg} alt="img" />
      <h2>
        У вас <span>{correct}</span> із <span>{questions.length}</span> ознак
        перетренерованості
      </h2>
    </div>
  )
}
