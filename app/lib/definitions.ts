export const Product_Categories = [
    'Engine',
    'Exhaust',
    'Suspension',
    'Bodykits',
    'Brakes',
    'Gear',
    'Drivetrain',
    'Misc',
    'Cooling',
    'Lighting',
] as const;

export type Product_Category = (typeof Product_Categories)[number];

export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    category: Product_Category;
    image: string;
};
