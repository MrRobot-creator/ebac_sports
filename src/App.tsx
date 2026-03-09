import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './store/api/produtosApi'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { isLoading } = useGetProdutosQuery()

  if (isLoading) {
    return (
      <>
        <GlobalStyle />
        <div className="container">
          <p>Carregando produtos...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
