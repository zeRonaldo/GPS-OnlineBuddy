import React, { Fragment} from 'react';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import NoPic from '../res/no-pict.png';
import ListEvals from '../templates/ListEvals';

const GamePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
        return(
            <Fragment> 
                <Header/>
                <div className="content">
                        <section className="profile-info">
                            
                            <div className="identity">
                                <h1>Nome do jogo</h1>
                                <h3>Produtora - ano</h3>
                                <p>Gênero</p>
                            </div>
                            <div className="actions">
                                <div className="evaluate-game">****</div>
                                <div className="button">Adcionar Favoritos</div>
                                
                            </div>
                        </section>
                        <section className="game-carroussel">
                            
                        </section>
                        <section className="game-sinopse">
                            <h4>Descrição</h4>
                            <p>
                            Fusce cursus dapibus arcu, sed laoreet libero congue at. Cras interdum tellus a massa pulvinar, et luctus elit egestas. Quisque velit sapien, laoreet ut ultricies et, dapibus vel felis. Aliquam maximus vel nisi nec porttitor. Quisque tincidunt libero quis orci hendrerit venenatis. Sed varius at lectus eget imperdiet. Sed nec elit non odio consequat fermentum. Morbi rhoncus eros enim, a facilisis lectus vulputate at. Maecenas nisl lacus, finibus ac volutpat vel, ornare id ligula. Fusce dolor libero, pretium vitae convallis ornare, hendrerit tincidunt metus. Praesent porta ac nunc sit amet dictum. Nulla nec laoreet sapien. In vitae velit elementum tellus auctor interdum nec at mi. Nulla mollis pulvinar velit.
                            </p>
                            <p>
                            Phasellus purus tortor, auctor interdum dignissim at, malesuada in sem. Quisque suscipit metus magna, a egestas erat tempus eu. Proin ultricies convallis risus, et rutrum ipsum maximus sed. Duis aliquam dui mauris, non cursus mi suscipit id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed maximus purus vitae est suscipit molestie. Nam tristique nec massa in feugiat. Phasellus egestas ligula id suscipit volutpat. Aliquam in nisi lorem. Etiam tincidunt mi sodales, maximus sapien non, volutpat magna. Nullam eu iaculis nulla. Nullam felis eros, sagittis et aliquam id, sollicitudin nec elit. Nulla nec lorem placerat, posuere nunc vitae, pulvinar odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eu quam sit amet magna iaculis efficitur in a arcu. Nunc et risus vitae leo ornare mollis.
                            </p>
                        </section>
                        
                        <section className="game-evals">
                            <h4>Comentários</h4>
                            <ListEvals/>
                        </section>
                </div>
                <Footer/>
            </Fragment>
        )
}

    
export default GamePage;