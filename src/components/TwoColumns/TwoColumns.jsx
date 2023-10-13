// компенент таблицы из двух столбцов

/* eslint-disable react/prop-types */
import './TwoColumns.scss'

const TwoColumns = ({children}) => {
  return (
    <div className="twoColumns">
        {children}
    </div>
  )
}

export default TwoColumns
