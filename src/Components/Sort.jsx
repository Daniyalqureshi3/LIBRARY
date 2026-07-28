import React from "react";
import { uselibrary } from "../context/LibraryContext";

function Sort() {
  const { state, dispatch } = uselibrary();

  return (
    <div>
      <select
        value={state.sort}
        onChange={(e) =>
          dispatch({
            type: "SET_SORT",
            payload: e.target.value,
          })
        }
      >
        <option value="A-Z">Title A-Z</option>
        <option value="Z-A">Title Z-A</option>

      </select>
    </div>
  );
}

export default Sort;