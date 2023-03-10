import axios from 'axios';
import { ProductType } from '@src/types';

const BASE_URL = 'https://s3.us-west-2.amazonaws.com';

const API = axios.create({
  baseURL: BASE_URL,
});

export const getProducts = async () => {
  try {
    const { data } = await API.get<ProductType[]>(
      '/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230310T081729Z&X-Amz-Expires=86400&X-Amz-Signature=3a6778c49912058c9dd5aac67bf75f40791ccbdd47c771a21c263d9ac6e46a71&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject'
    );

    return data;
  } catch (error) {
    alert('여행 상품 정보를 가져오는 데 실패했습니다.');
  }
};
