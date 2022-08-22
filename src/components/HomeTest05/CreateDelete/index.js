const CreateDelete = ({data, onDelete}) => {
    
    return (
        <div key={data}>

            <button onClick={() => { onDelete(data) }}>
                Delete
            </button>

        </div>
    )
}

export default CreateDelete;

