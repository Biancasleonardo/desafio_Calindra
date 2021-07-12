import { CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { CardProduct, ContainerMeta, Score, Visits } from './style';

const ProductsCard = ({ products }) => {
    const {name, type, _meta} = products

    return (
        <CardProduct variant="outlined">
            <CardContent>
                <Typography variant="body1" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2">
                    Tipo: {type}
                </Typography>
                <ContainerMeta>
                    <Score>
                        <Typography variant="body2" component="span">
                            Score: {(_meta.score)}
                        </Typography>
                    </Score>
                    <Visits>
                        <Typography variant="body2" component="span">
                            Visualizações: {(_meta.visitsClickCount)}
                        </Typography>
                    </Visits>
                </ContainerMeta>
            </CardContent>
        </CardProduct>
    );
};

export default ProductsCard;