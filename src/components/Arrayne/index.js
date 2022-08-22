import { useState } from 'react';

const Arrayne = () => {
  const [object1, setObject] = useState([])
  console.log(object1, setObject)

  return (
    <div>

      <h1>Render array</h1><br />

      {object1.map(
        //Khi su dung map thi can co 'key'
      // CÓ thể bỏ index(nên bỏ, sử dụng khi lười)
      // có thể làm như sau: (obj)=>{return(
      //<div key={obj}> </div> Nếu là d. tượng thì key{obj.id}
      //)}


      //CCODE CÓ INDEX
        // (obj, index) => {
        //   return (
        //     <div key={index}>
        //       <div>{obj.name}</div>
        //       <div>{obj.phone}</div>
        //       <button onClick={() => {
        //         const newObjects = object1.filter((del) => {
        //           return (del.id !== obj.id)
        //         })

        //         setObject(newObjects)
        //       }}>Delete</button>
        //     </div>
        //   )
        // })


        // Nên viết lại như sau
        (obj) => {
          return (
            <div key={obj.id}>

              <div>{obj.name}</div>
              <div>{obj.phone}</div>

              <button onClick={() => {
                const newObject1 = object1.filter((del) => {
                  return del.id !== obj.id
                })

                setObject(newObject1)
              }}>Delete</button>

            </div>
          )
        })
      }

      <button onClick={() => {
        setObject(
          [
            ...object1,
            { id: Math.random(), name: 'Toai', phone: '0963001504' }
          ]
        )
      }}> Bấm tui đi</button>


    </div>
  );

}

export default Arrayne;
