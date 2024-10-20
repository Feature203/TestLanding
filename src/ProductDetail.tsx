// @ts-ignore
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { IProduct } from "./utils/data";

const ProductDetail = ({ products }: { products: IProduct[] }) => {
    const { id } = useParams();
    const productId: string | undefined = id?.split("-i.")[1];
    const product = products.find((p) => {
        // console.log(`p.id ${p._id}`);
        // console.log(`productId ${productId}`);
        return p._id === productId;
    });

    if (!product) {
        return <Typography variant="h6">Sản phẩm không tồn tại</Typography>;
    }

    return (
        <Card style={{ padding: "20px" }}>
            <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%" }}
            />
            <CardContent>
                <Typography variant="h4">{product.name}</Typography>
                <Typography variant="body1">
                    Giá: ${product.price.toLocaleString()} đ
                </Typography>
                <Typography variant="body1">
                    Đánh giá: {product.rating} ⭐
                </Typography>
                <Link to="/">Quay lại</Link>
            </CardContent>
        </Card>
    );
};

export default ProductDetail;
