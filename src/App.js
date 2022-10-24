import React, { useState } from "react";
// ** não existe App.css
// import "./App.css"; (apagar ou usar index.css)
import { Post } from "./components/Post/Post";


// **Comentários da correção dos bugs:

export default function App() {
  const [textoNovoPost, setTextoNovoPost] = useState("")
  const [post, setPost] = useState({})
  const [comentario, setComentario] = useState("")

  const onChangeTextoNovoPost = (event) => {
    setTextoNovoPost(event.target.value);
  };

  const adicionarPost = () => {
    // Adiciona um post
    const novoPost = {
      id: Date.now(),
      texto: textoNovoPost,
      curtido: false,
    }

    setPost(novoPost)
  }

  const apagarPost = () => {
    // Apaga o post enviado
    // ** aqui ele seta com setPost(), fazendo com que post não seja mais um objeto, quebrando o app
    setPost({})
  }

  const alterarCurtida = () => {
    // Altera o status de curtida do post
    const alterarCurtida = {
      ...post,
      // ** falta inverter o valor de post
      curtido: !post.curtido
    }
    setPost(alterarCurtida)
  };

  function adicionaComentario() {
   const addComentario ={
    // ** falta fazer o spread no post. Ele transforma o objeto inteiro em um obj com apenas uma propriedade.
    ...post,
    comentario: comentario
   }
   setPost(addComentario)
  }
  const onChangeComentario = (e) => {
    // ** está valeu ao invés de value e transforma em um {objeto} ao invés de string
    setComentario(e.target.value)
  }
  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeTextoNovoPost}
          value={textoNovoPost}
        />
        <button onClick={adicionarPost}>Adicionar</button>
      </div>
      <br />
      <Post
        post={post}
        // ** corrigir nome das props
        alterarCurtida={alterarCurtida}
        apagarPost={apagarPost}
        onChangeComentario={onChangeComentario}
        adicionaComentario={adicionaComentario}
      />
    </div>
  );
}

