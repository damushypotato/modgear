const catalog = [
    {
        id: 1,
        name: 'Turbocharger Kit',
        price: 1500,
        description: 'Complete turbocharger kit for increased horsepower and torque.',
        category: 'Engine',
        image: 'assets/img/turbo-1.jpeg',
    },
    {
        id: 2,
        name: 'Performance Exhaust Manifold',
        price: 500,
        description:
            'High-flow exhaust manifold for improved exhaust gas flow and engine performance.',
        category: 'Exhaust',
        image: 'assets/img/exhaust-2.png',
    },
    {
        id: 3,
        name: 'Coilover Suspension Kit',
        price: 1200,
        description:
            'Adjustable coilover suspension kit for precise handling and ride height adjustment.',
        category: 'Suspension',
        image: 'assets/img/suspension-3.webp',
    },
    {
        id: 4,
        name: 'Wide Body Kit',
        price: 2000,
        description: 'Complete wide body kit for an aggressive look and improved aerodynamics.',
        category: 'Bodykits',
        image: 'assets/img/bodykit-4.jpg',
    },
    {
        id: 5,
        name: 'Big Brake Kit',
        price: 800,
        description:
            'Upgraded brake kit with larger rotors and calipers for improved braking performance.',
        category: 'Brakes',
        image: 'assets/img/brakes-5.png',
    },
    {
        id: 6,
        name: 'Racing Helmet',
        price: 300,
        description: 'Arai racing helmet for safety and comfort during track sessions.',
        category: 'Gear',
        image: 'assets/img/helmet-6.webp',
    },
    {
        id: 7,
        name: 'High-Performance Fuel Pump',
        price: 200,
        description: 'Upgraded fuel pump for increased fuel delivery and engine performance.',
        category: 'Drivetrain',
        image: 'assets/img/pump-7.webp',
    },
    {
        id: 8,
        name: 'Carbon Fiber Shift Knob',
        price: 80,
        description: 'Carbon fiber shift knob for a lightweight and sporty feel.',
        category: 'Misc',
        image: 'assets/img/shifter-8.jpg',
    },
    {
        id: 9,
        name: 'Roll Cage',
        price: 1500,
        description: 'Full roll cage for added safety during competitive motorsport events.',
        category: 'Drivetrain',
        image: 'assets/img/cage-9.jpg',
    },
    {
        id: 10,
        name: 'Performance Intake System',
        price: 300,
        description: 'Cold air intake system for increased airflow and engine performance.',
        category: 'Engine',
        image: 'assets/img/intake-10.jpg',
    },
    {
        id: 11,
        name: 'High-Flow Catalytic Converter',
        price: 400,
        description: 'Performance catalytic converter for improved exhaust flow and emissions.',
        category: 'Exhaust',
        image: 'assets/img/converter-11.jpg',
    },
    {
        id: 12,
        name: 'Adjustable Camber Arms',
        price: 150,
        description: 'Camber adjustment arms for fine-tuning suspension geometry.',
        category: 'Suspension',
        image: 'assets/img/camber-12.webp',
    },
    {
        id: 13,
        name: 'Spoiler Wing',
        price: 250,
        description: 'Adjustable spoiler wing for increased downforce and aerodynamic stability.',
        category: 'Bodykits',
        image: 'assets/img/spoiler-13.jpg',
    },
    {
        id: 14,
        name: 'Performance Brake Pads',
        price: 100,
        description: 'High-performance brake pads for improved stopping power and fade resistance.',
        category: 'Brakes',
        image: 'assets/img/pads-14.jpg',
    },
    {
        id: 15,
        name: 'Racing Gloves',
        price: 100,
        description: 'Fire-resistant racing gloves for added safety and grip.',
        category: 'Gear',
        image: 'assets/img/gloves-15.jpg',
    },
    {
        id: 16,
        name: 'Aluminum Radiator',
        price: 350,
        description: 'High-capacity aluminum radiator for improved cooling efficiency.',
        category: 'Cooling',
        image: 'assets/img/radiator-16.jpg',
    },
    {
        id: 17,
        name: 'LED Headlight Conversion Kit',
        price: 200,
        description: 'Upgrade to LED headlights for improved visibility and style.',
        category: 'Lighting',
        image: 'assets/img/headlights-17.jpg',
    },
    {
        id: 18,
        name: 'Carbon Fiber Hood',
        price: 600,
        description: 'Lightweight carbon fiber hood for weight reduction and style.',
        category: 'Bodykits',
        image: 'assets/img/hood-18.jpg',
    },
    {
        id: 19,
        name: 'Short Throw Shifter',
        price: 150,
        description: 'Short throw shifter for quicker and more precise gear changes.',
        category: 'Drivetrain',
        image: 'assets/img/shifter-19.jpg',
    },
    {
        id: 20,
        name: 'Performance ECU Tune',
        price: 500,
        description: 'Custom ECU tune for increased horsepower and torque.',
        category: 'Engine',
        image: 'assets/img/ecu-20.png',
    },
    {
        id: 21,
        name: 'Catback Exhaust System',
        price: 800,
        description: 'Complete catback exhaust system for enhanced exhaust note and performance.',
        category: 'Exhaust',
        image: 'assets/img/exhaust-21.jpg',
    },
    {
        id: 22,
        name: 'Lowering Springs',
        price: 300,
        description: 'Lowering springs for improved handling and a more aggressive stance.',
        category: 'Suspension',
        image: 'assets/img/springs-22.webp',
    },
    {
        id: 23,
        name: 'Front Lip Spoiler',
        price: 150,
        description: 'Front lip spoiler for enhanced aerodynamics and style.',
        category: 'Bodykits',
        image: 'assets/img/spoiler-23.jpg',
    },
    {
        id: 24,
        name: 'Slotted Brake Rotors',
        price: 200,
        description: 'Slotted brake rotors for improved cooling and brake bite.',
        category: 'Brakes',
        image: 'assets/img/rotors-24.jpg',
    },
    {
        id: 25,
        name: 'Racing Suit',
        price: 500,
        description: 'FIA-approved racing suit for maximum protection and comfort from inchidents.',
        category: 'Gear',
        image: 'assets/img/suit-25.webp',
    },
    {
        id: 26,
        name: 'Aluminum Radiator Hose Kit',
        price: 100,
        description: 'High-performance aluminum radiator hose kit for improved cooling efficiency.',
        category: 'Cooling',
        image: 'assets/img/hose-26.webp',
    },
    {
        id: 27,
        name: 'LED Fog Lights',
        price: 150,
        description: 'Upgrade to LED fog lights for improved visibility in adverse conditions.',
        category: 'Lighting',
        image: 'assets/img/foglights-27.jpg',
    },
    {
        id: 28,
        name: 'Carbon Fiber Trunk Lid',
        price: 700,
        description: 'Carbon fiber trunk lid for weight reduction and improved aerodynamics.',
        category: 'Bodykits',
        image: 'assets/img/trunk-28.jpg',
    },
    {
        id: 29,
        name: 'Limited Slip Differential',
        price: 1000,
        description: 'Limited slip differential for improved traction and cornering performance.',
        category: 'Drivetrain',
        image: 'assets/img/diff-29.png',
    },
    {
        id: 30,
        name: 'Cold Air Intake System',
        price: 250,
        description: 'Cold air intake system for increased horsepower and engine sound.',
        category: 'Engine',
        image: 'assets/img/intake-30.webp',
    },
    {
        id: 31,
        name: 'Exhaust Header Wrap',
        price: 50,
        description:
            'Exhaust header wrap for reduced underhood temperatures and improved exhaust scavenging.',
        category: 'Exhaust',
        image: 'assets/img/header-31.jpg',
    },
    {
        id: 32,
        name: 'Adjustable Coilovers',
        price: 1500,
        description:
            'Adjustable coilover suspension system for customizable ride height and damping.',
        category: 'Suspension',
        image: 'assets/img/coilovers-32.webp',
    },
    {
        id: 33,
        name: 'Rear Diffuser',
        price: 300,
        description: 'Rear diffuser for improved aerodynamics and a more aggressive rear end.',
        category: 'Bodykits',
        image: 'assets/img/diffuser-33.jpg',
    },
    {
        id: 34,
        name: 'Brake Caliper Paint Kit',
        price: 50,
        description:
            'Brake caliper paint kit for customizing brake calipers with high-temperature paint.',
        category: 'Brakes',
        image: 'assets/img/caliper-34.webp',
    },
    {
        id: 35,
        name: 'Racing Harness',
        price: 200,
        description: '5-point racing harness for maximum driver safety and security.',
        category: 'Gear',
        image: 'assets/img/harness-35.jpg',
    },
    {
        id: 36,
        name: 'High-Performance Radiator Fan',
        price: 150,
        description: 'High-flow radiator fan for improved cooling performance.',
        category: 'Cooling',
        image: 'assets/img/fan-36.jpg',
    },
    {
        id: 37,
        name: 'LED Taillights',
        price: 300,
        description: 'Upgrade to LED taillights for improved visibility and modern styling.',
        category: 'Lighting',
        image: 'assets/img/lights-37.jpg',
    },
    {
        id: 38,
        name: 'Carbon Fiber Side Skirts',
        price: 400,
        description: 'Carbon fiber side skirts for enhanced aerodynamics and visual appeal.',
        category: 'Bodykits',
        image: 'assets/img/skirts-38.jpg',
    },
    {
        id: 39,
        name: 'Short Shift Kit',
        price: 100,
        description: 'Short shift kit for reduced shifter throw and improved shift feel.',
        category: 'Drivetrain',
        image: 'assets/img/shift-39.jpg',
    },
    {
        id: 40,
        name: 'Performance Camshaft',
        price: 600,
        description: 'High-performance camshaft for increased horsepower and torque.',
        category: 'Engine',
        image: 'assets/img/cam-40.jpg',
    },
    {
        id: 41,
        name: 'Muffler Delete Pipe',
        price: 100,
        description: 'Muffler delete pipe for a more aggressive exhaust note and increased flow.',
        category: 'Exhaust',
        image: 'assets/img/pipe-41.jpg',
    },
    {
        id: 42,
        name: 'Sway Bar Kit',
        price: 300,
        description: 'Performance sway bar kit for reduced body roll and improved handling.',
        category: 'Suspension',
        image: 'assets/img/swaybars-42.jpg',
    },
    {
        id: 43,
        name: 'Carbon Fiber Mirror Covers',
        price: 200,
        description: 'Carbon fiber mirror covers for lightweight and stylish exterior enhancement.',
        category: 'Bodykits',
        image: 'assets/img/mirrors-43.webp',
    },
    {
        id: 44,
        name: 'Stainless Steel Brake Lines',
        price: 80,
        description: 'Stainless steel brake lines for improved brake pedal feel and response.',
        category: 'Brakes',
        image: 'assets/img/lines-44.webp',
    },
    {
        id: 45,
        name: 'Racing Shoes',
        price: 150,
        description: 'FIA-approved drinking shoes for pedal feel and driver comfort.',
        category: 'Gear',
        image: 'assets/img/shoes-45.jpg',
    },
    {
        id: 46,
        name: 'Aluminum Coolant Overflow Tank',
        price: 100,
        description: 'Aluminum coolant overflow tank for increased durability and style.',
        category: 'Cooling',
        image: 'assets/img/tank-46.jpg',
    },
    {
        id: 47,
        name: 'LED Underglow Lights',
        price: 150,
        description: 'LED underglow lights for a custom and stylish look.',
        category: 'Lighting',
        image: 'assets/img/underglow-47.jpg',
    },
    {
        id: 48,
        name: 'Carbon Fiber Rear Spoiler',
        price: 500,
        description: 'Carbon fiber rear spoiler for improved downforce and aggressive styling.',
        category: 'Bodykits',
        image: 'assets/img/spoiler-48.webp',
    },
    {
        id: 49,
        name: 'Limited Slip Differential Fluid',
        price: 50,
        description:
            'High-performance limited slip differential fluid for maximum traction and longevity.',
        category: 'Drivetrain',
        image: 'assets/img/fluid-49.jpg',
    },
    {
        id: 50,
        name: 'Performance Throttle Body',
        price: 400,
        description: 'Performance throttle body for increased throttle response and airflow.',
        category: 'Engine',
        image: 'assets/img/throttle-50.jpg',
    },
];

module.exports = { catalog };
