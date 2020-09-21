import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'justify'
    }
}))

const Term = () => {
    const classes = useStyles()
    return (
        <Container>
            <div className={classes.root}>
                <h1>Terms & Conditions</h1>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu viverra sapien.
                    Donec eget enim vitae leo rhoncus eleifend. Donec nec enim faucibus, sollicitudin ex sit amet, fringilla sapien. 
                    Donec et tempus justo. Ut quis mauris non ligula tincidunt viverra in ac velit. 
                    Quisque non neque vel urna tristique cursus. 
                    Donec augue arcu, ornare nec accumsan sit amet, dignissim eu dui. 
                    Nam pharetra dolor lacus, nec aliquam ante finibus a. 
                    Integer non odio dictum sapien iaculis euismod. 
                    Duis augue urna, mattis eu arcu ut, tincidunt dictum nunc. 
                    Ut viverra turpis placerat elit sodales, vitae porttitor arcu aliquet. 
                    Aliquam erat volutpat. Morbi sem lectus, hendrerit sit amet enim in,
                    luctus pharetra sapien. Nunc ac libero quis lorem tempus lobortis ac non massa.
                    <br /><br />
                    Etiam libero urna, commodo ac nisl ac, ultricies aliquet orci. 
                    Donec id faucibus metus, sit amet rhoncus justo. Quisque at leo erat. 
                    Nunc molestie urna posuere massa rhoncus, non pretium lorem euismod. 
                    Praesent a mattis ante, nec tempor augue. Donec pretium ut dolor vel mattis. 
                    Nulla vitae velit neque. Mauris bibendum malesuada risus, id ultricies augue sollicitudin id.
                    <br /><br />
                    Nullam et ante nibh. Mauris dignissim ex id mauris porttitor, in tempor neque dignissim. 
                    Ut et velit metus. Pellentesque vel sagittis arcu. 
                    Ut ornare condimentum odio, et tincidunt odio suscipit sit amet. 
                    Nunc consequat aliquet dolor, ut eleifend neque volutpat sed. Sed et ultrices augue. 
                    Nullam mattis, quam vel pulvinar efficitur, mi urna faucibus tellus, sed eleifend est metus non nibh. 
                    In feugiat dignissim mi, ac gravida est rhoncus eu. 
                    Maecenas feugiat, mauris ut volutpat porttitor, nisl ligula malesuada lorem, vitae maximus ante magna quis sapien. 
                    Curabitur vitae metus sit amet nisl molestie rhoncus. 
                    Maecenas fermentum, lectus nec interdum dignissim, urna sem aliquet eros, posuere condimentum lacus orci id odio. 
                    Nullam volutpat erat elit, ut tempor est blandit et. Donec eu augue metus.
                    <br /><br />
                    Donec commodo sapien fermentum, vehicula felis sit amet, tristique odio. 
                    In vel convallis nisi, ac rutrum arcu. 
                    Fusce mollis est quis turpis gravida, id tincidunt enim mattis. 
                    Donec maximus dui tellus, eu fermentum augue posuere ac. 
                    Morbi ante enim, volutpat eu semper quis, congue a nibh. 
                    Nam semper nunc elementum tincidunt luctus. 
                    Sed varius ornare ex, ac maximus erat egestas et. 
                    Praesent viverra sem neque, in ultricies felis aliquet id.
                    <br /><br />
                    Aenean feugiat tincidunt dolor, quis tempor est.
                    Nunc consequat erat sit amet scelerisque tempor.
                    Integer dictum non dui iaculis aliquam.
                    Curabitur volutpat dolor non dignissim tristique.
                    Cras sapien velit, volutpat eget libero vitae, dignissim tristique ex.
                    Nullam et elit elementum, convallis erat at, volutpat nulla.
                    Maecenas tincidunt est in semper bibendum.
                    Maecenas interdum rutrum laoreet. Sed vel sapien urna.
                    Nullam nisi purus, bibendum ut feugiat a, dignissim sit amet est.
                    Cras vulputate quis elit id semper. 
                    Suspendisse sem metus, dapibus sit amet eleifend ac, dapibus vitae tellus.
                </p>
            </div>
        </Container>
    );
};

export default Term;