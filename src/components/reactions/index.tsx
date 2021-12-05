import { Reaction1 } from 'public/reactions/reaction1'
import * as S from './styles'

export const Reactions = () => {
  const reactions = [1, 2, 3, 4, 5, 6, 7]

  return (
    <S.Container>
      <S.Title>O que achou deste post?</S.Title>
      <S.Content>
        {reactions.map((reaction) => (
          <S.ReactionContainer key={reaction}>
            <Reaction1 />
          </S.ReactionContainer>
        ))}
      </S.Content>
    </S.Container>
  )
}
