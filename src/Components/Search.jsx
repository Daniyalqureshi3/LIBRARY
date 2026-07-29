import React from 'react'
import { uselibrary } from '../context/LibraryContext'

function Search() {

    const {dispatch} = uselibrary();
  return (
    <div>
          <div>
      <input
        type="text"
        placeholder="Search by Title, Author or"
        onChange={(e) =>
          dispatch({
            type: "SET_SEARCH",
            payload: e.target.value,
          })
        }
      />
    </div>
    </div>
  )
}

export default Search
