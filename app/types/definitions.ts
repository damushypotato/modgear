import { Mesh, MeshPhysicalMaterial } from 'three';

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
    id: number;
    name: string;
    price: number;
    description: string;
    category: Product_Category;
    image: string;
    slug: string;
};

export type CartItem = {
    product: Product;
    quantity: number;
};

export interface CartDisplayItem extends CartItem {
    total: number;
}

type NodesKeys =
    | 'Object_2'
    | 'Object_3'
    | 'Object_4'
    | 'Object_5'
    | 'Object_6'
    | 'Object_7'
    | 'Object_8'
    | 'Object_9'
    | 'Object_10'
    | 'Object_11'
    | 'Object_12'
    | 'Object_13'
    | 'Object_14'
    | 'Object_15'
    | 'Object_16'
    | 'Object_17'
    | 'Object_18'
    | 'Object_19'
    | 'Object_20'
    | 'Object_21'
    | 'Object_22'
    | 'Object_23'
    | 'Object_24'
    | 'Object_25'
    | 'Object_26'
    | 'Object_27'
    | 'Object_28'
    | 'Object_29'
    | 'Object_30'
    | 'Object_31'
    | 'Object_32'
    | 'Object_33'
    | 'Object_34'
    | 'Object_35'
    | 'Object_36'
    | 'Object_37'
    | 'Object_38'
    | 'Object_39'
    | 'Object_40'
    | 'Object_41'
    | 'Object_42'
    | 'Object_43';

export type MaterialsKeys =
    | 'F40_Carbon'
    | 'F40_GridD'
    | 'F40_Headlights'
    | 'F40_Sheft'
    | 'F40_Window.001'
    | 'super_brakelight'
    | 'super_reverselight'
    | 'material'
    | 'F40_Brake'
    | 'F40_Chrome'
    | 'F40_Chrome.001'
    | 'F40_Cockpit'
    | 'F40_Cockpit_HR'
    | 'F40_Display'
    | 'F40_Display_1'
    | 'F40_Estra'
    | 'F40_Glass'
    | 'F40_Glass.001'
    | 'F40_Grid'
    | 'F40_Logos'
    | 'F40_Mechanics'
    | 'F40_Mechanics.001'
    | 'F40_Pedali'
    | 'F40_Rrims'
    | 'F40_Skin'
    | 'F40_Strelki'
    | 'F40_Tappetini'
    | 'F40_Vehiclelight'
    | 'F40_Window'
    | 'Scene_-_Root.002'
    | 'super_gauges'
    | 'super_headlight'
    | 'super_signal_L';

type Nodes = {
    [key in NodesKeys]: Mesh;
};

type Materials = {
    [key in MaterialsKeys]: MeshPhysicalMaterial;
};

export type GLTFResult = {
    nodes: Nodes;
    materials: Materials;
};

export type ColourSelection = {
    colour: string;
    metalness?: number;
    roughness?: number;
};
