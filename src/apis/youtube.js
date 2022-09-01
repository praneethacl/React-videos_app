import axios from 'axios';

const key = "AIzaSyAVkYfef6EBZNH-OtUuqB_FFkTi-xOY9d4";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: key
    }
})