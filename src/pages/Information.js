import { useEffect } from "react";
import { useState } from "react";

const Information = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://black-history-month-api.herokuapp.com/people`
        );

        const people = await res.json();

        setPeople(people);
      } catch (error) {
        console.error(error);
        setIsLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h3 className="text-center font-bold text-4xl mb-2">People</h3>
      <div className="header-underline"></div>
      {isLoading ? (
        <h2 className="text-center text-3xl mt-10">Loading...</h2>
      ) : (
        <section className="grid grid-cols-1 py-5 px-5 lg:px-20 xl:px-48 2xl:grid-cols-2 2xl:px-4">
          {people.map((person) => {
            const { id, name, description, dob, died, age, knownFor, image } =
              person;

            return (
              <article
                key={id}
                className="p-2 md:p-10 rounded-lg sm:grid sm:grid-cols-2 sm:gap-5"
              >
                <div>
                  <img
                    src={
                      image
                        ? image
                        : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                    }
                    alt={name}
                    className="w-full lg:w-96"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-3xl py-4">{name}</h4>
                  <div className="bg-green-500 w-10 h-1 mb-2"></div>
                  <p className="text-justify mb-3">{description}</p>
                  <ul className="mb-10">
                    <li>
                      <span className="font-bold">Date of birth: </span>
                      {dob}
                    </li>
                    <li>
                      <span className="font-bold">Died/Status: </span>
                      {died}
                    </li>
                    <li>
                      <span className="font-bold">Age: </span>
                      {age} years
                    </li>
                    <li>
                      <span className="font-bold">Known for: </span>
                      {knownFor}
                    </li>
                  </ul>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Information;
