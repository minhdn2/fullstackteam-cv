import React from 'react';

const Education = ({ educations }) => {
    const educationList = educations.map(edu => {
        return (
            <div key={edu.id}>
                <h6>{edu.title}</h6>
                {(() => {
                    return edu.description !== "" ? (
                        edu.description.split('\n').map(x => {
                            return (<span key={Math.random()}>{x}<br /></span>)
                        })
                    ) : null;
                })()}

            </div>
        )
    })
    return (
        <div>{educationList}</div>
    )
}

export default Education