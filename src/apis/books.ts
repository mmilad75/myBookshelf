import axiosInstance from './axios';

export const getBestSellerBooksApi = async () => {
  try {
    const {data} = await axiosInstance.get('lists/best-sellers/history.json');
    return data.results;
  } catch (error) {
    return error;
  }
};
