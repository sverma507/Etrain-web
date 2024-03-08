import React from 'react';
import './AwesomePart.css';

const AwesomePart = () => {
    const card = [
        { text1: "Better Future", disc1: "Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you mal" },
        { text1: "Qualified Trainers", disc1: "Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you mal" },
        { text1: "Job Opportunity", disc1: "Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you mal" }
    ];

    const cards = () => {
        return card.map((item, index) => (
            <div className='Better-future' key={index}>
                <h2>{item.text1}</h2>
                <p>{item.disc1}</p>
            </div>
        ));
    }

    return (
        <>
            <div className='outer-Awesome'>
                <div>
                    <div className='Awesome-heading'>
                        <h1>Awesome<br />
                            Feature</h1>
                        <p className='Awesome-paragraph'>Set have great you male grass yielding an <br />yielding first their you're have called the <br />abundantly fruit were ma</p>
                    </div>
                    <button className="button-read-more">read more</button>
                </div>
                <div className='cards'>{cards()}</div>
            </div>




        </>
    );
}

export default AwesomePart;
