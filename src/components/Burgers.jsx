

import React from 'react'
import './Burgers.css'

const Burgers = () => {
  return (
    <div>

        <main>

            <h2>Confira os melhores hamburgueres</h2>

            <section className='card'>
                <img src="https://img.freepik.com/fotos-gratis/grande-cheeseburger-e-batatas-fritas_140725-2256.jpg?t=st=1727713920~exp=1727717520~hmac=28908a2be0b76691bc901d2faaa1576f513d49c76d549bbcbd55035ed0c73a95&w=1380" alt=""/>
                <h3>Burger Simples</h3>
                <p>Hambúrguer de carne bovina, queijo brie, cogumelos sauté, cebolas, molho de mostarda dijon, e pão brioche.</p>
                <p>15,90</p>
                <button>Adicionar ao Carrinho</button>
            </section>

            <section className='card'>
                <img src="https://img.freepik.com/fotos-gratis/hamburguer-de-carne-com-salada-de-queijo-e-tomate-em-fundo-escuro-de-vista-frontal_140725-89540.jpg?t=st=1727714494~exp=1727718094~hmac=23d9babce3d3ebf0b43298f67009282e3687bcc8d2a2bb27d9f4e7e9cfe92732&w=1380" alt=""/>
                <h3>Burger Duplo</h3>
                <p>Hambúrguer de carne bovina, queijo cheddar, bacon crocante, alface, tomate, picles, e molho especial, pão de hambúrguer clássico.</p>
                <p>23,45</p>
                <button>Adicionar ao Carrinho</button>
            </section>

            <section className='card'>
                <img src="https://img.freepik.com/fotos-gratis/sanduiche-grande-hamburguer-hamburguer-com-carne-cebola-roxa-tomate-e-bacon-frito_2829-5398.jpg?t=st=1727714527~exp=1727718127~hmac=f04f8e597857cfe97180ed19bb886b8b9db046fdf583aa061cace59c3ead828b&w=900" alt=""/>
                <h3>Burger Completo</h3>
                <p>Hambúrguer de frango, , cebola roxa, molho de maionese com mostarda, servido em pão brioche</p>
                <p>29,40</p>
                <button>Adicionar ao Carrinho</button>
            </section>

            <section className='card'>
                <img src="https://img.freepik.com/fotos-gratis/sanduiche-com-hamburguer-de-frango-tomate-queijo-e-alface_2829-16293.jpg?t=st=1727714547~exp=1727718147~hmac=10511d1bf2a726c17e03dc44551689c2d5f67bb8f034668121968d382ffe5dd5&w=1380" alt=""/>
                <h3>Burger Fit</h3>
                <p>Hambúrguer de frango, queijo, cebolas, alface, molho de mostarda dijon, e pão brioche.</p>
                <p>19,90</p>
                <button>Adicionar ao Carrinho</button>
            </section>

            <section className='card'>
                <img src="https://img.freepik.com/fotos-gratis/hamburguer-de-frente-com-pickles_23-2148784493.jpg?t=st=1727714588~exp=1727718188~hmac=1680e60473c04641931d4ee401e85431d785121ee7fe65e56f12fc83f0a69499&w=1060" alt=""/>
                <h3>Burger Acebolado</h3>
                <p>Hambúrguer de carne, queijo brie, cebola roxa, picles e pão brioche.</p>
                <p>15,90</p>
                <button>Adicionar ao Carrinho</button>
            </section>

            <section className='card'>
                <img src="https://img.freepik.com/fotos-gratis/hamburguer-vegetariano-de-vista-frontal-no-balcao_23-2148784524.jpg?t=st=1727714613~exp=1727718213~hmac=34aef64be02cc37384d09b72c38111245239e4a92a1ac9e40bf31a7cf36a9bcc&w=1380" alt=""/>
                <h3>Burger Vegano</h3>
                <p>Hambúrguer de carne vegana, alface,  cebola roxa, e pão integral.</p>
                <p>21,30</p>
                <button>Adicionar ao Carrinho</button>
            </section>

        </main>
      
    </div>
  )
}

export default Burgers
