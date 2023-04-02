import { useParams } from 'react-router-dom'
import { useEffect, useState, React } from "react";

const CanditatesReport = () => {

  const { candId } = useParams();
  const [candidate, setCandidate] = useState([]);
  const [reports, setReports] = useState();

  useEffect(() => {
    const fetchCandidate = async () => {
      const response = await fetch(`http://localhost:3333/api/candidates/${candId}`);

      const responseData = await response.json();
      const candidate = {
        id: responseData.id,
        name: responseData.name,
        email: responseData.email.toLowerCase(),
        avatar: responseData.avatar,
        dob: responseData.birthday,
        education: responseData.education
      }
      setCandidate(candidate);
    };
    fetchCandidate();
  }, [candId]);

  useEffect(() => {
    fetch(`http://localhost:3333/api/reports`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setReports(data)
      })
  })

  // filtering data for selected candidate
  // let singleReport = reports.filter((report) => {
  //   if (parseInt(candId) === report.candidateId) {
  //     return report;
  //   }
  // });

  return (
    <div className="candidatesReport">
      <img src={candidate.avatar} alt='Place for avatar' width={300}></img>
      <div>
        <p>Name:</p>
        <p>{candidate.name}</p>
        <p>Email:</p>
        <p>{candidate.email}</p>
      </div>
      <div>
        <p>Date of birth:</p>
        <p>{candidate.dob}</p>
        <p>Education: </p>
        <p>{candidate.education}</p>
      </div>
      <div>
        <h1>Reports</h1>
        {/* <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Company</th>
                  <th scope="col">Interview Date</th>
                  <th scope="col" colSpan="2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {singleReport.map((item, index) => {

                  // getting data from singleReport
                  return (
                    <tr key={item.id}>
                      <td>{item.companyName}</td>
                      <td>{item.interviewDate}</td>
                      <td>{item.status}</td>
                      <th scope="row" width="10%">
                        
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table> */}
      </div>
    </div >
  );
};
export default CanditatesReport;
{/* <Modal // additional info for selected interview
                          data={item}
                          index={index}
                          interviewDate={interviewDate[index]}
                        /> */}