import React from 'react'

const Conditionals = () => {

  const checkVal = () => {
    return true
    // return false
  }

  const conditionalFn = () => {
    return (
      checkVal() ?
        <div>
          true
        </div>
      :
        <div>
          false
        </div>

    )
  }

  return (
    <div>
      { conditionalFn() }
    </div>
  )
}

export default Conditionals