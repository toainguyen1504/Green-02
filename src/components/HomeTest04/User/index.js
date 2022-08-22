const User = ({ data, onDelete }) => {

    return (
        <div key={data.id} class="myStyle m20">
            <p>{data.name}</p>
            <p>{data.phone}</p>

            <button onClick={() => { onDelete(data.id) }}>
                Delete
            </button>

        </div>
    )
}

export default User;