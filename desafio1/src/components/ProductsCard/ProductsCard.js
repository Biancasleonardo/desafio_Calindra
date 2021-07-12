import { CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { CardProduct, ContainerMeta, Score, Visits } from './style';

const ProductsCard = () => {
    return (
        <CardProduct variant="outlined">
            <CardContent>
                <Typography variant="body1" component="h2">
                    Nome do Produto
                </Typography>
                <Typography variant="body2">
                    Composição: Orgânico
                </Typography>
                <ContainerMeta>
                    <Score>
                        <Typography variant="body2" component="span">
                            Score: 35.0000
                        </Typography>
                    </Score>
                    <Visits>
                        <Typography variant="body2" component="span">
                            Visualizações: 35
                        </Typography>
                    </Visits>
                </ContainerMeta>
            </CardContent>
        </CardProduct>
    );
};

export default ProductsCard;