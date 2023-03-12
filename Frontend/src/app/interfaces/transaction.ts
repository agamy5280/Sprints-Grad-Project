export interface Transaction {
  id: string;
  type: string;
  description: string;
  assetID: string;
  sellerID: string;
  buyerID: string;
  amount: number;
  status: string;
  created_at: string;
}
