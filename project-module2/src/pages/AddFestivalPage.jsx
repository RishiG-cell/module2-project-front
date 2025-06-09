import React from "react";

const AddFestivalPage = () => {
  return (
    <div>
      <form>
        <label>Your Festival !</label>
        <input
          type="text"
          name="name"
          value={""}
          onChange={(e) => e.target.value}
        />
      </form>
    </div>
  );
};

export default AddFestivalPage;
