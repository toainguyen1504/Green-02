import './styleList.css'

const List = ({ list, onView, onEdit, onDelete }) => {
    return (
        <div className='row'>
            {list.map((item) => {
                return (
                    <div key={item.id} className='col-4'>

                        <div className='user'>
                            <main className='user-footer'>
                                <div className="content"><p><strong>Name: </strong>{item.name}</p></div>
                                <div className="content"><p><strong>Phone: </strong>{item.phone} </p></div>
                            </main>
                            <footer className='user-footer'>
                                <button type="button" className="btn btn-danger" onClick={() => { onDelete(item.id) }}>Delete</button>

                                <button type="button" className="btn btn-dark" onClick={() => { onEdit(item) }}>Edit</button>

                                <button type="button" className="btn btn-secondary" onClick={() => { onView(item.id) }}>View</button>
                            </footer>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default List