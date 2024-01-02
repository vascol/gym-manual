type GameProps = {
  title: string
  variants: string[]
  step: number
  percentage: number
  onClickVariant: (i: number) => void
}

export const Game: React.FC<GameProps> = ({
  title,
  variants,
  onClickVariant,
  step,
  percentage,
}) => {
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1 className="game_title">{title}</h1>
      <ul>
        {variants.map((obj, index) => (
          <li key={obj} onClick={() => onClickVariant(index)}>
            {obj}
          </li>
        ))}
      </ul>
    </>
  )
}
