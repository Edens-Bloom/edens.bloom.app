export interface ProductPackageTier {
  id?: number | string;
  label?: string;
  price?: number | string;
  image?: string;
}

export interface ProductPackages {
  tier1?: ProductPackageTier;
  tier2?: ProductPackageTier;
  tier3?: ProductPackageTier;
}

export interface ProductAddon {
  id?: number;
  label?: string;
  price?: number;
  is_default?: boolean;
  image?: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  productType?: string;
  image: string;
  plasticBagImage?: string;
  plasticBagTitle?: string;
  plasticBagPrice?: number;
  paperBagImage?: string;
  paperBagTitle?: string;
  paperBagPrice?: number;
  noBagImage?: string;
  noBagTitle?: string;
  noBagPrice?: number;
  badge?: string;
  rating: number;
  reviews: number;
  description: string;
  icon?: string;
  packages?: ProductPackages;
  addOns?: ProductAddon[];
  inStock?: boolean;
  imageUrl: string;
  productNumber: string;
}

export const Category = {
  ALL: "ALL",
  BOUQUET: "BOUQUET",
  KEYRING: "KEYRING",
  POT_FLOWER: "POT_FLOWER",
  HAIR_CLIP: "HAIR_CLIP",
  TABLE_DECOR: "TABLE_DECOR",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export const Filter = {
  ALL: { label: "All", value: "all", index: 0 },
  BOUQUET: { label: "Bouquet", value: "bouquet", index: 1 },
  KEYRING: { label: "Keyring", value: "keyring", index: 2 },
  POT_FLOWER: { label: "Pot Flower", value: "pot flower", index: 3 },
  HAIR_CLIP: { label: "Hair Clip", value: "hair clip", index: 4 },
  TABLE_DECOR: { label: "Table Decor", value: "table decor", index: 5 },
};

export interface CartItem extends SelectedProduct {
  subTotal: number;
}

export interface SelectedProduct extends Product {
  selectedAddOnId: number | null;
  selectedAddOnPrice: number;
  selectedImageUrl: string;
  subTotal: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  subTotal: number;
  taxAmount: number;
  discountAmount: number;
  shippingFee: number;
  totalAmount: number;
}

export interface User {
  id?: number;
  userName?: string;
  name?: string;
  email?: string;
  role?: "admin" | "user";
  phoneNumber?: string;
  address?: string;
}

export interface BloomState {
  products: Product[];
  cart: CartState;
  wishlist: number[];
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  selectedProduct: SelectedProduct;
  loading: { fetchById: boolean };
  onConfirm: () => Promise<unknown>;
  setSelectedProduct: (product: SelectedProduct) => void;
  fetchProducts: () => Promise<void>;
  fetchCart: () => Promise<void>;
  addToCart: (product: SelectedProduct) => Promise<void>;
  removeFromCart: (item: CartItem) => void;
  // updateQuantity: (productId: number, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  toggleWishlist: (productId: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  addProduct: (product: SelectedProduct) => Promise<boolean>;
  updateProduct: (
    id: number,
    productData: Partial<Product>,
  ) => Promise<boolean>;
  deleteProduct: (id: number) => Promise<boolean>;
  fetchProductById: (id: number, isSelected?: boolean) => Promise<void>;
  updateSelectedProduct: (product: SelectedProduct) => void;
  updateCart: (item: SelectedProduct) => void;
  updateUser: (user: Partial<User>) => void;
  orders: CartState[];
  fetchOrders: () => Promise<void>;
}
