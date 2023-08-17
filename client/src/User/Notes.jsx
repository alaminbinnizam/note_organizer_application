import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useAuth } from '../Context/auth'
import Login from '../Components/Login'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Notes = () => {
  const [auth] = useAuth();
  const [result, setResult] = useState('');



  const mainProvider = async () => {
    const storage = await localStorage.getItem('auth');
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
                <h1 className="text-center">All Blogs</h1>
                <form className="d-flex col-sm-15 col-md-5  text-center ml-6" role="search">
                    <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
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
                   <Link key={p._id} to={`/user/update-note/${p._id}`}>
                   <button className='btn
                      btn-primary btn-sm ms-2 m-2'
                            // onClick={() => {handleUpdate }}
                            >Edit</button>
                   </Link>
                          <div className="card-name-price">
                           
                     

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
