import { Link } from 'react-router-dom';

import { Header } from '../components/header';

import { Card, Typography } from "@material-tailwind/react";
import { useState } from 'react';


export default function Home (){

  
  const [open, setOpen] = useState(false)
    const pedidolabels = [ 'cliente', 'valor total',
     'endereco','açoes']

    const products = [
      {
        id: 1,
        name: 'Pizza',
        description: 'Italiana',
        price: '30.00',
        location: 'unidade recife',
        quantidade: '2',
        imageSrc: 'Pizza-31.webp',
      },
      {
          id: 2,
          name: 'Lasanha',
          description: 'Italiana',
          price: '39.00',
          quantidade: '2',
          location: 'unidade recife',
          imageSrc: 'lasanha.webp',
        }, {
          id: 3,
          name: 'Pizza',
          description: 'Italiana',
          price: '30.00',
          quantidade: '2',
          location: 'unidade recife',
          imageSrc: 'Pizza-31.webp',
        },
        {
            id: 4,
            name: 'Lasanha',
            description: 'Italiana',
            price: '39.00',
            quantidade: '2',
            location: 'unidade recife',
            imageSrc: 'lasanha.webp',
          },, {
              id: 5,
              name: 'Pizza',
              description: 'Italiana',
              price: '30.00',
              quantidade: '2',
              location: 'unidade recife',
              imageSrc: 'Pizza-31.webp',
            },
            {
                id: 6,
                name: 'Lasanha',
                description: 'Italiana',
                price: '39.00',
                quantidade: '2  ',
                location: 'unidade recife',
                imageSrc: 'lasanha.webp',
              },
      // Outros produtos...
    ];
  
    const pedidos = [
        {
          id: 1,
          cliente: 'Zé',
          valorTotal: '90.00',
          endereco: 'rua 1, casa amarela',
          imageSrc: 'Pizza-31.webp',
        },
        {
          id: 1,
          cliente: 'Zé',
          valorTotal: '120.00',
          endereco: 'rua 1, casa amarela',
          imageSrc: 'Pizza-31.webp',
        },
 
      ];
    return (
        <>
        <Header />
       
        <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {pedidolabels.map((id) => (
              <th
                key={id}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {id}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pedidos.map((dados, index) => {
            const isLast = index === pedidos.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={dados.id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dados.cliente}
                  </Typography>
                </td>
              
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dados.valorTotal}
                  </Typography>
                </td>
                
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dados.endereco}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                 
                    onClick={()=> setOpen(true)}
                    variant="small"
                    color="blue-gray"
                    className="font-medium cursor-pointer"
                  >
                    Detalhes
                  </Typography>
                </td>
                {open ?
                  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity `}></div>

                    <div class={`fixed inset-0 z-10 w-screen overflow-y-auto `}>
                      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                             
                              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title"></h3>
                                <div class="mt-2">

                                {products.map((product) => (
          <div className=' flex items-center col-span-2 overlay-container p-2 ' key={product.id}>
            <img
              src={product.imageSrc}
              alt='produto'
              className='relative  h-20 w-25 overflow-hidden aspect-video object-cover block rounded-md'
            />
            <div className='overlay w-full rounded-md p-2 px-3 '>
              <p className='text-xl font-bold flex gap-2 flex-wrap'> Preço Unitario: {product.price}
              </p>
           <div className=''>
            <h2 className='text-lg  mt-2 text-zinc-800 text-left'>Nome: {product.name}</h2>

            <p className='truncate text-zinc-600 text-left'>Cozinha: {product.description}
            </p>

            <p className='text-zinc-600 text-left'>Quantidade: {product.quantidade}</p>
            </div>

            
          </div> </div>
        ))}

        <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() => setOpen(false)}>Rejeitar pedido</button> &nbsp;
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setOpen(false)}>Confirmar Pedido</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                         
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setOpen(false)}>Voltar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> : ''
                }
              </tr>
            );
          })}
            </tbody>
          </table>
        </Card>
      </>
    );
}