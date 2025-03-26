import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CandidateTable from "../../Helpers/CandidatesTable";
import { getCandidates } from "../../Helpers/getData";
export default function CandidateDetails() {
  const dispatch = useDispatch();

  const GradBVA = useSelector((state) => state.GradBVA.GradBVA);
  const candidatesList = useSelector(
    (state) => state.candidates.candidatesList
  );

  useEffect(() => {
    getCandidates(dispatch, GradBVA);
  }, [dispatch, GradBVA]);

  return (
    <div>
      <CandidateTable candidatesList={candidatesList} />
    </div>
  );
}
