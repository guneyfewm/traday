"use client";
import { useState, useRef, FormEvent } from "react";
import getBase64 from "./base64Func";
import cookie  from "js-cookie";
import HOC from "./withAuth";
import "../css/ProductForm.css"


const ProductForm = () => {
  const [images, setImages] = useState<string[]>();
  const [mainPic, setMainPic] = useState("");
  const [active, setActive] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const getImages = async(e:React.ChangeEvent<HTMLInputElement>) => {
    const base64Array:string[] = [""]

    for (let i = 0; i < e.target.files!.length; i++)
    {
    const base64 = await getBase64(e.target.files![i])
    if (base64Array[0] == ""){ //deletes line 17 empty element

      base64Array.pop()
    }
    base64Array.push(base64 as string)
    
      
    }
    setImages(base64Array)
  }
  const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const get = cookie.get('token')
    console.log(get)
    const response = await fetch('http://localhost:4000/product',{
      method:"POST",
      body:JSON.stringify({
        title:titleRef.current!.value,
        desc:descRef.current!.value,
        price:priceRef.current!.value,
        mainPicture:mainPic,
        pictures:images
      }),
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.get('token')}`
      }
  })}
  return (
    <div>
      <button onClick={() => setActive(!active)}> Create New Product</button>
      {active && (
        <form className="container col-5" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titlee">Product Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              ref={titleRef}
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea
              className="form-control"
              id="desc"
              ref={descRef}
              placeholder="Enter detailed description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              ref={priceRef}
              placeholder="Enter price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Cover Photo</label>
            <input
              type="file"
              className="form-control"
              id="mainPicture"
              placeholder="Enter price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Photos</label>
            <input
              type="file"
              multiple
              onChange={getImages}
              className="form-control"
              id="mainPicture"
              placeholder="Enter price"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-center bg-dark">

          {images && images.map((item)=>(<div onClick={()=>setMainPic(item) }  className="col-3 bg-danger m-2 choosePhoto">
            <img src={item} key={item} alt="" className="img-fluid" />
          </div>))}
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="public" />
            <label className="form-check-label" htmlFor="public">
              Public
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default HOC(ProductForm);
