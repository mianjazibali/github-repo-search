import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { useSelector } from "react-redux";

import { RootState } from '../store';

const withLoading = (Component : React.FunctionComponent) => (props : any) => {
    const loading = useSelector((state : RootState) => state.loading.value);

    return (
        <>
            {loading && (
                <FontAwesomeIcon className="position-fixed" style={{top: 5, right: 5}} icon={faSpinner} spin />
            )}

            <Component {...props} />
        </>
    );
};

export default withLoading;
