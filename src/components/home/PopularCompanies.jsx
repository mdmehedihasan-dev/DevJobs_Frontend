

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Creative it institute",
      location: "Momtaz Plaza (4th floor), House#7, Road#4 Opposite of Labaid Hospital Dhaka, 1205",
      openPositions: 10,
    },
    {
      id: 2,
      title: "Olloy",
      location: "Navana Newbury Place, 4/1/A Sobhanbag Rd, Dhaka-1205",
      openPositions: 5,
    },
    {
      id: 3,
      title: "Brain Station 23",
      location: "8th Floor, 2 Bir Uttam AK Khandakar Road, Dhaka 1212",
      openPositions: 20,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element,index) => {
            return (
              <div className="card" key={index}>
                <div className="content">
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;