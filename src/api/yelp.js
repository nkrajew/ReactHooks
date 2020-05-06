import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer NAMht0dDRQW2psjKcDM2bOB5euO_aB51h61qUpNXE7J5W3Q0DSMu_4naXCxoS7GeooidJDDLIbDpdEhDVOA5XQosKX-Nl7xw7d5grHXeyl-VK-4_YeKvI5gvbIexXnYx'
  }
});
