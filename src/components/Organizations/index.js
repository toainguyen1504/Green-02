import { useEffect, useState, useMemo } from "react";
import './style.css'
import List from "./List"
import Form from "./Form"

import ModalView from "./ModalView"

import { getUsers, createUser, deleteUser, editUser } from "../../apis/users"

const validate = (list, formData) => {
    if (formData.name === '' || formData.phone === '') {
        return false
    }

    //Create
    if (!formData.id) {
        const item = list.find((item) => {
            return (item.name === formData.name || item.phone === formData.phone)
        })
        return item ? false : true
    }

    //Edit
    if (formData.id) {
        const item = list.find((item) => {
            return item.id !== formData.id && (item.name === formData.name || item.phone === formData.phone)
        })
        return item ? false : true
    }


}
const MyTest = () => {

    const [selectedId, setSelectedId] = useState()

    const DEFAULT_FROM_DATA = { name: '', phone: '' }

    const [formData, setFormData] = useState(DEFAULT_FROM_DATA)
    const [list, setList] = useState([])

    const [resultList, setResultList] = useState([])
    const [search, setSearch] = useState('')

    const [isLoading, setIsLoading] = useState()

    //API
    //.then / .catch / .finally()
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setIsLoading(true)//
        getUsers().then((response) => {
            setList(response.data)
            setIsLoading(false)//
        }).catch((errol) => {
            console.log(errol)
            setIsLoading(false)//
        })

    }

    // Loc du lieu tu thanh tim kiem
    useEffect(() => {
        if (search) {
            const newResultList = list.filter((item) => {
                return item.name.includes(search) || item.phone.includes(search)
            })
            setResultList(newResultList)
        } else
            setResultList(list)
    }, [search, list])

    const onChange = (e) => {
        const value = e.target.value //value
        const key = e.target.name //mac dinh
        setFormData(
            {
                ...formData,
                [key]: value
            }
        )
    }

    const onSubmit = () => {
        const isValidate = validate(list, formData)

        if (isValidate) {

            //Create
            if (!formData.id) {
                createUser(formData)
                    .then((res) => {
                        fetchData()
                        setFormData(DEFAULT_FROM_DATA)
                    })
                    .catch((errol) => {
                        console.log(errol)
                    })
            }

            //Edit
            if (formData.id) {
                editUser(formData.id, formData)
                    .then((res) => {
                        fetchData()
                        setFormData(DEFAULT_FROM_DATA)
                    })
                    .catch((errol) => {
                        console.log(errol)
                    })
            }

            const element = document.querySelector('#modal-form-user')
            const modal = window.bootstrap.Modal.getOrCreateInstance(element);
            modal.hide();
        }
    }

    const onDelete = (id) => {

        deleteUser(id)
            .then((res) => {
                fetchData()
            })
            .catch((errol) => {
                console.log(errol)
            })
    }

    const onView = (id) => {
        setSelectedId(id)

        const element = document.querySelector('#modal-view-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element);
        modal.show();
    }

    const onCreate = () => {
        setFormData(DEFAULT_FROM_DATA)

        const element = document.querySelector('#modal-form-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element);
        modal.show();
    }

    const onEdit = (editData) => {
        setFormData(editData)

        const element = document.querySelector('#modal-form-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element);
        modal.show();
    }

    const onSearch = (e) => {
        const value = e.target.value //value
        setSearch(value)
    }

    return (
        <div className="myStyle">
            <header id="button-header" className="row">
                <div className="col-7"><h1>Organizations</h1></div>
                <div className="col-3">
                    <input className="form-control" value={search} placeholder="Type to search..." onChange={onSearch} />
                </div>
                <div id='btn-create' className="col-2">
                    <button type="button" className="btn btn-primary" onClick={onCreate}>
                        Create
                    </button>
                </div>
            </header>

            {isLoading && (
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}


            {!isLoading && (
                <div>
                    {resultList.length === 0 && (
                        <div> No data found </div>
                    )}
                    <List list={resultList} onView={onView} onDelete={onDelete} onEdit={onEdit} />
                </div>
            )}

            <Form formData={formData} onChange={onChange} onSubmit={onSubmit} />
            <ModalView id={selectedId} />
        </div>
    )
}

export default MyTest;