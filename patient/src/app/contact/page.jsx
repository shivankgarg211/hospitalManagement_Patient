import Link from "next/link";
import Layout from "../component/Layout";

function page() {
  return (
    <Layout>
      <section className="doctor_section py-16">
  <div className="container mx-auto">
    <div className="heading_container text-center mb-10">
      <h2 className="text-4xl font-semibold">Our Doctors</h2>
      <p className="col-md-10 mx-auto px-0 text-lg mt-4">
        Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.
      </p>
    </div>
    <div className="flex flex-wrap justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="box bg-white p-6 rounded-lg shadow-lg">
          <div className="img-box mb-4">
            <img src="d3.jpg" alt="" className="w-full rounded-lg" />
          </div>
          <div className="detail-box text-center">
          
            <h5 className="text-xl font-semibold">Elina Josh</h5>
            <h6 className="text-gray-600">Doctor</h6>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="box bg-white p-6 rounded-lg shadow-lg">
          <div className="img-box mb-4">
            <img src="d2.jpg" alt="" className="w-full rounded-lg" />
          </div>
          <div className="detail-box text-center">
        
            <h5 className="text-xl font-semibold">Adam View</h5>
            <h6 className="text-gray-600">Doctor</h6>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
        <div className="box bg-white p-6 rounded-lg shadow-lg">
          <div className="img-box mb-4">
            <img src="d1.jpg" alt="" className="w-full rounded-lg" />
          </div>
          <div className="detail-box text-center">
           
            <h5 className="text-xl font-semibold">Mia Mike</h5>
            <h6 className="text-gray-600">Doctor</h6>
          </div>
        </div>
      </div>
    </div>
    <div className="btn-box text-center mt-8">
      <Link href="" className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-md transition duration-300 ease-in-out">
        View All
      </Link>
    </div>
  </div>
</section>
    </Layout>
  );
}

export default page;
