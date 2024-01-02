import React from "react"
import { Game } from "./Game"
import { Result } from "./Result"

const questions = [
  {
    title: "Чи відчуваєте ви загальну втомленість?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "У вас є втрата концентрації?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Апатія?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Безсоння чи неспокійний сон?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Дратівливість?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Зниження продуктивності?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Збільшення часу відновлення після тренування?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Збільшений ранковий пульс?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Хронічні м’язові болі?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Втрата ваги?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Частіше хворієте?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Втрата апетиту?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
  {
    title: "Зниження бажання тренуватися?",
    variants: ["Так", "Ні"],
    correct: 0,
  },
]

const Quiz: React.FC = () => {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)

  const question = questions[step]

  const onClickVariant = (index: any) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  const onClickTryAgain = () => {
    setStep(0)
    setCorrect(0)
  }

  const percentage: number = Math.round((step / questions.length) * 100)

  return (
    <>
      <div className="quiz">
        {step !== questions.length ? (
          <Game
            title={question.title}
            variants={question.variants}
            onClickVariant={onClickVariant}
            step={step}
            percentage={percentage}
          />
        ) : (
          <Result
            correct={correct}
            questions={questions}
            // onClickTryAgain={onClickTryAgain}
          />
        )}
      </div>
    </>
  )
}

export default Quiz
