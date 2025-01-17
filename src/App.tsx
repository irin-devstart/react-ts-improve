import React, { useState } from "react";

type Users = {
  id: number;
  name: string;
  age: number;
};
const App = () => {
  const [usersResource, setUsersResource] = useState<Users[]>([]);
  //Untuk menambah value
  const handleAdd = () => {
    const User: Users = {
      id: 1,
      name: "Irin",
      age: 26,
    };
    setUsersResource([...usersResource, User]);
    //cara ke 2
    setUsersResource(usersResource.concat(User));
  };
  //Untuk menampilkan value
  const handleDisplay = () => {
    usersResource.map((value) => <h1>{value.name}</h1>);
  };

  //Untuk mengubah value
  const handleUpdate = () => {};

  //Untuk memvalidasi jika ada yang true value
  const handleSome = () => {
    return usersResource.some((value) => value.age > 18);
  };
  //Untuk memvalidasi untuk semua yang true value
  const handleEvery = () => {
    return usersResource.every((value) => value.age > 18);
  };

  //Menambahkan Umur user
  const handleCount = () => {
    const total = usersResource
      .map((value) => value.age)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
    return total;
  };

  //Untuk mencari value
  const handleSearch = () => {
    const keyword = "irin";
    //ini cara include lebih akurat
    const user = usersResource.filter((value) =>
      value.name.toLowerCase().includes(keyword.toLowerCase())
    );

    //ini cara filter
    const userTemp = usersResource.filter(
      (value) => value.name.toLowerCase() === keyword.toLowerCase()
    );
  };

  //Untuk menghapus value
  const handleRemove = () => {
    const id = 1;
    //hapus sesuai ID nya
    const data = usersResource.filter((value) => value.id !== id);
    setUsersResource(data);
  };

  //Menghapus data sama (duplicate)
  const handleDuplicate = () => {
    const uniqueArry = [...new Set(usersResource.map((val) => val.age))];
    console.log(uniqueArry);
  };

  return <div>App</div>;
};

export default App;
