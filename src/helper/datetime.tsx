import moment from "moment";

export const formatISODateTime = (datetime : string, { format = 'MMM Do, YYYY'} = {}) => {
    return moment(datetime).format(format);
};
