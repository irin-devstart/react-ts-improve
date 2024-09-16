import React from "react";

const Tools = () => {
  //Membuat Unique ID
  const uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    return head + tail;
  };

  // Membuat Unique ID
  const uid2 = () => {
    const random = Math.random(); // 0.19788887666
    const alfanumeric = random.toString(32); // 0.1d9f7s8f8887io
    alfanumeric.slice(2); //1d9f7s8f8887io
    //Ini lah short way
    let id = Math.random().toString(32).slice(2); //i0098766po8p
  };

  // Cara mengambil secondiff di timestap
  const getSecondsDiff = (timeStamp: number) => (Date.now() - timeStamp) / 1000;

  // tentang date
  const dateAbout = () => {
    Date.now(); //123456789

    new Date(123456789);
  };

  //Untuk Menggetarkan for 300 milisicons
  const vibrate = () => {
    window.navigator.vibrate(300);
  };

  // Kesalahan karna tidak diset value defaul
  const passingDefault = () => {
    function sum(x = 0, y = 0) {
      console.log(x + y);
    }
    sum(); //Output 0,
    sum(5, 5); //Output 10
  };

  return <div>Tools</div>;
};

export default Tools;
