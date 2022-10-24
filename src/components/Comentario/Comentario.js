import React from 'react'
// ** corrigir o import
import { ContainerComentario } from './styled'

export function Comentario(props) {
    return (
        <ContainerComentario>
            <input placeholder="Adicionar comentario"
            // ** falta value e onChange
             value={props.comentario}
              onChange={props.onChangeComentario} />
              {/* onClick sem camelCase */}
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            {/* está sendo passado como comentarioDoPost, mas acessado como props.post.comentario */}
            <p>{props.comentarioDoPost}</p>
        </ContainerComentario>
    )
}
