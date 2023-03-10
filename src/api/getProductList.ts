import axios from 'axios';
import { ProductType } from '@src/types';

const API_URL =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230309T144204Z&X-Amz-Expires=86400&X-Amz-Signature=7ff59cffb0e5e9c75d99b59290c467f1d0d1a6915e8400323716239f3ea575b2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject';
const getProductList = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const { data } = await axios.get<ProductType[]>(API_URL);
    return data;
  } catch (e) {
    return null;
  }
};

export default getProductList;
