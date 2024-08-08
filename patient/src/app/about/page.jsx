import Layout from "../component/Layout";


function About() {
 
  return (
    <Layout>
    <div className="  min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-20 lg:pt-10">
  <div className="w-full lg:w-1/2 space-y-4 mb-2 lg:mb-0">
    <h1 className="text-4xl font-semibold text-center lg:text-left">About us</h1>
    <p className="text-justify lg:text-left">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
      nesciunt omnis praesentium. Id officia et similique commodi
      distinctio? Doloremque sapiente consectetur, dolore incidunt
      reprehenderit repellendus beatae! Suscipit voluptate enim nobis?
    </p>
    <p className="text-justify lg:text-left">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
      nesciunt omnis praesentium. Id officia et similique commodi
      distinctio? Doloremque sapiente consectetur, dolore incidunt
      reprehenderit repellendus beatae! Suscipit voluptate enim nobis?
    </p>
    <p className="text-justify lg:text-left">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
      nesciunt omnis praesentium. Id officia et similique commodi
      distinctio? Doloremque sapiente consectetur, dolore incidunt
      reprehenderit repellendus beatae! Suscipit voluptate enim nobis?
    </p>
  </div>
  <div className="w-full lg:w-1/2 mx-4 lg:mx-0 flex justify-center lg:justify-end">
    <img src="doctor2.png" className="rounded-lg max-w-full "></img>
  </div>
</div>
    </Layout>
  );
}

export default About;
