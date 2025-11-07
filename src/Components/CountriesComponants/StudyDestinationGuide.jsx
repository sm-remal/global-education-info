import React, { use, useEffect, useRef, useState } from "react";
import Container from "../../Container/Container";
import DestinationGuideCard from "./DestinationGuideCard";

const studyGuidePromise = fetch("/StudyGuide.json").then((res) => res.json());

const StudyDestinationGuide = () => {
  const modalRef = useRef();
  const studyGuide = use(studyGuidePromise);
  const studyGuideSlice = studyGuide.slice(0, 3);
  //  console.log(studyGuide.slice(0, 3));
    console.log(studyGuide);
    const studyGuideContents = studyGuide;

  const options = [
    { value: "United Kingdom", lg: "United Kingdom", sm: "UK" },
    { value: "Australia", lg: "Australia", sm: "Aus" },
    { value: "Canada", lg: "Canada", sm: "CA" },
    { value: "United States", lg: "United States", sm: "USA" },
    { value: "Germany", lg: "Germany", sm: "DE" },
    { value: "Netherlands", lg: "Netherlands", sm: "NL" },
    { value: "France", lg: "France", sm: "FR" },
    { value: "Japan", lg: "Japan", sm: "JP" },
  ];

    const [isSmall, setIsSmall] = useState(false);
    const [compare1, setCompare1] = useState(options[0].value);
    const [compare2, setCompare2] = useState(options[1].value);
     const [compareContent, setCompareContent] = useState([]);

  const handleResize = () => {
    setIsSmall(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    
    
    const handleLeftOption = (optionType) => {
        setCompare1(optionType);
        
    }
    const handleRightOption = (optionType) => {
        setCompare2(optionType);
        
     };
    
    
    const handleCompareCountry = () => {
    //   console.log(compare1, compare2);

      const centent1 = studyGuide.filter(
        (content) => content.country === compare1
      );
      const centent2 = studyGuideContents.filter(
        (content) => content.country === compare2
      );
      setCompareContent([...centent1, ...centent2]);
      
    };
  
    
  return (
    <div className="">
      <Container className={`px-5`}>
        <h1 className=" text-center text-xl md:text-3xl font-bold py-2">
          Study Destination Guide
        </h1>
        <p className="text-center text-gray-500">
          Learn about top study destinations and make informed decisions!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8 md:pt-15 pb-10">
          {studyGuideSlice.map((singleCountry, index) => (
            <DestinationGuideCard
              key={index}
              singleCountry={singleCountry}
            ></DestinationGuideCard>
          ))}
        </div>

        {/* Compare Countries PopUp */}
        <div className="py-10">
          {/* PopUp */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog ref={modalRef} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg text-center pb-4">
                Compare Countries
              </h3>
              <div className="flex justify-between gap-2 md:gap-5 items-center">
                <select
                  value={compare1}
                  onChange={(e) => handleLeftOption(e.target.value)}
                  className="w-full max-w-xs bg-white border border-gray-300 text-gray-700 
                 text-sm rounded-lg px-4 py-2 shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-blue-500 transition duration-200"
                >
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {isSmall ? opt.sm : opt.lg}
                    </option>
                  ))}
                </select>
                <select
                  value={compare2}
                  onChange={(e) => handleRightOption(e.target.value)}
                  className="w-full max-w-xs bg-white border border-gray-300 text-gray-700 
                 text-sm rounded-lg px-4 py-2 shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-blue-500 transition duration-200"
                >
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {isSmall ? opt.sm : opt.lg}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleCompareCountry}
                  className="border bg-[#151269] hover:bg-white hover:text-blue-800 text-white btn rounded-lg cursor-pointer text-xs"
                >
                  Compare
                </button>
              </div>

              {/* Content Show Table */}
              <div className=" flex flex-col md:flex-row gap-5 items-center w-full my-7">
                {compareContent.length > 0 ? <> <div className="overflow-x-auto shadow rounded-md w-full">
                  <h1 className="text-center py-2 font-semibold bg-[#22fdbb3b]">
                    {compare1}
                  </h1>
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Criteria</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr className="bg-base-200">
                        <td>Visa Type:</td>
                        <td>{compareContent[0]?.visa_type}</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <td>Tuition Fees Per Year: </td>
                        <td>{compareContent[0]?.tuition_fees_per_year}</td>
                      </tr>
                      {/* row 3 */}
                      <tr className="bg-base-200">
                        <td>Living Cost Per Month:</td>
                        <td>{compareContent[0]?.living_cost_per_month}</td>
                      </tr>
                      {/* row 4 */}
                      <tr>
                        <td>Part Time Work Per Week: </td>
                        <td>{compareContent[0]?.part_time_work}</td>
                      </tr>
                      {/* row 5 */}
                      <tr className="bg-base-200 h-50">
                        <td>Requirements: </td>
                        <td>
                          {compareContent[0]?.requirements.map(
                            (requirement, index) => (
                              <li key={index}>{requirement}</li>
                            )
                          )}
                        </td>
                      </tr>
                      {/* row 6 */}
                      <tr className="h-50">
                        <td>Benefits: </td>
                        <td>
                          {compareContent[0]?.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto shadow rounded-md w-full">
                  <h1 className="text-center py-2 font-semibold bg-[#223bfd27]">
                    {compare2}
                  </h1>
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Criteria</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr className="bg-base-200">
                        <td>Visa Type:</td>
                        <td>{compareContent[1]?.visa_type}</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <td>Tuition Fees Per Year: </td>
                        <td>{compareContent[1]?.tuition_fees_per_year}</td>
                      </tr>
                      {/* row 3 */}
                      <tr className="bg-base-200">
                        <td>Living Cost Per Month:</td>
                        <td>{compareContent[1]?.living_cost_per_month}</td>
                      </tr>
                      {/* row 4 */}
                      <tr>
                        <td>Part Time Work Per Week: </td>
                        <td>{compareContent[1]?.part_time_work}</td>
                      </tr>
                      {/* row 5 */}
                      <tr className="bg-base-200 h-50">
                        <td>Requirements: </td>
                        <td>
                          {compareContent[1]?.requirements.map(
                            (requirement, index) => (
                              <li key={index}>{requirement}</li>
                            )
                          )}
                        </td>
                      </tr>
                      {/* row 6 */}
                      <tr className="h-50">
                        <td>Benefits: </td>
                        <td>
                          {compareContent[1]?.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div></> : "" }
               
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn bg-teal-600 rounded-lg text-white">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          <div className="text-center">
            <button
              onClick={() => modalRef.current.showModal()}
              className="inline-block bg-linear-to-r from-indigo-600 to-purple-600 text-white text-base sm:text-lg font-medium px-4 md:px-8 py-2 md:py-3 rounded-full shadow-md hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 cursor-pointer"
            >
              Compare Countries
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StudyDestinationGuide;
