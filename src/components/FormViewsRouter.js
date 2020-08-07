import React, { useState } from "react";
import RaceQuestion from "./RaceQuestion";
import AgeQuestion from "./AgeQuestion";
import HospitalVisits from "./HospitalVisits";

export default ({ setUserDetails }) => {
  /**
   * This component provides cb to change which component is in view (which question),
   * and will hold all form state, providing cb to update values
   */
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    age: 28,
    race: null,
    hospitalVisits: 8,
  });

  const incrementPage = () => {
    if (page < 3) return setPage(page + 1);
  };
  const decrementPage = () => {
    if (page > 1) return setPage(page - 1);
  };

  /**
   * Questions in order:
   * - Age
   * - Race
   * - Prenatal visits
   */
  switch (page) {
    case 1:
      return (
        <AgeQuestion
          formData={formData}
          setFormData={setFormData}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
        />
      );
    case 2:
      return (
        <RaceQuestion
          formData={formData}
          setFormData={setFormData}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
        />
      );

    case 3:
      return (
        <HospitalVisits
          formData={formData}
          setFormData={setFormData}
          decrementPage={decrementPage}
          setUserDetails={setUserDetails}
        />
      );

    default:
      return <RaceQuestion />;
  }
};
