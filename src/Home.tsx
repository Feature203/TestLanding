// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { products } from './data';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Danh sách sản phẩm
      </Typography>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <img src={product.image} alt={product.name} style={{ width: '100%' }} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">{product.category}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="h6">${product.price}</Typography>
                <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
