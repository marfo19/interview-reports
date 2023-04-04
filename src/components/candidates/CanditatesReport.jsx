import { useParams } from 'react-router-dom'
import { useEffect, useState, React } from "react";
import Modal from "../layouts/Modal";
import "./CandidatesReport.css";
import { AiOutlineEye } from 'react-icons/ai';


const CanditatesReport = () => {

  const { candId } = useParams();
  const [candidate, setCandidate] = useState([]);
  const [reports, setReports] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const [item, setItem] = useState();

  useEffect(() => {
    const fetchCandidate = async () => {
      const response = await fetch(
        `http://localhost:3333/api/candidates/${candId}`
      );
      const responseData = await response.json();
      const candidate = {
        id: responseData.id,
        name: responseData.name,
        email: responseData.email.toLowerCase(),
        avatar: responseData.avatar,
        dob: responseData.birthday,
        education: responseData.education
      };
      setCandidate(candidate);
    };
    const fetchReports = async () => {
      const response = await fetch(`http://localhost:3333/api/reports`);
      const responseData = await response.json();
      setReports(responseData);
    };
    fetchReports();
    fetchCandidate();
  }, [candId]);

  function convDate(interviewDate) {
    let dateOfInterview = [];
    let day = new Date(interviewDate).getDate();
    let month = new Date(interviewDate).getMonth() + 1;
    let year = new Date(interviewDate).getFullYear();
    dateOfInterview.push(`${day}.${month}.${year}`);
    return dateOfInterview;
  }

  // filtering data for selected candidate
  let singleReport = reports.filter((report) => {
    if (parseInt(candId) === report.candidateId) {
      return report;
    }
  });

  const showModal = (item) => {
    setopenModal(true);
    setItem(item);
  };

  return (
    <div className="candidatesReport">
      {openModal && <Modal closeModal={setopenModal} data={item} />}
      <div className='candDatas'>
        <div className='dataBox'>
        <img src={candidate.avatar} alt='Place for avatar' width={300}></img>
        </div>
        <div className='dataBox'>
          <p  className="grey">Name</p>
          <p className="bold">{candidate.name}</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p className="grey">Email</p>
          <p className="bold">{candidate.email}</p>
        </div>
        <div className='dataBox'>
          <p className="grey">Date of birth</p>
          <p className="bold">{convDate(candidate.dob)}</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p className="grey">Education </p>
          <p className="bold">{candidate.education}</p>
        </div>
      </div>
      <div className="reports">
        <h1>Reports</h1>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Interview Date</th>
              <th colSpan="2">Status</th>
            </tr>
          </thead>
          <tbody>
            {singleReport.map((item, index) => {
              // getting data from singleReport
              return (
                <tr key={item.id}>
                  <td>{item.companyName}</td>
                  <td>{convDate(item.interviewDate)}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      className='openModalBtn'
                      onClick={() => {
                        showModal(item);
                      }}>
                      <AiOutlineEye />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div >
  );
};
export default CanditatesReport;