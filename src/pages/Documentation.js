const Documentation = () => {
  return (
    <>
      <h2 className="text-4xl text-center font-bold mb-2">Documentation</h2>
      <div className="header-underline"></div>

      <section className="px-5 md:max-w-xl md:mx-auto lg:max-w-3xl">
        <h3 className="font-bold text-2xl mt-5 mb-2">What is this API?</h3>
        <p>
          This API is a list of 110 people (more will be added) of prominent
          black people who were instrumental in the fight for freedom,
          apartheid, and who did extraordinary things.
        </p>

        <h3 className="font-bold text-2xl mt-5 mb-2">Why this API?</h3>
        <p>
          To honour the people who fought for freedom, to remember the fathers
          and mothers, to remind people of their poems, to show the art they
          inspire, to promote their dreams and to bring to fruition their plans
          of a united Africa.
        </p>

        <h3 className="font-bold text-2xl mt-5 mb-2">
          Contributing to this API
        </h3>
        <p>
          I will add a CONTRIBUTING.md file to the GitHub repository, check back
          for updates.
        </p>

        <h3 className="font-bold text-2xl mt-5 mb-2">
          About this API: Cloning and running the API
        </h3>
        <p className="my-5">
          1. Clone the repository using <pre>`git clone *LINK TO REPO*`</pre>
          or download the .zip file and extract it.
        </p>
        <p className="my-5">
          2. Install <pre className="inline">json-server</pre> globally using{" "}
          <pre className="inline">`npm install json-server -g`</pre>
        </p>
        <p className="my-5">
          3. Run the API using the command{" "}
          <pre className="inline">`json-server --watch db.json`</pre>
        </p>
      </section>
    </>
  );
};

export default Documentation;
