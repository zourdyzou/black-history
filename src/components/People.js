import { useEffect, useState } from "react";

const People = () => {
  const [people, setPeople] = useState([]);

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
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/*  Add Loading Animation */}
      <h2 className="text-center text-4xl mt-10">People</h2>
      <div className="bg-green-500 h-1 w-20 mx-auto my-2 mb-5"></div>

      <section className="mt-10 px-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5 xl:px-10">
        {people.map((person) => {
          const { id, name, image } = person;

          return (
            <article className="relative" key={id}>
              <img
                src={
                  image
                    ? image
                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                className="w-full sm:h-96 md:h-80"
                alt={name}
              />
              <h4 className="absolute bottom-0 right-0 text-2xl uppercase bg-black px-2 md:text-xl lg:text-base">
                {name}
              </h4>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default People;
