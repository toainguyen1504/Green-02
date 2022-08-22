import { useState } from 'react';

const HomeTest2 = () => {
  // Cấu trúc chung
  const [object, setObject] = useState({ name: 'Nguyen Cong Toai', phone: '0963001504' })
  //const [A, setA] = useState({ string,number,boolearn,array,object})

  // ]
  return (
    //()=>{} <=> function A() {}
    <div>
      <h1>Render object</h1><br />
      <div id="style">
        <p>{object.name}</p>
        <p>{object.phone}</p>

      </div>

      <p>Nhân vào nút dưới đây đi pé!</p>

      <button onClick={() => {
        setObject(
          {...object, //... để đảm bảo dữ liệu, cụ thể là khi thực thi nó chỉ thay thế  các giá trị cần thay thế, và giữ dữ liệu cũ
          // hay áp dụng để giữ dữ liệu cũ và chỉ thay thế 1 vài dữ liệu
             name: 'Nguyen Van Tung', 
             phone: '0123456789' }
             )
      }}>Bấm tui đi</button>


    </div>
  );

  // const A=(a,b,c)=>{}
  // A()
}

export default HomeTest2;
