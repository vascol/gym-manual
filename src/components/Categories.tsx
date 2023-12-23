import React from "react"

type CategoriesProps = {
  categoryId: number
  onClickCategory: (i: number) => void
}

const categories = ["Всі статті", "Рецепти", "Вправи", "Рекомендації"]

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ categoryId, onClickCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={categoryId === i ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    )
  }
)
