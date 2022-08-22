import User from './User'
import { useState } from 'react';

const HomeTest03 = () => {
  const [list, setList] = useState([])
  console.log(list, setList)

  return (
    <div>

      <button class="m20" onClick={() => {
        setList(
          [
            ...list,
            { id: Math.random(), name: 'Toai', phone: '0963001504'}
          ]
        )
      }}>
        Hiển thị dữ liệu người dùng
      </button>

      {list.map((user) => {

        return (
          <User key={user.id} data={user} list={list} setList={setList} title={"Hello CU"} />
        )
      })}

    </div>
  )
}

export default HomeTest03;
