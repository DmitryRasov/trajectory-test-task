import axios from "axios";

export const getCarsService = async () => {
    const response = await axios.get('https://test.tspb.su/test-task/vehicles')
    return response.data
}