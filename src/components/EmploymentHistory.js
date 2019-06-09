import React from 'react';

const EmploymentHistory = ({ employmentHistories }) => {
    const historyList = employmentHistories.map(emp => {
        var desClass = "col s12 l12";
        var resClass = "col s12 l12";
        var techClass = "col s12 l12";

        if ((emp.description !== "" && emp.responsibility !== "") || (emp.description !== "" && emp.technologies !== "") || (emp.responsibility !== "" && emp.technologies !== "")) {
            desClass = "col s12 l6"
            resClass = "col s12 l6"
            techClass = "col s12 l6";
        }

        if (emp.description !== "" && emp.responsibility !== "" && emp.technologies !== "")
            techClass = "col s12 l12";

        return (
            <div key={emp.id}>
                <div className="col s12 l12 title-divide">
                    <h6><strong>{emp.title}</strong></h6>
                </div>
                <br />
                <p>
                    {(() => {
                        return emp.position !== "" ? (
                            <span key={emp.position}><span className="h7">Position:</span> {emp.position}<br /></span>
                        ) : null;
                    })()}
                    {(() => {
                        return emp.productLink !== "" ? (
                            <span key={emp.productLink}><span className="h7">Product Link:</span> {emp.productLink}<br /></span>
                        ) : null;
                    })()}
                    {(() => {
                        return emp.duration !== "" ? (
                            <span key={emp.duration}><span className="h7">Duration:</span> {emp.duration}<br /></span>
                        ) : null;
                    })()}
                    {(() => {
                        return emp.company !== "" ? (
                            <span key={emp.company}><span className="h7">Company:</span> {emp.company}<br /></span>
                        ) : null;
                    })()}
                    {(() => {
                        return emp.teamSize !== "" ? (
                            <span key={emp.teamSize}><span className="h7">Team Size:</span> {emp.teamSize}<br /></span>
                        ) : null;
                    })()}
                </p>
                <div className="row">
                    {(() => {
                        return emp.description !== "" ? (
                            <div className={desClass}>
                                <h6>Description</h6>
                                <p>
                                    {emp.description.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })}
                                </p>
                            </div>
                        ) : null;
                    })()}
                    {(() => {
                        return emp.responsibility !== "" ? (
                            <div className={resClass}>
                                <h6>Responsibility</h6>
                                <p>
                                    {emp.responsibility.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })}
                                </p>
                            </div>
                        ) : null;
                    })()}
                    {(() => {
                        return emp.technologies !== "" ? (
                            <div className={techClass}>
                                <h6>Technologies</h6>
                                {
                                    emp.technologies.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })
                                }
                            </div>
                        ) : null;
                    })()}
                </div>

            </div>
        )
    })
    return (
        <div>{historyList}</div>
    )
}

export default EmploymentHistory
