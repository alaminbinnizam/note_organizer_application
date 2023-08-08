import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useAuth } from '../Context/auth'
import Login from '../Components/Login'
import axios from 'axios'
const Notes = () => {
  const [auth] = useAuth();
  const [result, setResult] = useState('');

  

  const mainProvider = async () => {
    const  storage  = await localStorage.getItem('auth');
    const convert = await JSON.parse(storage);
    const { data } = await axios.get(`/api/v1/auth/main-provider/${convert?.user?._id}`);
    await setResult(data);
    
  }

 

  useEffect(() => {
    mainProvider();
  }, [])
  return (
    <>
      {
        !auth?.user ? (
          <>
            <Login />
          </>
        ) : (
          <>
            <Layout title={'Home Page'}>
            <div className="">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {result?.main?.notes?.map((p) => (
              <div className="card m-2" key={p._id}>
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">Title: {p?.title}</h5>
                    <h5 className="card-title card-price">
                    <p className="card-text">Content: {p?.content}</p>
                    </h5>
                  </div>
                  {/* <p className="card-text ">
                    {p.deviceSpecification.substring(0, 60)}...
                  </p> */}
                  <div className="card-name-price">
                  {/* <button className='btn
                      btn-primary btn-sm ms-2 m-2'
                          onClick={() => {handleUpdate }}
                        >Edit</button>
                        <button className='btn
                      btn-danger btn-sm ms-2'
                          onClick={() => { handleDelete }}
                        >Delete</button> */}
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
              <pre>{JSON.stringify(result?.main?.notes, null, 4)}</pre>
            </Layout>

          </>
        )
      }


    </>
  )
}

export default Notes
