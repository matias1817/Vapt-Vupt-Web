import { Link } from 'react-router-dom';

import { Header } from '../components/header';

import { Card, Typography } from "@material-tailwind/react";
import { useState } from 'react';


export default function Home (){

  
  const [open, setOpen] = useState(false)
    const pedidolabels = [ 'cliente', 'produto', 'descricao','valor total', 'endereco','açoes']

    const pedidos = [
        {
          id: 1,
          cliente: 'Zé',
          produto: 'pizza',
          descrição: 'sem azeitona',
          valorTotal: '30.00',
          endereco: 'rua 1, casa amarela',
          imageSrc: 'Pizza-31.webp',
        },
        {
          id: 1,
          cliente: 'Zé',
          produto: 'pizza',
          descrição: 'sem azeitona',
          valorTotal: '30.00',
          endereco: 'rua 1, casa amarela',
          imageSrc: 'Pizza-31.webp',
        }
        // Outros produtos...
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
                    {dados.produto}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {dados.descrição}
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
  
  <div className= { `fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ` }></div>

  <div class={`fixed inset-0 z-10 w-screen overflow-y-auto `}>
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title"></h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Confirme o pedido para que o cliente receba um status </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={ ()=> setOpen(false)}>Comfirmar</button>
          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancelar</button>
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