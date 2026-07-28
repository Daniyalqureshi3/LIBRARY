import React from 'react'
import { uselibrary } from '../context/LibraryContext'

function Filter() {
    const {state, dispatch} = uselibrary();
  return (
    <div>
      <select
        value={state.filter}
        onChange={(e) =>
          dispatch({
            type: "SET_FILTER",
            payload: e.target.value,
          })
        }
      >
        <option value="ALL">All Books</option>
        <option value="Available">Available</option>
        <option value="Borrowed">Borrowed</option>
        <option value="Favourite">Favourite</option>
      </select>
    </div>
  )
}

export default Filter
