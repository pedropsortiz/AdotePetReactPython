import type { NextPage } from 'next'

import Titulo from '../UI/components/Titulo/Titulo'
import Lista from '../UI/components/Lista/Lista'

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo="" 
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>.
          </span>
        } />
        <Lista pets={[{
          id: 1,
          nome: 'Bidu',
          historia: 'Lorem ipsum',
          foto: 'https://www.mundoecologia.com.br/wp-content/uploads/2019/11/Schnauzer-3.jpg'
        }]} />
    </div>
  )
}

export default Home
