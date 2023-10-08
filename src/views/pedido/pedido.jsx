import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { Header } from '../components/header';
import { GlobalStyle } from '../produto/FormComponents';
import { Card, Typography } from "@material-tailwind/react";


export default function Home (){

    const pedidolabels = [ 'cliente', 'produto', 'descricacao','valor tortal', 'endereco']

    const pedidos = [
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
              <tr key={dados.cliente}>
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
                    {dados.descrição}
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
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    </>
      );
}