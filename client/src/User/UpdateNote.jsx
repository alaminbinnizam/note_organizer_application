import React, { useEffect, useState } from 'react'
import UserMenu from './UserMenu';
import { Select } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Option } from 'antd/es/mentions';
import Layout from '../Layout/Layout'


const UpdateNote = () => {

    const params = useParams();
    const navigate = useNavigate()

    //all state
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");

    //get single product
    const getSingleNote = async () => {
        try {
            const { data } = await axios.get(`/api/v1/note/getsingle-note/${params.id}`);
            setTitle(data.notes.title)
            setId(data.notes._id)
            setContent(data.notes.content)
            setCategory(data.product.category._id)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleNote();
        //eslint-disable-next-line
    }, [])



    //get all category
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/getall-category');
            if (data?.success) {
                setCategories(data?.category)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong in getting category');
        }
    }

    useEffect(() => {
        getAllCategory();
    }, []);

    // update product function
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const noteData = new FormData();
            noteData.append("title", title)
            noteData.append("content", content)
            noteData.append("category", category)

            const { data } = await axios.put(`/api/v1/not/update-note/${id}`, noteData);
            if (data?.success) {
                toast.success('Note Updated Successfully');
                navigate("/user/notes")
            } else {
                toast.error(data?.message)
            }

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }

    const handleDelete = async () => {
        try {
            let answer = window.prompt('Are you sure wnt to delete this note ?')
            if (!answer) return;
            const { data } = await axios.delete(`/api/v1/note/delete-note/${id}`);
            if (data?.success) {
                toast.success('Note Deleted Successfully');
                navigate("/user/notes")
            } else {
                toast.error(data?.message)
            }

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }
    return (
        <>
            <Layout title={'update product'}>
                <div className="container-fluid m-3 p-3">
                    <div className="row">
                        <div className="col-md-3">
                            <UserMenu />
                        </div>
                        <div className="col-md-9">
                            <h1>Update Blogs</h1>
                           
                            <div className="m-1 w-75">

                                <Select bordered={false}
                                    placeholder='Select a category'
                                    size='large'
                                    showSearch className='form-select mb-3' onChange={(value) => {
                                        setCategory(value);
                                    }} value={category}>
                                    {categories?.map((c) => (
                                        <Option key={c._id} value={c._id}>
                                            {c.categoryname}
                                        </Option>
                                    ))}
                                </Select>

                                <div className="mb-3">
                                    <input type="text" value={title}
                                        placeholder='Write a title'
                                        className='form-control'
                                        onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        type="text"
                                        value={content}
                                        placeholder="write a description"
                                        className="form-control"
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <button className="btn btn-primary" onClick={handleUpdate}>
                                        UPDATE BLOG
                                    </button>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-danger" onClick={handleDelete}>
                                        DELETE BLOG
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default UpdateNote
