import React from 'react';

const DestinationGuideCard = ({ singleCountry }) => {
  
  const {
    country,
    living_cost_per_month,
    part_time_work,
    benefits,
    requirements,
    tuition_fees_per_year,
    visa_type,
  } = singleCountry;

  return (
    <div>
      <div className="card bg-base-100 card-md h-[550px] shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-2xl">{country}</h2>
          <p className="text-base font-semibold">
            Visa: <span className="text-sm font-normal">{visa_type}</span>
          </p>
          <p className="text-base font-semibold">
            Tuition Fees Per Year:{" "}
            <span className="text-sm font-normal">{tuition_fees_per_year}</span>
          </p>
          <p className="text-base font-semibold">
            Living Cost Per Month:{" "}
            <span className="text-sm font-normal">{living_cost_per_month}</span>
          </p>
          <p className="text-base font-semibold">
            Part Time Work Per Week:{" "}
            <span className="text-sm font-normal">{part_time_work}</span>
          </p>
          <p className="text-base font-semibold">
            Requirements:{" "}
            <span className="text-sm font-normal">
              {requirements.map((requirement) => (
                <span className="block">{requirement}</span>
              ))}
            </span>
          </p>
          <p className="text-base font-semibold">
            Benefits:{" "}
            <span className="text-sm font-normal">
              {benefits.map((benefit) => (
                <span className="block">{benefit}</span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationGuideCard;