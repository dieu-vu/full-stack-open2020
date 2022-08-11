import React, {useState} from 'react';
import DetailButton from './DetailButton';
import CountryDetails from './CountryDetails';

const SingleCountry = ({c}) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <>
            <p>
                {c.name.common}
                <span>
                    <DetailButton country={c} setShowDetails={setShowDetails} />
                </span>
            </p>
            {showDetails ? <CountryDetails country={c} /> : <></>}
        </>
    );
};

export default SingleCountry;
