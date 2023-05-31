//@ts-nocheck
import './css/home.css'
import ProductForm from "./components/ProductForm";
import Products from "./components/Products";
import HOC from "./components/withAuth";
export default async function Home() {

  
  return (
    <main className='wrapper'>
      <section>


      <header className="text-center">
        <div className="col-12">

        <img src="images/banners/placeholder-banner.png" className="img-fluid"/>
        </div>
        
        </header>
      </section>
      
      <section>


      <h1 className="text-center my-5">PRODUCTS</h1>
      
      <>
      {/* @ts-expect-error Server Component */}
      <Products/> 
      </>
      </section>
    </main>
  );
}
