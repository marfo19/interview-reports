import "./Modal.css";

function Modal({ closeModal, data, index }) {

    function convDate(interviewDate) {
        let dateOfInterview = [];
        let day = new Date(interviewDate).getDate();
              let month = new Date(interviewDate).getMonth() + 1;
              let year = new Date(interviewDate).getFullYear();
    
              dateOfInterview.push(`${day}.${month}.${year}`);
              return dateOfInterview;
      }
    
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}> X </button>
                
                <div className="body">
                    <div>
                    <h1>{data.candidateName}</h1> 
                    Company {data.companyName}
                    {/* Date {data.interviewDate}  */}
                    Date {convDate(data.interviewDate)}
                    Phase {data.phase}
                    Status {data.status}
                    Data {data.note}
                    </div>
                </div>
                <div className="foot"></div>
            </div>
        </div>
    )
}

export default Modal;