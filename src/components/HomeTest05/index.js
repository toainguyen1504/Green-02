import { useState } from "react"
import CreateInput from "./CreateInput"
import CreateDelete from "./CreateDelete"

const HomeTest05 = () => {

    const [list, setList] = useState([])
    const [name, setName] = useState('')

    // Lấy dữ liệu trong thẻ input
    const onChange = (e) => {
        const newValue = e.target.value
        setName(newValue)
        // có thể viết tắt thành setName(e.target.value)
    }

    const onCreate = () => {

        // Cách 1: dùng filter

        // if (name !== '') {
        //     const uniqueList = list.filter((item) => {
        //         return item === name
        //     })

        //     if (uniqueList.length === 0) {
        //         setList([
        //             ...list,
        //             name
        //         ])
        //         setName('')
        //     }
        // }

        //Cách 2: Dùng Find
        if (name !== '') {
            const unique = list.find((item) => {
                return item === name
            })

            if (!unique) {
                
                setList([
                    ...list,
                    name
                ])
                setName('')
            }
        }
    }

    const onDelete = (str) => {
        const newList = list.filter((a) => {
            return a !== str;
        })

        setList(newList)
    }

    const onLimit = () => {

    }

    return (
        <div>

            <CreateInput name={name} onCreate={onCreate} onChange={onChange} />

            {list.map((item) => {

                // if (onChange() !== item || onChange() !== '')
                return (
                    <div key={item} class="myStyle m20">
                        {item}
                        {<CreateDelete data={item} onDelete={onDelete} />}
                    </div>
                )
            })}


        </div>
    )
}

export default HomeTest05;