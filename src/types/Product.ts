interface Product {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: '서울' | '강원' | '부산' | '대구' | '제주';
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

export default Product;
