import React from "react"
import { useDispatch } from "react-redux"
import { setSort } from "../redux/filter/filterSlice"

type SortListItem = {
  name: string
  sortProperty: string
}

type PopupClick = MouseEvent & {
  path: Node[]
}

type SortProps = {
  sort: {
    name: string
    sortProperty: string
  }
}

export const sortList: SortListItem[] = [
  { name: "популярністю(DESC)", sortProperty: "rating" },
  { name: "популярністю (ASC)", sortProperty: "-rating" },
  { name: "цініою (DESC)", sortProperty: "price" },
  { name: "цініою (ASC)", sortProperty: "-price" },
  { name: "алфавітом (DESC)", sortProperty: "title" },
  { name: "алфавітом (ASC)", sortProperty: "-title" },
]

const Sort: React.FC<SortProps> = ({ sort }) => {
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)

  const sortRef = React.useRef<HTMLDivElement>(null)

  const onClickListItem = (obj: SortListItem) => {
    dispatch(setSort(obj))
    setOpen(false)
  }

  // const handleOutsideClick = (event) => {
  //   const path = event.path || (event.composedPath && event.composedPath())
  //   if (!path.includes(sortRef.current)) {
  //     setOpen(false)
  //   }
  // }

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const _event = event as PopupClick
      if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
        setOpen(false)
      }
    }

    document.body.addEventListener("click", handleOutsideClick)

    return () => {
      document.body.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортувати за:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
                onClick={() => onClickListItem(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sort
