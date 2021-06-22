import React from 'react';

const Card = (props) => {
    const { dados } = props;
    return ( 
        <div>
            <h1>Nome: {dados.nome}</h1>
            <h2>Idade: {dados.idade}</h2>
            <h3>Profissão: {dados.profissao}</h3>
        </div>
     );
}
 
export default Card;