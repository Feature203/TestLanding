export interface IProduct {
    _id: string;
    images?: string[];
    price: number;
    rating: number;
    name: string;
    image: string;
}

export interface IData {
    message: string;
    data: {
        products: IProduct[];
    };
}

export const data: IData = {
    message: "Lấy các sản phẩm thành công",
    data: {
        products: [
            {
                _id: "60afb2c76ef5b902180aacba",
                images: [
                    // Danh sách hình ảnh
                ],
                price: 3190000,
                rating: 4.6,
                name: "Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng",
                image: "https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg",
            },
            {
                _id: "60afb2426ef5b902180aacb9",
                images: [
                    // Danh sách hình ảnh
                ],
                price: 2590000,
                rating: 4.2,
                name: "Điện thoại OPPO A12 (3GB/32GB) - Hàng chính hãng",
                image: "https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg",
            },
            {
                _id: "60afb1c56ef5b902180aacb8",
                images: [
                    // Danh sách hình ảnh
                ],
                price: 20990000,
                rating: 5,
                name: "Điện thoại Apple Iphone 12 64GB - Hàng chính hãng VNA",
                image: "https://api-ecom.duthanhduoc.com/images/a7fb7a18-743a-42bb-bead-36370c1d1aba.jpg",
            },
            // Thêm các sản phẩm khác ở đây
        ],
    },
};
