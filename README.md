# 원티드 인턴십 프론트엔드 4팀 - 2주차 과제
## 📖 과제 설명
**동료학습**을 통해서 팀에서 생각한 **[여행상품페이지]** 의 `Best Pratice` 만들기
- `Best Practice`란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

## 🔗 배포링크
[🔗 배포 링크 이동](https://pre-onboarding-9th-2-4-beta.vercel.app)

## 🧑‍💻 팀원 소개
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/SongNoin"><img src="https://avatars.githubusercontent.com/u/88178866?v=4" width="100px; alt=""/><br /><sub><b>송경환(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sehyeon4687"><img src="https://avatars.githubusercontent.com/u/104138055?v=4" width="100px;" alt=""/><br /><sub><b>박세현 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ws8313"><img src="https://avatars.githubusercontent.com/u/87023889?v=4" width="100px;" alt=""/><br /><sub><b>김우성 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/chanwoo00106"><img src="https://avatars.githubusercontent.com/u/57276315?v=4" width="100px;" alt=""/><br /><sub><b>변찬우 </b></sub></a><br /></td>
           <tr/>
      <td align="center"><a href="https://github.com/hyemin33"><img src="https://avatars.githubusercontent.com/u/124856203?v=4" width="100px;" alt=""/><br /><sub><b>조혜민 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/2taesung"><img src="https://avatars.githubusercontent.com/u/66891085?v=4" width="100px;" alt=""/><br /><sub><b>이태성 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seongbin9786"><img src="https://avatars.githubusercontent.com/u/28754907?v=4" width="100px;" alt=""/><br /><sub><b>김성빈 </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## 💻 실행방법 
   ```bash
   # 프로젝트 클론
   git clone "https://github.com/wanted-pre-onboarding-fe-team-4/pre-onboarding-9th-2-4.git"
  
  # 프로젝트 폴더 진입
   cd pre-onboarding-9th-2-4
   
  # 모듈 설치 및 실행
   yarn && yarn dev
  ```
  
## 기능 구현





https://user-images.githubusercontent.com/88178866/224345366-b2425841-ccee-4e9a-8281-7ed10b37b9d4.mov




https://user-images.githubusercontent.com/88178866/224342291-53725575-2e4f-4ae6-96b8-1e797d1e2692.mov



https://user-images.githubusercontent.com/88178866/224343344-2ed8b9b0-b0ab-4dfa-85f2-8d9998da8980.mov








#### ✅ Assignment 1

- 유저가 페이지를 처음 열었을 때 “/main”에 도착하도록 만들어주세요
    - main에는 여행 상품 정보 (mock JSON) 를 활용하여 여행 상품 정보를 노출해야합니다.
      - 리스트에서 노출해야 하는 정보: `idx, name, mainImage, price, spaceCategory`
    - 예약 버튼을 달아 예약 버튼을 클릭시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터
를 저장해주세요.
    - 여행 상품 정보를 클릭했을 때 여행 상품을 자세히 볼 수 있는 모달창을 제작해주세요
      - 모달에서 노출해야 하는 정보: `idx, name, mainImage, description, spaceCategory, price, maximumPurchases, registrationDate`

#### ✅ Assignment 2

- 여행 상품 리스트의 가격(price), 공간(spaceCategory) 필터 기능을 만들어주세요.
  - 개별 필터링과, 다중 필터링이 모두 가능하도록 구현해주세요

#### ✅ Assignment 3

- 여행 상품 장바구니 (/reservations)를 만들어주세요.
  - 저장한 여행 상품의 리스트를 보여주고 삭제가 가능할 수 있도록 구성해주세요.
  - 여행 상품의 구매 수량을 변경 가능할 수 있도록 해주세요.
  - 장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시해주세요

## 📦 폴더구조
```
📦 src
├── 📄 App.tsx
├── 📄 main.tsx
├── 📂 api
│   ├── 📄 api.ts
│   └── 📄 getProductList.ts
├── 📂 components
│   ├── 📄 DetailModal.tsx
│   └── 📂 commons
│       ├── Product.tsx
│       ├── ProductFilter.tsx
│       ├── ProductList.tsx
│       ├── ProductSkeleton.tsx
│       ├── Reservation.tsx
│       ├── ReservationList.tsx
│       ├── TravelReserveBox.tsx
│       ├── index.ts
│       └── styles
│           └── Theme.ts
├── 📂 context
│   └── 📄 cart.tsx
├── 📂 layouts
│   ├── 📄 DefaultLayout.tsx
│   └── 📂 units
│       └── 📄 Header.tsx
├── 📂 lib
├── 📂 pages
│   ├── 📂 Error
│   │   └── 📄 index.tsx
│   ├── 📂 Main
│   │   └── 📄 index.tsx
│   └── 📂 Reservations
│       └── 📄 index.tsx
├── 📂 routes
│   └── 📄 AppRouter.tsx
└─── 📂 types
```
## 🤓 Best Practice
각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 `Best Practice` 로 채택해서 프로젝트에 녹였습니다.

### 1. `React Suspense`

- Suspense를 도입하면 API 로딩 상태를 분리해 다른 컴포넌트에 위임할 수 있습니다.
- 컴포넌트는 데이터가 동기적으로 로딩된 것처럼 선언적으로 로직을 작성할 수 있습니다.

``` tsx
// 데이터 로딩 시작
const resource = createResource(getProductList());

const ProductList = ({ filterFunction }: ProductListProps) => {
  // 데이터 조회
  const products = resource.read();

  return (
...
      {filteredProducts.map((product) => (
        <Product key={product.idx} product={product} />
      ))}
  );
};
```

### 2. `Skeleton UI` 구현

https://user-images.githubusercontent.com/88178866/224343789-d633aa2b-8b4c-4b15-867f-ca2b7892f1c6.mov

여행 상품 리스트는 이미지가 포함되어있어 리스트가 길어질 경우를 대비해 `Skeleton UI`가 있으면 좋겠다는 의견이 있었습니다.

로딩 시 자연스러운 UI를 위해서 `Skeleton UI`을 구현하였습니다.

- `Skeleton UI`는 `Chakra UI`의 `Skeleton` 기능을 이용해 `ProductLiSkeleton`으로 구현했습니다.

```tsx
...
const ProductLiSkeleton = () => {
  return (
    ...
      {[...Array(10)].map((_, key) => (
        <Card
      ...
        >
          <Box display='flex' flexDir='column' alignItems='start' gap='1rem'>
            <Skeleton width='80%' height='2rem' />
            <SkeletonText fontSize='2xl' width='100%' />
            <Skeleton width='5rem' height='1rem' />
          </Box>

          <AspectRatio ratio={1 / 1} width='100%'>
            <Skeleton width='100%' height='100%' rounded='xl' />
          </AspectRatio>

          <Skeleton width='6rem' height='2rem' />
        </Card>
      ))}
  ...
```
- `ProductLiSkeleton`을 `Suspense fallback`으로 연결
```tsx
export const MainPage = () => {
  ...

  return (
    <>
    ...
      <Suspense fallback={<ProductLiSkeleton />}>
        <ProductList filterFunction={filterFunction} />
      </Suspense>
    </>
  );
};
```


### 3. 장바구니 기능구현에 `Context API` 사용
장바구니 기능이 여러개의 페이지에서 사용함을 생각해서 `Context API` 로 장바구니 변수, 기능을 전역 컴포넌트에서도 사용할 수 있게했습니다.
```tsx
export const CartContext = createContext<CartContextType>(initialCartContext);

const CART_KEY = 'cart';

const initialCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');

const persistCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const CartProvider = (props: React.PropsWithChildren) => {
  const [cart, updateCart] = useState<CartItem[]>(initialCart);

  const addToCart = (newProduct: number, price: number) => {
  ...
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

```
- `useCart`의 `addToCart` 사용 예시
```tsx
import { useCart } from '@src/context/cart';
...
const Product = ({ product }: Props) => {
...
  const { addToCart } = useCart();
...
const handleReservationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    addToCart(idx, price);
    showReservationSuccess();
    e.stopPropagation();
  };
...
  return(
...
      <Button
...
      onClick={handleReservationClick}
    >
      예약
    </Button>
 ...

```
### 4. UI/UX
본 과제에서 사용자에게 가장 적합한 UI 를 고민해 보았을 때 아래와 같이 선정하였습니다.

**지역필터**
- 사용자가 간편하게 지역을 넣고 뺄 수 있도록 토글버튼을 선택했습니다.

**가격필터**
- 사용자가 다양한 가격옵션을 편리하게 설정할 수 있도록 `Range Slider`를 선택했습니다.

**행동에 대한 피드백**
- 예약 시 성공같은 경우의 서비스 안내멘트들을 주요 행동이 실제로 동작했다는 피드백을 주기 위하고 `alert` 나 `modal` 을 사용해 보여줄 경우 사용성이 방해될 것을 우려해 `toast` 로 띄우게 했습니다.

### 5. 반응형 디자인 적용



https://user-images.githubusercontent.com/88178866/224345874-8c7ca45a-d108-4f97-b624-1e07c6079625.mov


### 6. `Git` 협업
코드 구현은 아니지만 `Git` 관리에 부족한 팀원이 다수였습니다. 팀원 중 사전과제에 git 관리를 잘해주신 분이 계셔서 `Best Practice` 삼아 도입하였습니다.
- Issue 작성
- Branch, commit 컨벤션
- [PR에 issue 연계](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)

## 👾 코드 컨벤션
### commit message

| Type | Description |
| --- | --- |
| test | 누락된 테스트 추가 |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| chore | 빌드 프로세스나 보조 도구 변경 |
| docs | 문서 변경 |
| refactor | 버그 수정도, 새로운 기능 추가도 아닌 코드 변경 |
| style | 마크업, 공백, 포맷, 세미콜론 누락 등 스타일 변경 |
| ci | CI 관련 변경 |
| perf | 성능 개선 |

### branch

| 브랜치 이름 | 설명 |
| --- | --- |
| master | 제품으로 출시 가능한 브랜치 |
| feature/개발할 내용 | 기능을 개발하는 브랜치 |
| fix/수정할 내용  | 출시 버전에서 발생한 버그를 수정하는 브랜치 |
