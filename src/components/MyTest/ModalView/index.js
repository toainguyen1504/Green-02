import { useEffect, useState } from "react"
import { getUsers, getUser } from "../../../apis/users"

const ModalView = ({ id }) => {
    const [data, setData] = useState({})

    useEffect(() => {
        if (id) {
            getUser(id)
                .then((res) => {
                    setData(res.data)
                })
                .catch((errol) => { console.log(errol) })
        }
    }, [id])

    return (

        <div id="modal-view-user" className="modal">
            <div className="modal-dialog">
                <div className="modal-content">


                    <div className="modal-header">
                        <h5 className="modal-title">View User</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">

                        <div class="form-input">
                            <div class="mb-3">
                                Name: {data.name}
                            </div>

                            <div class="mb-3">
                                Phone: {data.phone}
                            </div>

                        </div>
                   
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ModalView;