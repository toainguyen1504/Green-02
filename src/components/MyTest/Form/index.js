import { useMemo } from 'react';
import './styleForm.css'


const Form = ({ formData, onChange, onSubmit }) => {
    const disabled = useMemo(() => {
        return formData.name === '' || formData.phone === ''
    }, [formData])

    return (

        <div id="modal-form-user" className="modal">
            <div className="modal-dialog">
                <div className="modal-content">


                    <div className="modal-header">

                        <h5 className="modal-title">
                            {formData.id ? 'Edit data' : 'Insert data'}
                        </h5>

                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">

                        <div class="form-input">
                            <div class="mb-3">
                                <label for="form-name" class="form-label">Name</label>
                                <input type="text" id="form-name" name='name' class="form-control"
                                    placeholder="Nguyen Tran Duy Nhat..." value={formData.name} onChange={onChange} />
                            </div>

                            <div class="mb-3">
                                <label for="form-email" class="form-label">Phone</label>
                                <input type="email" id="form-name" class="form-control" name='phone'
                                    placeholder="096400xxx..." value={formData.phone} onChange={onChange} />
                            </div>
                        </div>
                   
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success" disabled={disabled} onClick={onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Form;