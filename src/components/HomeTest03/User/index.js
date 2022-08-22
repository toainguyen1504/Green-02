// import HomeTest03 from "..";

//Tao components
const User = ({ data, list, setList, title }) => {

  console.log(title) // Test thử có nhận dữ liệu title ?

  return (
    <div key={data.id}>

      <div class="myStyle m20">{data.name}</div>
      <div class="myStyle m20">{data.phone}</div>

      <button class="m20" onClick={() => {
        const newData = list.filter((a) => {
          return a.id !== data.id
        })
        setList(newData)

      }}>Delete</button>

      {/* Insert */}



    </div >
  )

}


export default User;
