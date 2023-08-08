import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import UserMenu from './UserMenu';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Select } from 'antd';
const { Option } = Select;


const CreateNote = () => {
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [deviceSerialNum, setDeviceSerialNum] = useState("");
    // const [employee, setEmployee] = useState("");
    const [category, setCategory] = useState("");
    // const [status, setStatus] = useState("");

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData();
            productData.append("title", title)
            productData.append("content", content)
            productData.append("category", category)
            const { data } = await axios.post('/api/v1/note/create-note', productData);
            if (data?.success) {
                toast.success(`${title} is Created`);
                // getAllDevice()
                setTitle("")
                setContent("")
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }


    //get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/getall-category');
            if (data?.success) {
                setCategories(data.category);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong while getting categories');
        }
    }


 

    useEffect(() => {
        getAllCategory()
    }, [])

    return (
        <Layout title={'Create Device'}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Create Note</h1>
                        <div className="m-1 w-75" >
                            <Select bordered={false}
                                placeholder="Select a category"
                                size='large' showSearch
                                className='form-select mb-3' onChange={(value) => {
                                    setCategory(value);
                                }}>{categories?.map(c => (
                                    <Option key={c._id} value={c?._id}>{c?.categoryname}</Option>
                                ))}
                            </Select>
                            {/* <Select bordered={false}
                                placeholder="Select a employee"
                                size='large' showSearch
                                className='form-select mb-3' onChange={(value) => {
                                    setEmployee(value);
                                }}>{employees?.map(c => (
                                    <Option key={c._id} value={c?._id}>{c?.name}</Option>
                                ))}
                            </Select> */}
                            <div className="mb-3">
                                <input type="text" value={title} placeholder='Write a Title' className='form-controll' onChange={(e) => {
                                    setTitle(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <textarea type="text"  rows="10" cols="90" value={content} placeholder='Write Whole Content' className='form-controll' onChange={(e) => {
                                    setContent(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <button className='btn btn-primary' onClick={handleCreate}>Create Device</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateNote
