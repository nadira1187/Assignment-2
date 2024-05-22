export type InterfaceVariant = {
    type: string;
    value: string;
  };
  
  export type InterfaceInventory = { quantity: number; inStock: boolean };
  
  export type InterfaceProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: InterfaceVariant[];
    inventory: InterfaceInventory;
  };
  