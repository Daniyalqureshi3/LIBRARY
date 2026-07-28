import React from 'react'
import { uselibrary } from '../context/LibraryContext'

function CategoryList() {
    const {state, dispatch} = uselibrary();

    const categories = [
  "ALL",
  "Science",
  "Programming",
  "History",
  "Novel",
  "Islamic",
  "Business",
  "Biography",
  "Other",
];
  return (
    <div>
      <select 
      value={state.selectedCategory}
      onChange={((e)=> dispatch({
        type: "SET_CATEGORY",
        payload: e.target.value
      }))}
      >
      <option value="ALL">All Categories</option>
        <option value="Programming">Programming</option>
        <option value="History">History</option>
        <option value="Novel">Novel</option>
        <option value="Science">Science</option>
        <option value="Islamic">Islamic</option>
        <option value="Business">Business</option>
        <option value="Biography">Biography</option>
        <option value="Other">Other</option>

      </select>
    </div>
  )
}

export default CategoryList
