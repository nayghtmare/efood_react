import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import { getDescriptionProduct } from '../../utils'
import Card from '../../components/Card'
import { Container } from '../../global/globalStyle'
import {
  BannerContainer,
  CardListContainer,
  ContainerListPerfil,
  SubTitle,
  TextMessage,
  Title
} from './styles'

const CardListPerfil = () => {
  const { id } = useParams()
  const { data } = useGetRestaurantQuery(id!)
  function renderProductList(products: MenuDataProps[]) {
    if (!products) {
      return (
        <TextMessage>
          Ainda não existem produtos para este restaurante
        </TextMessage>
      )
    }

    return products.map((product) => (
      <Card
        key={product.id}
        card="second"
        kindButton="button"
        nameButton="Adicionar ao carrinho"
        title={product.nome}
        description={getDescriptionProduct(product.descricao)}
        cover={product.foto}
      />
    ))
  }

  if (!data) return <h3>Carregando...</h3>
  return (
    <ContainerListPerfil>
      <BannerContainer
        key={data.id}
        style={{ backgroundImage: `url(${data.capa})` }}
      >
        <Container>
          <SubTitle>{data?.tipo}</SubTitle>
          <Title>{data?.titulo}</Title>
        </Container>
      </BannerContainer>

      <Container>
        <CardListContainer key={data.id}>
          {renderProductList(data.cardapio)}
        </CardListContainer>
      </Container>
    </ContainerListPerfil>
  )
}

export default CardListPerfil
