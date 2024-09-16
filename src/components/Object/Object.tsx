import React from "react";

const Object = () => {
  //Cara mengantikan variabel Objek ke biasa waktu dipanggil
  const changeVariabel = () => {
    const user = {
      id: 1,
      name: "Irin",
      age: 23,
    };
    const { id, name, age } = user;
    console.log(name);
  };

  return <div>Object</div>;
};

export default Object;
