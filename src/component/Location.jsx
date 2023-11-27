import React from "react";
function Location({ setLocation }) {
  const handelSubmit = (e) => {
    e.preventDefault();
    setLocation(e.target[0].value);
  };
  return (
    <>
      <div className="formm">
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            name="textValue"
            className="inputtext"
            placeholder="input your city"
          />
          <button type="submit" className="inputsearch">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default React.memo(Location);
