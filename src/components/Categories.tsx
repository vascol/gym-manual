import React from "react"

type CategoriesProps = {
  categoryId: number
  onClickCategory: any
}

const categories = [
  "Всі",
  "М'ясні",
  "Вегетаріанські",
  "Гриль",
  "Гострі",
  "Закриті",
]

const Categories: React.FC<CategoriesProps> = ({
  categoryId,
  onClickCategory,
}) => {
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

export default Categories
