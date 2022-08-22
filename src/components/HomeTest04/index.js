import { useState } from "react";
import User from "./User";

const HomeTest04 = () => {
    const [list, setList] = useState([])

    const onCreate = () => {
        setList(
            [
                ...list,
                { id: Math.random(), name: 'Toai', phone: '0963001504' }
            ])
    }

    const onDelete = (id) => {
        const newList = list.filter((item) => {
            return item.id !== id;
        })
        
        setList(newList)
    }

    return (
        <div>

            <button onClick={onCreate}>Click</button>

            {list.map((user) => {
                return (
                    <User key={user.id} data={user} onDelete={onDelete} />
                )
            })}

        </div >
    )
}


export default HomeTest04;