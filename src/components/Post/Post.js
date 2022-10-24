import React from "react";
// **corrigir import
import { Comentario } from "../Comentario/Comentario";
import { PostContainer } from "./styled";

export const Post = (props) => {
  console.log(props.post)
  return (
    <PostContainer className={"post-container"}>
      <p>{props.post.texto}</p>
      <button onClick={() => props.alterarCurtida(props.post.id)}>
        {props.post.curtido ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={() => props.apagarPost(props.post.id)}>Apagar</button>
      <Comentario comentario={props.comentario}
      // falta passar o onChange
       onChangeComentario={props.onChangeComentario}
        adicionaComentario={props.adicionaComentario}
        // falta props.
         comentarioDoPost={props.post.comentario}/>
    </PostContainer>
  );
};
