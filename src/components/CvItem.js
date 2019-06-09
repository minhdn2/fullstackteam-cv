import React, { Component } from 'react';
import EmploymentHistory from './EmploymentHistory';
import Education from './Education';

class CvItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cvItems: props.cvItems
        };
    }
    render() {
        const cvItemList = this.state.cvItems.map(cv => {
            return (
                <section className="container section scrollspy" id={cv.id} key={cv.id}>
                    <div className="row">
                        <div className="col s12 l12 userName">
                            <h2>{cv.userName}</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 l4">
                            <img src={cv.imgSrc} alt="" className="responsive-img materialboxed" />
                        </div>

                        <div className="col s12 l8">
                            <h4><strong>ABOUT ME</strong></h4>
                            {(() => {
                                return cv.aboutMe.summary !== "" ? (
                                    <span>
                                        <h5>Summary</h5>
                                        {cv.aboutMe.summary.split('\n').map(x => {
                                            return (<p key={x}>{x}</p>)
                                        })}
                                    </span>
                                ) : null;
                            })()}
                            {(() => {
                                return cv.aboutMe.objective !== "" ? (
                                    <span>
                                        <h5>Objective</h5>
                                        {cv.aboutMe.objective.split('\n').map(x => {
                                            return (<p key={x}>{x}</p>)
                                        })}
                                    </span>
                                ) : null;
                            })()}
                            <div className="row">
                                <div className="col s12 l6">
                                    <h5>Personal Details</h5>
                                    <p>
                                        <span className="h7">Full name:</span> {cv.aboutMe.personalDetails.fullName}<br />
                                        <span className="h7">Alias:</span> {cv.aboutMe.personalDetails.alias}<br />
                                        <span className="h7">Job title:</span> {cv.aboutMe.personalDetails.jobTitle}<br />
                                        <span className="h7">Marital status:</span> {cv.aboutMe.personalDetails.maritalStatus}<br />
                                        <span className="h7">Email:</span> {cv.aboutMe.personalDetails.email}<br />
                                        <span className="h7">Skype ID:</span> {cv.aboutMe.personalDetails.skypeId}<br />
                                        <span className="h7">Mobile:</span> {cv.aboutMe.personalDetails.mobile}<br />
                                    </p>
                                </div>
                                <div className="col s12 l6">
                                    {(() => {
                                        return cv.aboutMe.interest !== "" ? (
                                            <span key={cv.aboutMe.interest}>
                                                <h5>Interests</h5>
                                                {cv.aboutMe.interest.split('\n').map(x => {
                                                    return (<span key={x}>{x}<br /></span>)
                                                })}
                                            </span>
                                        ) : null;
                                    })()}

                                </div>
                            </div>
                            <h4><strong>SKILLS</strong></h4>
                            <div className="row">
                                <div className="col s12 l4">
                                    <h6>Programming Languages</h6>
                                    {cv.aboutMe.skills.programmingLanguages.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })}
                                    <h6>Frameworks & Platforms</h6>
                                    {cv.aboutMe.skills.frameworksPlatforms.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })}
                                    <h6>Database</h6>
                                    {cv.aboutMe.skills.database.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })}
                                </div>
                                <div className="col s12 l4">
                                    <h6>Version Control</h6>
                                    {cv.aboutMe.skills.versionControl.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })}
                                    <h6>IDE</h6>
                                    {cv.aboutMe.skills.ide.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })}
                                    <h6>Foreign Language</h6>
                                    {cv.aboutMe.skills.foreignLanguage.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })}
                                </div>
                                <div className="col s12 l4">
                                    <h6>Knowledge / Other Skills</h6>
                                    {cv.aboutMe.skills.knowledge.split('\n').map(x => {
                                        return (<span key={x}>{x}<br /></span>)
                                    })}
                                </div>
                            </div>
                            <br />
                            <h4><strong>EXPERIENCES</strong></h4>
                            {(() => {
                                return cv.experiences.careerSummary !== "" ? (
                                    <span>
                                        <h5>Career Summary</h5>
                                        {cv.experiences.careerSummary.split('\n').map(x => {
                                            return (<span key={x}>{x}<br /></span>)
                                        })}
                                    </span>
                                ) : null;
                            })()}
                            <br />
                            <h5>Employment History - Work Experiences</h5>
                            <EmploymentHistory employmentHistories={cv.experiences.employmentHistory} />

                            <br />
                            <h4><strong>EDUCATION</strong></h4>
                            <Education educations={cv.education} />
                        </div>
                    </div>
                </section>
            )
        })
        return (
            <div>{cvItemList}</div>
        );
    }
}

export default CvItem