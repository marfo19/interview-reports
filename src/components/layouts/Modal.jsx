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
                <div className="title">
                    <h1>{data.candidateName}</h1>
                    <button onClick={() => closeModal(false)} id="cancelBtn"> &nbsp; <b>X</b>  &nbsp;  </button>
                </div>
                <div className="body">
                    <div className="datas">
                        <p className="grey">
                            Company
                        </p>
                        <p className="bold">
                            {data.companyName}
                        </p>
                        <p className="grey">
                            Date
                        </p>
                        <p>
                            {convDate(data.interviewDate)}
                        </p>
                        <p className="grey">
                            Phase
                        </p>
                        <p className="bold">
                            {data.phase}
                        </p>
                        <p className="grey">
                            Status
                        </p>
                        <p className="bold">
                            {data.status}
                        </p>
                    
                </div>
                <div className="notes">
                    <p className="grey">
                        Note
                    </p>
                    <p>
                        {data.note}
                    </p>
                </div>
            </div>
            <div className="foot"></div>
        </div>
        </div >
    )
}

export default Modal;