export const products = [
	{
		id: 'arc-lounge-chair',
		slug: 'arc-lounge-chair',
		name: 'Arc Lounge Chair',
		category: 'Furniture',
		price: 24900,
		image:
			'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85',
		tag: 'Bestseller',
		description: 'A generous, sculptural seat made for long conversations and slower afternoons.',
		material: 'Solid ash wood, natural linen upholstery',
	},
	{
		id: 'form-side-table',
		slug: 'form-side-table',
		name: 'Form Side Table',
		category: 'Furniture',
		price: 8900,
		image:
			'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=85',
		tag: '',
		description: 'A quietly useful side table with a softened silhouette and a solid, steady feel.',
		material: 'Solid mango wood with a natural finish',
	},
	{
		id: 'studio-vase',
		slug: 'studio-ceramic-vase',
		name: 'Studio Ceramic Vase',
		category: 'Home Decor',
		price: 3200,
		image:
			'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85',
		tag: 'New',
		description: 'A hand-finished ceramic form that feels just as lovely with a single stem.',
		material: 'Hand-glazed stoneware',
	},
	{
		id: 'soft-glow-lamp',
		slug: 'soft-glow-table-lamp',
		name: 'Soft Glow Table Lamp',
		category: 'Lighting',
		price: 7400,
		image:
			'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85',
		tag: '',
		description: 'A warm, gentle light for bedside reading and evenings that take their time.',
		material: 'Powder-coated metal, linen shade',
	},
	{
		id: 'linen-throw',
		slug: 'washed-linen-throw',
		name: 'Washed Linen Throw',
		category: 'Everyday Essentials',
		price: 4600,
		image:
			'https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?auto=format&fit=crop&w=900&q=85',
		tag: '',
		description: 'An easy layer for the sofa, the end of the bed, or a quiet morning.',
		material: 'European flax linen',
	},
	{
		id: 'stoneware-set',
		slug: 'everyday-stoneware-set',
		name: 'Everyday Stoneware Set',
		category: 'Everyday Essentials',
		price: 5800,
		image:
			'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=900&q=85',
		tag: 'Bestseller',
		description: 'A set of four everyday pieces with a tactile glaze and an easy, balanced shape.',
		material: 'Hand-glazed stoneware, set of four',
	},
	{
		id: 'still-life-print',
		slug: 'still-life-framed-print',
		name: 'Still Life Framed Print',
		category: 'Home Decor',
		price: 3900,
		image:
			'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85',
		tag: '',
		description: 'A quietly expressive print, ready to bring a little character to your walls.',
		material: 'Archival art print, solid wood frame',
	},
	{
		id: 'dune-pendant',
		slug: 'dune-pendant-light',
		name: 'Dune Pendant Light',
		category: 'Lighting',
		price: 12900,
		image:
			'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=900&q=85',
		tag: 'Limited',
		description: 'Soft, sculptural light that makes the room feel a little more settled.',
		material: 'Hand-finished metal, fabric-wrapped cord',
	},
];

export const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;
