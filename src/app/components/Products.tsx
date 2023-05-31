import React from "react";

const Products = async () => {
  interface product {
    _id: String;
    user: String;
    title: String;
    desc: String;
    mainPicture: String;
    price: Number;
    pictures: [String];
  }

  const API: product[] = await fetchAPI();
  async function fetchAPI(): Promise<product[]> {
    const res = await fetch("http://localhost:4000/product", {
      cache: "no-store",
    });
    const resjson = await res.json();
    return resjson.results as product[]; //.results is what we get from the api!!!!
  }
  return (
    <div>
      <div className="d-flex flex-wrap text-center justify-content-around">
        {API.map((item) => (
          <div key={item._id.toString()} className="col-4 bg-light m-2" style={{height:"350px", width:"300px"}}>
            <h3>
              {item.title}
              </h3>
              <img src={item.mainPicture as string} className="img-fluid p-3" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
