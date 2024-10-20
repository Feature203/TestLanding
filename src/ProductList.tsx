// src/ProductList.js
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IProduct } from "./utils/data";

const ProductList = ({ products }: { products: IProduct[] }) => {
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                    <Card>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: "100%" }}
                        />
                        <CardContent>
                            <Typography variant="h6">{product.name}</Typography>
                            <Typography color="textSecondary">
                                Giá: {product.price.toLocaleString()} đ
                            </Typography>
                            <Typography color="textSecondary">
                                Đánh giá: {product.rating} ⭐
                            </Typography>
                            <Link
                                to={`/product/${encodeURIComponent(
                                    product.name
                                )}-i.${product._id}`}
                            >
                                Xem chi tiết
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            ))}

            <div className="w-full flex justify-center">
                <Link
                    to={"/login"}
                    className="mt-4 bg-slate-500 text-white border rounded p-4"
                >
                    Load More
                </Link>
            </div>
        </Grid>
    );
};

export default ProductList;
