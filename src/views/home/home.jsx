import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { Header } from '../components/header';

export default function Home () {
  // Suponhamos que você tenha uma matriz de produtos chamada "products"
  const products = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Italiana',
      price: '30.00',
      location: 'unidade recife',
      imageSrc: 'Pizza-31.webp',
    },
    {
        id: 2,
        name: 'Lasanha',
        description: 'Italiana',
        price: '39.00',
        location: 'unidade recife',
        imageSrc: 'lasanha.webp',
      }, {
        id: 3,
        name: 'Pizza',
        description: 'Italiana',
        price: '30.00',
        location: 'unidade recife',
        imageSrc: 'Pizza-31.webp',
      },
      {
          id: 4,
          name: 'Lasanha',
          description: 'Italiana',
          price: '39.00',
          location: 'unidade recife',
          imageSrc: 'lasanha.webp',
        },, {
            id: 5,
            name: 'Pizza',
            description: 'Italiana',
            price: '30.00',
            location: 'unidade recife',
            imageSrc: 'Pizza-31.webp',
          },
          {
              id: 6,
              name: 'Lasanha',
              description: 'Italiana',
              price: '39.00',
              location: 'unidade recife',
              imageSrc: 'lasanha.webp',
            },
    // Outros produtos...
  ];

  return (
    <>
      <Header />
      <br />
      <h1 className='text-2xl font-semibold text-zinc-800 mb-4'>Meus Produtos</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
        {products.map((product) => (
          <div className='overlay-container p-2 ' key={product.id}>
            <img
              src={product.imageSrc}
              alt='produto'
              className='relative w-full min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md'
            />
            <div className='overlay w-full rounded-md p-2 px-3 '>
              <p className='text-xl font-bold flex gap-2 flex-wrap'>
                {product.price}
              </p>
           

            <h2 className='text-lg font-semibold mt-2 text-zinc-800 text-left'>{product.name}</h2>

            <p className='truncate text-zinc-600 text-left'>
              {product.description}
            </p>

            <p className='text-zinc-600 text-left'>{product.location}</p>
          </div> </div>
        ))}
      </div>
    </>
  );
}
